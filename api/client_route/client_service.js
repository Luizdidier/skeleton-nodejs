const clientDb = require('./client_db')

async function addEmailUser(email) {
    const query = clientDb.addEmailUser(email)
    return await query
}

module.exports = {
    addEmailUser
}