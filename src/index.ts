import express from 'express';

const app = express();
// best preactice to set port as variable
const port = 3000;

//Default handler for the home page
app.get('/api', (req, res) => {
  res.send('The server is working');
});

//start the express server
app.listen(port, () => {
  console.log('server started at http://localhost:${port}');
});