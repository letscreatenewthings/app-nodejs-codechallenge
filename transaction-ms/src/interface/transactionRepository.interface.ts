import { Transaction } from "@prisma/client";

export interface ITransactionRepository {
    create(data: Partial<Transaction>): Promise<Transaction>;
    update(data: Transaction): Promise<Transaction>;
    find(): Promise<Transaction[]>;
    findOne(id: string): Promise<Transaction>;
}
  