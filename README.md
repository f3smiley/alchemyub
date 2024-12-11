# Setting Up an API Server with Alchemy SDK on Ubuntu Server

This guide will walk you through the process of setting up a Node.js API server on an Ubuntu server. The server will utilize the Alchemy SDK to interact with the Ethereum blockchain and will be configured to use environment variables for sensitive information.

## Prerequisites

Before you begin, ensure you have SSH access to your Ubuntu server and have administrative privileges.

## Instructions

### 1. Update System Packages

Keep your system up-to-date with the latest packages.

```bash
sudo apt-get update -y
sudo apt-get upgrade -y
```

### 2. Install Node.js and npm

Install Node.js and npm, which are required to run the API server.

```bash
sudo apt-get install -y nodejs npm
```

### 3. Install Alchemy SDK

Install the Alchemy SDK and other necessary Node.js packages.

```bash
npm install @alchemy-ai/alchemy-sdk dotenv express body-parser
```

### 4. Configure API Server

Create the `server.js` and `test-alchemy.js` files using the provided code snippets. Ensure you have a `.env` file in the project root directory with your Alchemy API key.

### 5. Configure Systemd

Set up a systemd service to manage the API server process.

```bash
sudo cp /home/ubuntu/API_Server_Setup/api-server.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable api-server
sudo systemctl start api-server
```

### 6. Secure Access

Install and configure UFW (Uncomplicated Firewall) to manage network access to the server.

```bash
sudo apt-get install ufw
sudo ufw enable
sudo ufw allow ssh
sudo ufw allow http
sudo ufw allow 3000/tcp
```

### 7. Test API Server

Verify that the API server is running and accessible.

- Visit `http://<your-server-ip>:3000` to check if the server is running.
- Visit `http://<your-server-ip>:3000/block` to fetch the latest block number using the Alchemy SDK.

## Additional Notes

- Replace placeholder values such as `your-alchemy-api-key` with actual credentials.
- Ensure the `.env` file is correctly placed in the root directory of your API server project for environment variables to be loaded.