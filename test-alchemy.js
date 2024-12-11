const { Alchemy } = require('alchemy-sdk');
const dotenv = require('dotenv');

dotenv.config();

const settings = {
  apiKey: process.env.ALCHEMY_API_KEY, // Replace with your Alchemy API key
  network: 'eth-mainnet' // or any supported network
};
const alchemy = new Alchemy(settings);

alchemy.core.getBlockNumber().then(console.log);