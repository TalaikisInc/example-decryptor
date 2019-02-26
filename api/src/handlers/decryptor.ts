import { Request, Response } from 'express'

import decrypt from '../utils/decrypt'

export default (req: Request, res: Response) => {
  const inputMessage: string = typeof req.body.message === 'string' ? req.body.message : false
  if (inputMessage) {
    decrypt(inputMessage, (message: string) => {
      if (message) {
        res.json({ message })
      } else {
        res.json({ error: 'Something wrong.' })
      }
    })
  } else {
    res.json({ error: 'No message received.' })
  }
}
