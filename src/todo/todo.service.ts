import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';

@Injectable()
export class TodoService {
    private readonly logger = new Logger(TodoService.name);

    constructor(@InjectRepository(Todo) private todoRepository: Repository<Todo>) {     
    }

    @Cron(CronExpression.EVERY_MINUTE)
    async handleOldTodos() {
        var todos = await this.todoRepository.find();
        this.logger.log(`Todos: ${todos.length}`);
    }
}
