import express from 'express';
import { MessageBroker } from "./utils/broker/message-broker";
import { AntifraudService } from './services/antifraud.service';

const app = express();

app.use(express.json());

export const antifraudService = new AntifraudService();

MessageBroker.subscribe((message) => {
    console.log("Consumer received the message");
    console.log("Message received", message.data);
    antifraudService.evaluateTransaction(message.data);
}, "TransactionEvents");

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});