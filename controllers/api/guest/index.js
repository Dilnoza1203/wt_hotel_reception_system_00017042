// import specific service class
const guest_service = require('../../../services/guest/')

// crud methods
const guest_controller = {
    getAll(req, res) {
        res.json(guest_service.getAll())
    },
    create(req, res) {
        res.status(201).json(
            guest_service.create(req, res)
        )
    },
    update(req, res) {
        const guest = guest_service.update(req.params.id, req.body)

        if (guest) {
            res.json(guest)
        } else {
            res.status(404).send('Registered guest not found')
        }
    },
    delete(req, res) {
        const guest = guest_service.getById(req.params.id)

        if (guest) {
            guest_service.delete(req.params.id)
            res.status(204).send('Registered guest deleted successfully')
        } else {
            res.status(404).send('Registered guest not found')
        }
    }
}

module.exports = guest_controller