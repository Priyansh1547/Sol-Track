'use client'

import dynamic from 'next/dynamic'
import { useWallet } from '@solana/wallet-adapter-react'
import { TransactionList } from '@/components/TransactionList'

const WalletMultiButtonDynamic = dynamic(
  async () => (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
  { ssr: false }
)

export default function Home() {
  const { publicKey } = useWallet()

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-medium text-black mb-2">Wallet <span className="text-blue-500">Transaction</span></h1> 
          <p className="flex justify-center pt-4 text-xl text-slate-500">Connect your wallet and view your recent transactions</p>
          <div className="pt-8 flex justify-center">
            <WalletMultiButtonDynamic className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105" /> 
          </div>
        </header>
        <div className="flex flex-col sm:flex-row justify-center items-center mb-8 space-y-4 sm:space-y-0">
          <h2 className="text-4xl font-medium text-gray-800">Your <span className="text-blue-500">Transactions</span></h2>
        </div>

        {publicKey ? (
          <div className="space-y-6">
            <p className="text-lg text-gray-600 mb-6">
              Connected: <span className="font-mono bg-gray-100 p-1 rounded">{publicKey.toBase58()}</span>
            </p>
            <TransactionList />
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 mb-4">Connect your wallet to view transactions</p>
            <svg className="w-24 h-24 mx-auto text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
            </svg>
          </div>
        )}
      </div>
    </div>
  )
}
