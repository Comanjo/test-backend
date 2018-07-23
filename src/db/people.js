import Datastore from 'nedb-promise'


const db = new Datastore({ filename: `${__dirname}/people.db`, autoload: true })
export default db