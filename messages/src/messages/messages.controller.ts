import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {


    messageServ: MessagesService

    constructor() {
        this.messageServ = new MessagesService();
    }

    @Get()
    listMessages() {
        return this.messageServ.findAll()
    }

    @Post()
    createMessage(@Body() body: CreateMessageDto){
        return this.messageServ.create(body.content)

    }

    @Get(":id")
    async getMessage(@Param('id') id: string){
        const message =  await this.messageServ.findOne(id)
        
        if (!message) {
            throw new NotFoundException('message not found')
        }

        return message
    }
}
