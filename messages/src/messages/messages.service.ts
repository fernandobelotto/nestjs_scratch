import { MessagesRepository } from "./messages.repository";

export class MessagesService {

    messageRepo: MessagesRepository
    constructor() {
        // dont do this (educational purposes)
        this.messageRepo = new MessagesRepository();
    }

    findOne(id: string) {
        return this.messageRepo.findOne(id)
    }

    create(message: string) {
        return this.messageRepo.create(message)
    }
    
    findAll() {
        return this.messageRepo.findAll()
    }

}