import { PrismaClient, Transaction } from "@prisma/client";
import { NotFoundError } from "../utils/error/errors";

export class TransactionRepository {
  _prisma: PrismaClient;

  constructor() {
    this._prisma = new PrismaClient();
  }

  async create(data: Transaction): Promise<Transaction> {
    return this._prisma.transaction.create({
      data,
    });
  }

  async update(data: Transaction): Promise<Transaction> {
    return this._prisma.transaction.update({
        where: { id: data.id },
        data,
    });
  }

  async find(): Promise<Transaction[]> {
    return this._prisma.transaction.findMany();
  }

  async findOne(id: string): Promise<Transaction> {
    const transaction = await this._prisma.transaction.findFirst({
      where: { id },
    });
    if (transaction) {
      return Promise.resolve(transaction);
    }
    throw new NotFoundError("Transaction not found");
  }
}