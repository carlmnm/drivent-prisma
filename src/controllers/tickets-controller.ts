import ticketsService from "@/services/tickets-service";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function getTicketsType(req: Request, res: Response) {
    try {
        const ticketsType = await ticketsService.getAll()
        return res.status(httpStatus.OK).send(ticketsType)
    } catch (error) {
        return res.status(httpStatus.NOT_FOUND).send(error.message)
    }
}

export async function getTickets(req: Request, res: Response){
    try{
        const allTickets = await ticketsService.getAllTickets()
        return res.status(httpStatus.OK).send(allTickets)
    } catch (error) {
        return res.status(httpStatus.NOT_FOUND).send(error.message)
    }
}