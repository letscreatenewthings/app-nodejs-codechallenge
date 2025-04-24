import { Transaction } from "@prisma/client";
import { CreateTransactionRequest, ResponseTransactionGet } from "../../dto/transaction.dto";

export function transformCreateTransactionRequestToTransaction(input: CreateTransactionRequest): Partial<Transaction> {
    return {
        idDebit: input.accountExternalIdDebit,
        idCredit: input.accountExternalIdCredit,
        typeId: input.tranferTypeId,
        value: input.value,
    };
}

function mapTransactionType(id: number): string {
    if (id === 1) {
        return "PENDING";
    } else if (id === 2) {
        return "COMPLETED";
    } else {
        return "CANCELED"; 
    }
}

function mapTransactionStatus(status: string): number {
    if (status.trim().localeCompare("PENDING") === 0) {
        return 1;
    } else if (status.trim().localeCompare("ACCEPTED") === 0) {
        return 2;
    } else {
        return 3; 
    }
}

export function transformTransactionToResponseTransactionGet(transaction: Transaction): ResponseTransactionGet {
    return {
        transactionExternalId: transaction.id,
        transactionType: {
            id: transaction.typeId,
            name: mapTransactionType(transaction.typeId),
        },
        transactionStatus: {
            id: mapTransactionStatus(transaction.status),
            name: transaction.status,
        },
        value: transaction.value,
        createdAt: transaction.creationDate,
    };
}

export function transformTransactionToResponseTransactionList(transactions: Transaction[]): ResponseTransactionGet[] {
    let response: ResponseTransactionGet[] = [];
    transactions.forEach((transaction) => {
        response.push(transformTransactionToResponseTransactionGet(transaction));
    });
    return response;
}