import { TicketManager } from "../dao/managerMongo/ticketMongo.js";

const ticketManager = new TicketManager

class TicketService{

    async createTicket(code, purchase_datetime, amount, purchaser){
        try {
            return await ticketManager.createTicket(code, purchase_datetime, amount, purchaser)
        } catch (error) {
           
           return error
        }
    }
}

export default TicketService