import { Body, Controller, Get, Post } from '@nestjs/common';
import { TransactionDto } from './dto/transaction.dto';
import { TransactionsService } from './transactions.service';

@Controller('transactions')
export class TransactionsController {
    constructor(private readonly service: TransactionsService) {}

    @Post()
    create(@Body() dto: TransactionDto) {
        return this.service.create(dto)
    }

    @Get()
    findAll() {
        return this.service.findAll()
    }
}
