import { TicketType, Ticket } from "@prisma/client";
import ticketsRepository from "@/repositories/tickets-repository/index"

async function getAllTicketsType(): Promise<TicketType[]> {
    const ticketType = await ticketsRepository.getTicketsType()
    return ticketType
}

async function getAllTickets(): Promise<Ticket[]> {
    const allTickets = await ticketsRepository.getTickets()
    return allTickets
}



const ticketsService = {
    getAll: getAllTicketsType,
    getAllTickets
}

export default ticketsService