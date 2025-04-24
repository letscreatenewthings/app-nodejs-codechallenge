import { ITransactionRepository } from '../interface/transactionRepository.interface';
import { transformCreateTransactionRequestToTransaction } from '../utils/transformer/transformer';
import { MessageBroker } from "../utils/broker/message-broker";
import { TransactionEvent } from '../types';

export class TransactionService {
    private _repository: ITransactionRepository;

    constructor(repository: ITransactionRepository) {
        this._repository = repository;
    }

    async createTransaction(transaction: any) {
        const input = transformCreateTransactionRequestToTransaction(transaction);
        const data = await this._repository.create(input);
        if (!data.id) {
            throw new Error("Unable to create transaction");
        }
        await MessageBroker.publish({
            topic: "TransactionEvents",
            event: TransactionEvent.CREATE_TRANSACTION,
            message: data
        });
        return data;
    }

    async updateTransaction(transaction: any) {
        const data = await this._repository.update(transaction);
        if (!data.id) {
            throw new Error("Unable to update transaction");
        }
        return data;
    }

    async getTransactions() {
        const transactions = await this._repository.find();
        return transactions;
    }
    
    async getTransaction(id: string) {
        const transaction = await this._repository.findOne(id);
        return transaction;
    }
}
