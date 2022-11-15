var uniqid = require('uniqid');
const client = require('../config/db');

class Controllers {

    static homeRoute(req, res) {
        res.render('Home');
    };

    static downloadRoute(req, res) {
        client.query(`select * from files where id="${req.params.id}"`, (err, data) => {
            res.render('download', {
                name: data[0].name,
                path: `${process.env.APP_URL}/download/${data[0].id}`
            });
        });
    };

    static uploadFile(req, res) {
        const id = uniqid();
        const name = req.file.originalname;
        const path = `uploads${"/"}${name}`;
        const url = `${process.env.APP_URL}${"/file"}${"/"}${id}`;
        client.query(`insert into files values ("${id}","${name}","${path}")`, (err, data) => {
            if (data) return res.status(200).json({ url });
        });
    };

    static downloadFile(req, res) {
        client.query(`select * from files where id="${req.params.id}"`, (err, data) => {
            const filePath = `${__dirname}/../${data[0].path}`;
            res.download(filePath);
        });
    }

};

module.exports = { Controllers };