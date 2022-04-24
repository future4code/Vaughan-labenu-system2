import { Request, Response } from 'express'
import { getSudentAgeById } from '../data'


export const getSudentAge = async (req: Request, res: Response): Promise<void> => {
    try {
        const {studentId} = req.body
        const studentAge = new getSudentAgeById()
        const result = await studentAge.getSudentAgeWithId(studentId)

        res.status(200).send(result[0][0].age.toString())
    } catch (error: any) {
        res.status(400).send(error.sqlMessage || error.message)
    }
}