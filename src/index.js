import { send, json } from 'micro'
import { router, get, post, put, del } from 'microrouter'
const cors = require('micro-cors')()

import People from './db/people'



export default cors(router(
  get('/', async (req, res) => {
    const results = await People.find({})
    await send(res, 200, results)
  }),
  post('/', async (req, res) => {
    console.log(`I'm called`)

    // throw Error('Blah')
    const person = await json(req)
    const result = await People.insert(person)
    return send(res, 201, result)
  })))
