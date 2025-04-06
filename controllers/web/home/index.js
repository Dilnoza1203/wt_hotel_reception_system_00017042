// import specific service class
const guest_service = require("../../../services/guest");

const home_controller = {
    index: async (req, res) =>{
        res.render('home');
    },
    add: async (req, res) =>{
        res.render('home/add_update', { mode: 'Add' });
    },
    update: async (req, res) =>{
        const eventData = await guest_service.getById(req.params.id);
        res.render('home/add_update', { mode: 'Update', eventData: eventData });
    }
};
  
module.exports = home_controller;