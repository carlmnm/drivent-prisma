import { prisma } from "@/config";

async function getTicketsType() {
    const tickets = await prisma.ticketType.findMany()
    return tickets
}

async function getTickets() {
    const tickets = await prisma.ticket.findMany({
        include: {
            TicketType: true,
        }
    })
    return tickets
}

const ticketsRepository = {
    getTicketsType,
    getTickets
}

export default ticketsRepository