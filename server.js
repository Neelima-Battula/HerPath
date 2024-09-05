const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test',
  port: 3306
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database.');
});

app.get('/', (req, res) => {
  return res.json("From Backend Side");
});

const getTableData = (tableName) => {
  return (req, res) => {
    let sql = `SELECT * FROM ${tableName}`;
    console.log('Executing query:', sql);
    db.query(sql, (err, data) => {
      if (err) {
        console.error('Error executing query:', err);
        return res.json(err);
      }
      console.log('Query successful:', data);
      return res.json(data);
    });
  };
};

// Define routes for fetching data
app.get('/opport_10', getTableData('opport_10'));
app.get('/opport_ug', getTableData('opport_ug'));
app.get('/opport_pg', getTableData('opport_pg'));
app.get('/opport_poly', getTableData('opport_poly'));
app.get('/opport_12', getTableData('opport_12'));
app.get('/job_govt', getTableData('job_govt'));
app.get('/job_pri', getTableData('job_pri'));
app.get('/job_bipc', getTableData('job_bipc'));
app.get('/job_mpc', getTableData('job_mpc'));
app.get('/jobs_civil', getTableData('jobs_civil'));
app.get('/jobs_ece', getTableData('jobs_ece'));
app.get('/jobs_cse', getTableData('jobs_cse'));
app.get('/degpri_jobs', getTableData('degpri_jobs'));
app.get('/deggov_jobs', getTableData('deggov_jobs'));
app.get('/jobs_mbbs', getTableData('jobs_mbbs'));

app.listen(3002, () => {
  console.log('Server is running on port 3002');
});
