import { MessageType, TransactionEvent, TOPIC_TYPE } from "../../types";

export interface PublishType {
  topic: TOPIC_TYPE;
  event: TransactionEvent;
  message: Record<string, any>;
}

export type MessageHandler = (input: MessageType) => void;

export type MessageBrokerType = {
  // producer
  connectProducer: <T>() => Promise<T>;
  disconnectProducer: () => Promise<void>;
  publish: (data: PublishType) => Promise<boolean>;

  // consumer
  connectConsumer: <T>() => Promise<T>;
  disconnectConsumer: () => Promise<void>;
  subscribe: (
    messageHandler: MessageHandler,
    topic: TOPIC_TYPE
  ) => Promise<void>;
};
