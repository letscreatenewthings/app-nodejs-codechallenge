export enum AntifraudEvent {
    UPDATE_TRANSACTION_STATUS = "update-transaction"
}

export enum TransactionEvent {
    CREATE_TRANSACTION = "create-transaction"
}

export type TOPIC_TYPE = "TransactionEvents" | "AntifraudEvents";

export interface MessageType {
    event: TransactionEvent;
    data: Record<string, any>;
}