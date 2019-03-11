const knex = require('../../knex/knex')

async function addEmailUser(email){
    const query = await knex.insert({ email })
                            .into('users')
    return query
}

module.exports = {
    addEmailUser
}