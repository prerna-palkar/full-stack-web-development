const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('New Message:', name, email, message);
  res.json({ message: 'Message received successfully!' });
});

app.listen(3000, () => console.log('Server running on port 3000'));
