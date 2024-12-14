'use client'

import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { useEffect, useState } from 'react'
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card'

export function TransactionList() {
  const { connection } = useConnection()
  const { publicKey } = useWallet()
  const [transactions, setTransactions] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  const THRESHOLD = 0.00001 

  useEffect(() => {
    if (!publicKey) return

    const fetchTransactions = async () => {
      setLoading(true)
      try {
        const signatures = await connection.getSignaturesForAddress(publicKey, { limit: 10 })
        const txs = await Promise.all(
          signatures.map(async (sig) => {
            const tx = await connection.getTransaction(sig.signature)

            if (!tx) {
              return {
                id: sig.signature,
                type: 'Unknown',
                amount: 0,
                to: 'Unknown',
                from: 'Unknown',
                date: 'Unknown',
              }
            }

            
            const amount = tx?.meta?.preTokenBalances?.reduce((total: number, balance : any) => {
              if (balance.uiTokenAmount) {
                return total + balance.uiTokenAmount.uiAmount
              }
              return total
            }, 0) || 0

          
            const formattedAmount = amount.toFixed(10)

            const displayAmount = amount < THRESHOLD ? `Less than ${formattedAmount}` : formattedAmount

            const to = tx?.transaction.message.accountKeys[1]?.toBase58() || 'Unknown'
            const from = tx?.transaction.message.accountKeys[0]?.toBase58() || 'Unknown'
            const date = tx.blockTime ? new Date(tx.blockTime * 1000).toLocaleString() : 'Unknown'

            return { 
              id: sig.signature,
              type: 'Transaction',
              amount: displayAmount,
              to,
              from,
              date
            }
          })
        )
        setTransactions(txs)
      } catch (error) {
        console.error('Error fetching transactions:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchTransactions()
  }, [publicKey, connection])

  if (!publicKey) return null

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">Recent Transactions</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
          </div>
        ) : (
          transactions.map((tx) => (
            <Card key={tx.id} className="bg-white text-gray-900 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-blue-600">{tx.type}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-1"><span className="font-medium">Amount:</span> {tx.amount} SOL</p>
                {tx.to && <p className="text-sm mb-1 truncate"><span className="font-medium">To:</span> {tx.to}</p>}
                {tx.from && <p className="text-sm mb-1 truncate"><span className="font-medium">From:</span> {tx.from}</p>}
                <p className="text-sm"><span className="font-medium">Date:</span> {tx.date}</p>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}
