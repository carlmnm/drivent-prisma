import { prisma } from "@/config";
import { Ticket, TicketStatus, TicketType } from "@prisma/client";

async function getTicketsType() {
    const tickets = await prisma.ticketType.findMany()
    return tickets
}

async function getTickets(enrollmentId: number) {
    const tickets = await prisma.ticket.findFirst({
        where: { enrollmentId },
        include: {
            TicketType: true,
        }
    })
    return tickets
}

async function postTickets(
    enrollmentId: number, 
    ticketTypeId: number, 
    status: TicketStatus
): Promise<Ticket & { TicketType: TicketType }> {
    const newTicket = await prisma.ticket.create({
        data: {
            ticketTypeId,
            enrollmentId,
            status
        },
        include: {
            TicketType: true
        }
    })
    return newTicket
}

const ticketsRepository = {
    getTicketsType,
    getTickets,
    postTickets
}

export default ticketsRepository