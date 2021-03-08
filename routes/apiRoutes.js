const database = require('../db/db.json');
const fs = require('fs');
const path = require('path');

module.exports = (app) => {
    app.get('/api/notes', (req, res) => res.json(database));
    app.post('/api/notes', (req,res) => {
        let objID = database[database.length - 1].id
        req.body.id = objID + 1;
        database.push(req.body);
        res.json(true);
        fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(database), (err) =>
        err ? console.log(err) : console.log('Success!'))
    });
}
