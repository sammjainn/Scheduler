const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const ShortUniqueId = require('short-unique-id');

let uid = new ShortUniqueId({ dictionary: 'number' });
// console.log(uid());

// create connection
var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nodescheduler'
});

// Connect
db.connect((error) => {
  if (error) {
    throw error;
  }
  console.log('MySQL connected');
});

// App created
const app = express();
app.use(express.json());
app.use(cors());

// Create db
app.post('/createdb', (req, res) => {
  let sql = 'CREATE DATABASE nodescheduler';
  let query = db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(results);
  });
});

// Create table
app.post('/createslotstable', (req, res) => {
  let sql =
    'CREATE TABLE slots(id INT(6) PRIMARY KEY, teacherId TINYINT(1) NOT NULL, class VARCHAR(255), date DATE NOT NULL, startTime VARCHAR(5), endTime VARCHAR(5))';
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(results);
  });
});

// Insert slot 1
app.post('/addslot1', (req, res) => {
  let slot = {
    id: uid(),
    teacherId: 1,
    class: 'batch one',
    date: '2021-06-24',
    startTime: '01:00',
    endTime: '02:00'
  };
  let sql = 'INSERT INTO slots SET ?';
  let query = db.query(sql, slot, (err, result) => {
    if (err) throw err;
    res.send(results);
  });
});

// Insert slot 2
app.post('/addslot2', (req, res) => {
  let slot = {
    id: uid(),
    teacherId: 1,
    class: 'batch 2',
    date: '2021-06-24',
    startTime: '04:00',
    endTime: '05:00'
  };
  let sql = 'INSERT INTO slots SET ?';
  let query = db.query(sql, slot, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

// Select all slots
app.get('/getslots', (req, res) => {
  let sql = 'SELECT * from slots';
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

// Select all slots by teacher id
app.get('/getslots/:teacherid', (req, res) => {
  let sql = `SELECT * from slots where teacherId=${req.params.teacherid}`;
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

// Select single slot by teacher id and slot id
app.get('/getslots/:teacherid/:slotid', (req, res) => {
  let sql = `SELECT * from slots where teacherId=${req.params.teacherid} and id=${req.params.slotid}`;
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
    // res.sendStatus(200).json({results});
  });
});

// Update slot
app.post('/updateslot/:teacherid/:slotid', (req, res) => {
  let newTitle = 'class cancelled';
  let sql = `UPDATE slots SET class='${newTitle}' where teacherId=${req.params.teacherid} && id=${req.params.slotid}`;
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

app.post('/addTask', (req, res) => {
  console.log('hello adding task');
  console.log(req.body);
  res.send('Task adding');
});

app.listen('5000', () => {
  console.log('Server started on port 5000');
});
