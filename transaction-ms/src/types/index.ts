export enum TransactionEvent {
    CREATE_TRANSACTION = "create-transaction"
}

export enum AntifraudEvent {
    UPDATE_TRANSACTION_STATUS = "update-transaction"
}

export type TOPIC_TYPE = "TransactionEvents" | "AntifraudEvents";

export interface MessageType {
    event: AntifraudEvent;
    data: Record<string, any>;
}