export interface ParsedTransactionInfo {
  amount: number;
  from: string;
  to: string;
}

export interface EnrichedTransaction {
  signature: string;
  blockTime?: number | null;
  err?: Error;
  memo?: string | null;
  parsedTransaction?: ParsedTransactionInfo;
}