import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();
app.use(cors());


const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'crud',
  password: ''
});


app.get('/', (req, res) => {
  const sql = 'SELECT * FROM student';
  db.query(sql, (err, result) => {
    if(err) return res.json({Message: "Error inside the server"});
    return res.json(result);
  });
});

app.listen(8081, () => {
  console.log('Server is running on port 8081');
});