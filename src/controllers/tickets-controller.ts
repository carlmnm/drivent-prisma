import ticketsService from "@/services/tickets-service";
import { Request, Response } from "express";
import httpStatus from "http-status";
import { AuthenticatedRequest } from "@/middlewares";

export async function getTicketsType(req: AuthenticatedRequest, res: Response) {
    try {
        const ticketsType = await ticketsService.getAll()
        return res.status(httpStatus.OK).send(ticketsType)
    } catch (error) {
        return res.status(httpStatus.NOT_FOUND).send(error.message)
    }
}

export async function getTickets(req: AuthenticatedRequest, res: Response){
    try{
        const id = req.userId
        const allTickets = await ticketsService.getAllTickets(id)
        return res.status(httpStatus.OK).send(allTickets)
    } catch (error) {
        return res.status(httpStatus.NOT_FOUND).send(error.message)
    }
}

export async function postTickets(req: AuthenticatedRequest, res: Response) {
    try{
        const id = req.userId
        const ticketTypeId = req.body
        const newTicket = await ticketsService.postTickets(id, ticketTypeId)
        return res.status(httpStatus.CREATED).send(newTicket)
    } catch (error) {
        return res.sendStatus(httpStatus.NOT_FOUND)
    }
}