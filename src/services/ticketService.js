import { TicketManager } from "../dao/managerMongo/ticketMongo.js";

const ticketManager = new TicketManager

class TicketService{
    async createTicket(code, purchase_datetime, amount, purchaser){
        try {
            console.log(JSON.stringify(purchaser))
            return await ticketManager.createTicket(code, purchase_datetime, amount, purchaser)
        } catch (error) {
            console.log(error);
        }
    }
}

export default TicketService