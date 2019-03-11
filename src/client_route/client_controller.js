const clienteService = require('./client_service')

async function addEmailUser(req, res, next) {
    try{
        const data = req.params
        await clienteService.addEmailUser(data.email)
        res.json({message: 'inserido com sucesso'}).status(200)
    }catch(err){
        res.json(err).status(500)
        next(err)
    }
}

module.exports = {
    addEmailUser
}