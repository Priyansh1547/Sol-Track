"use client";

import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { ArrowDownUp, CheckCircle2, XCircle } from "lucide-react";
import { TransactionError } from "@solana/web3.js";
import Link from "next/link";

interface Transaction {
  id: string;
  type: string;
  amount: string;
  to: string;
  from: string;
  date: string;
  blockTime?: number | null;
  err?: TransactionError | null;
}

export function TransactionList() {
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!publicKey) return;

    const fetchTransactions = async () => {
      setLoading(true);
      try {
        const signatures = await connection.getSignaturesForAddress(publicKey, {
          limit: 20,
        });
        const txs = await Promise.all(
          signatures.map(async (sig) => {
            const tx = await connection.getTransaction(sig.signature);

            if (!tx) {
              return {
                id: sig.signature,
                type: "Unknown",
                amount: "0",
                to: "Unknown",
                from: "Unknown",
                date: "Unknown",
              };
            }

            const amount =
              tx?.meta?.preBalances.length && tx?.meta?.postBalances.length
                ? tx.transaction.message.accountKeys[0].toBase58() ===
                  publicKey.toBase58()
                  ? (tx.meta.preBalances[0] - tx.meta.postBalances[0]) / 1e9 // Outgoing
                  : (tx.meta.postBalances[1] - tx.meta.preBalances[1]) / 1e9 // Incoming
                : 0;

            const formattedAmount = Math.abs(amount).toString();

            const to =
              tx?.transaction.message.accountKeys[1]?.toBase58() || "Unknown";
            const from =
              tx?.transaction.message.accountKeys[0]?.toBase58() || "Unknown";
            const date = tx.blockTime
              ? new Date(tx.blockTime * 1000).toLocaleString()
              : "Unknown";

            return {
              id: sig.signature,
              type: "Transaction",
              amount: formattedAmount,
              to,
              from,
              date,
              blockTime: tx.blockTime,
              err: sig.err,
            };
          })
        );
        setTransactions(txs);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, [publicKey, connection]);

  if (!publicKey) return null;

  return (
    <>
      <div className="space-y-6">
        <div className="grid gap-4 grid-cols-1">
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
            </div>
          ) : (
            transactions.map((tx) => (
              <div key={tx.id}>
                <Link
                  href={`https://solscan.io/tx/${tx.id}?cluster=devnet`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="bg-white border  hover:border-blue-500 rounded-lg p-6 shadow-md hover:shadow-lg transition-colors duration-100">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-primary/10 rounded-full">
                          <ArrowDownUp className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-sm truncate text-gray-600 max-w-[200px]">
                            {tx.id}
                          </p>
                          <p className="text-xs text-gray-500">
                            {format(
                              (tx.blockTime ?? Date.now() / 1000) * 1000,
                              "MMM dd, yyyy HH:mm:ss"
                            )}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-semibold text-gray-900">
                          {tx.amount} SOL
                        </span>
                        {tx.err ? (
                          <XCircle className="h-5 w-5 text-red-500" />
                        ) : (
                          <CheckCircle2 className="h-5 w-5 text-green-500" />
                        )}
                      </div>
                    </div>

                    <>
                      <div className="flex items-center text-sm">
                        <span className="text-gray-500 w-16">From:</span>
                        <span className="text-gray-700 truncate max-w-[200px] inline-block">
                          {tx.from}
                        </span>
                      </div>
                      <div className="flex items-center text-sm">
                        <span className="text-gray-500 w-16">To:</span>
                        <span className="text-gray-700 truncate max-w-[200px] inline-block">
                          {tx.to}
                        </span>
                      </div>
                    </>
                  </div>
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
