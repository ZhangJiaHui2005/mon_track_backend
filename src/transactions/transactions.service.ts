import { Body, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Transaction } from './transactions.schema';
import { Model } from 'mongoose';
import { TransactionDto } from './dto/transaction.dto';

@Injectable()
export class TransactionsService {
    constructor(
        @InjectModel(Transaction.name)
        private transactionModel: Model<Transaction>
    ) {}

    create(dto: TransactionDto) {
        return this.transactionModel.create(dto)
    }

    findAll() {
        return this.transactionModel.find().populate("categoryId")
    }
}
