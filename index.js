const express = require('express');
const routes = require('./routes/index');
const client = require('./config/db');
const cors = require('cors');
const app = express();
require('dotenv').config();

client.query('create table if not exists files (id varchar(50), name varchar(50), path varchar(100))', (err, data) => {
    if (data) {
        return console.log('Database Connect');
    }
});

app.set('view engine', 'ejs');
app.use("/uploads", express.static("uploads"));
app.use(express.static('public'));
app.use(express.json());
app.use(cors());
app.use(routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));