import { Request, Response, Router } from 'express'

import { AppPermissions } from 'config/appPermissions'
import { asyncHandler } from 'utils/asyncHandler'
import { guard, jwtCheck } from 'middleware/authMiddleware'
import { getDogs } from './controller'

export const messageRouter = Router()

messageRouter.get('/api/v1/dogs', jwtCheck, guard([AppPermissions.readDog]), asyncHandler(getDogs))

messageRouter.put('/api/v1/dog', jwtCheck, guard([AppPermissions.updateDog]), (req: Request, res: Response) => {
    res.json({ msg: 'dog update' })
})
