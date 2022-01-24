import {  readFileSync, writeFileSync } from "fs";

export class MessagesRepository {

   async  findOne(id: string) {
        const content =  readFileSync('messages.json', {encoding: 'utf8'})
        const messages = JSON.parse(content)
        return messages[id]
    }

   async  create(message: string) {
    const content =  readFileSync('messages.json', {encoding: 'utf8'})
        const messages =  JSON.parse(content)
        const id = Math.floor(Math.random() * 9999)

        const obj = { id, content: message }
        messages[id] = obj

        writeFileSync('messages.json', JSON.stringify(messages))

    }

    async findAll() {
        const content =  readFileSync('messages.json', {encoding: 'utf8'})
        return JSON.parse(content)
    }
}