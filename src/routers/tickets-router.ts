import { Router } from "express";
import { getTicketsType, getTickets } from "@/controllers/tickets-controller";

const ticketsRouter = Router()

ticketsRouter
    .get('/types', getTicketsType)
    .get('/', getTickets)


export { ticketsRouter }