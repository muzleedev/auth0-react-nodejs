import { Request, Response } from 'express'

import { fetchDogs } from './service'

export const getDogs = async (_req: Request, res: Response) => {
    const dogs = await fetchDogs()

    res.json({ dogs })
}
