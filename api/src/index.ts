import * as express from 'express'
import * as bodyParser from 'body-parser'

import decryptor from './handlers/decryptor'

declare type DefineIndexSignature<Type> = {
  [key: string]: Type
}

declare type Map<DomainEnum extends string, Type> = DefineIndexSignature<Type> & {
  readonly [value in DomainEnum]: Type;
}

const app: express.Application = express()
const port: number = 3001

app.use(bodyParser.json())

app.post('/api', (req: express.Request, res: express.Response) => {
  decryptor(req, res)
})

const server = app.listen(port, (err: Object) => {
  if (err) {
    console.error(err)
  }
  console.info(`==> listening on http://localhost:${port}.`)
})

function stop() {
  server.close()
}

module.exports = server
module.exports.stop = stop
