
import { Transaction } from "../../model/transaction.model";

export function mapUpdateTransactionStatus(input: Transaction, status: string): Transaction {
    return {
        ... input, status
    };
}