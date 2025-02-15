#!/bin/bash

echo "Setting up Fundbox Server..."

# Update packages
sudo apt update && sudo apt upgrade -y

# Install dependencies
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs git mongodb

# Clone the repository (Replace with your repo)
git clone https://github.com/YOUR_GITHUB_USERNAME/Fundbox-Project.git
cd Fundbox-Project/server

# Install Node.js dependencies
npm install

#Install dotenv
npm install dotenv

# Set up environment variables
cp .env.example .env
nano .env  # Prompt user to configure the file

# Start the server
npm start

echo "Fundbox Server is now running!"
