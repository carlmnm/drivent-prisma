import { TicketType, Ticket } from "@prisma/client";
import ticketsRepository from "@/repositories/tickets-repository/index"
import enrollmentRepository from "@/repositories/enrollment-repository";

async function getAllTicketsType(): Promise<TicketType[]> {
    const ticketType = await ticketsRepository.getTicketsType()
    return ticketType
}

async function getAllTickets(id: number): Promise<Ticket & {TicketType: TicketType}> {
    const enrollmentId = await enrollmentRepository.findWithAddressByUserId(id)
    const allTickets = await ticketsRepository.getTickets(enrollmentId.id)
    if (!enrollmentId || !allTickets) {
        throw new Error()
    }

    return allTickets
}

async function postTickets(id: number, ticketType: number) {
    const enrollmentId = await enrollmentRepository.findWithAddressByUserId(id)
    console.log(enrollmentId)
    const status = 'RESERVED'
    const newTicket = await ticketsRepository.postTickets(enrollmentId.id, ticketType, status)
    if (!enrollmentId || !newTicket) {
        throw new Error()
    }
    return newTicket
    
}



const ticketsService = {
    getAll: getAllTicketsType,
    getAllTickets, 
    postTickets
}

export default ticketsService