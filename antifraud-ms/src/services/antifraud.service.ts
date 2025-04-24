import { Transaction } from "../model/transaction.model";
import { MessageBroker } from "../utils/broker/message-broker";
import { AntifraudEvent } from '../types';
import { mapUpdateTransactionStatus } from "../utils/transformer/transformer";

export class AntifraudService {
    async evaluateTransaction(transaction: any) {
        let t = transaction as Transaction;
        let output = t.value <= 1000 ? "ACCEPTED" : "REJECTED";
        await MessageBroker.publish({
            topic: "AntifraudEvents",
            event: AntifraudEvent.UPDATE_TRANSACTION_STATUS,
            message: mapUpdateTransactionStatus(t, output)
        });
    }
}