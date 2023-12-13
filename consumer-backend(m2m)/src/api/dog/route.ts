import { Router } from 'express'

import { asyncHandler } from 'utils/asyncHandler'
import { getDogs } from './controller'

export const messageRouter = Router()

messageRouter.get('/api/v1/dogs', asyncHandler(getDogs))
