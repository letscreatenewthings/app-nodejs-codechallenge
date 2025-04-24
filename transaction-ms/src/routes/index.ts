import { Router, Request, Response, NextFunction } from 'express';
import { TransactionRepository } from '../repository/transaction.repository';
import { TransactionService } from '../services/transaction.service';
import { CreateTransactionRequest } from '../dto/transaction.dto';
import { MessageBroker } from "../utils/broker/message-broker";
import { transformTransactionToResponseTransactionGet, transformTransactionToResponseTransactionList } from '../utils/transformer/transformer';

const router = Router();
export const transactionService = new TransactionService(new TransactionRepository());

MessageBroker.subscribe((message) => {
    console.log("Consumer received the message");
    console.log("Message received", message.data);
    transactionService.updateTransaction(message.data);
}, "AntifraudEvents");

router.post('/',
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const input = req.body as CreateTransactionRequest;
            const transaction = await transactionService.createTransaction(input);
            res.status(201).json(transaction);
        } catch (error) {
            next(error);
        }
    }
)

router.get('/',
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const transactions = await transactionService.getTransactions();
            res.status(200).json(transformTransactionToResponseTransactionList(transactions));
        } catch (error) {
            next(error);
        }
    }
)

router.get('/:id',
    async (req: Request<any, any, any, any>, res: Response, next: NextFunction) => {
        try {
            const id = req.params.id;
            const transaction = await transactionService.getTransaction(id);
            res.status(200).json(transformTransactionToResponseTransactionGet(transaction));
        } catch (error) {
            next(error);
        }
    }
)

export default router;