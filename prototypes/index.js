const insert = require('./insert')
const update = require('./update')
const remove = require('./remove')
const erease = require('./erease')
const ereaseAll = require('./ereaseAll')
const special = require('./special')

exports.prototypes = {
    insert,
    update,
    remove,
    erease,
    ereaseAll,
    special,
}