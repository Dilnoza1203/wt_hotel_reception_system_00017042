const fs = require('fs')
const guests = require(global.mock_db)

// service method implementations
const guest_service = {
    getAll() {
        return guests
    },
    getById(id) {
        return guests.find(g => g.id == id)
    },
    create(req, res) {
        let new_id = genRandId(4)

        const guest = req.body

        const new_guest = {
            id: new_id,
            guest: guest
        }

        guests.push(new_guest)

        writeToFile(guests)

        return new_guest
    },
    update(id, updateData) {
        const guestIndex = guests.findIndex(g => g.id == id)

        if (guestIndex === -1) {
            return null
        }

        guests[guestIndex].guest = { ...guests[guestIndex].guest, ...updateData }

        writeToFile(guests)

        return guests[guestIndex]
    },
    delete(id) {
        const index = guests.findIndex(d => d.id == id)
        guests.splice(index, 1)
        writeToFile(guests)
    }
}

// create function for overwriting the db file updated db content
let writeToFile = async (users) => {
    await
        fs.writeFileSync(
            global.mock_db,
            JSON.stringify(
                users, null, 4
            ),
            'utf8'
        )
}

// generate random id from uuid
let genRandId = (count) => {
    let result = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charactersLength = characters.length
    for (let i = 0; i < count; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
}

module.exports = guest_service