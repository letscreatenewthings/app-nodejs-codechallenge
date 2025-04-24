export interface CreateTransactionRequest {
    accountExternalIdDebit: string;
    accountExternalIdCredit: string;
    tranferTypeId: number;
    value: number;
}

interface TransactionType {
    id: number;
    name: string;
}

interface TransactionStatus {
    id: number;
    name: string;
}

export interface ResponseTransactionGet {
    transactionExternalId: string;
    transactionType: TransactionType;
    transactionStatus: TransactionStatus;
    value: number;
    createdAt: Date;
}