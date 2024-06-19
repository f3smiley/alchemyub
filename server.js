const express = require('express');
const bodyParser = require('body-parser');
const { Alchemy } = require('alchemy-sdk');
const dotenv = require('dotenv');

dotenv.config();

const settings = {
  apiKey: process.env.ALCHEMY_API_KEY,
  network: 'eth-mainnet'
};
const alchemy = new Alchemy(settings);

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('API Server is running!'));

app.get('/block', (req, res) => {
  alchemy.core.getBlockNumber()
    .then(blockNumber => res.json({ blockNumber }))
    .catch(err => res.status(500).json({ error: err.message }));
});

app.listen(3000, () => console.log('Server running on port 3000'));