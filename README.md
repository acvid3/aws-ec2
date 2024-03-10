# AWS EC2 Server Setup Instructions

This guide provides step-by-step instructions on how to set up a server on AWS EC2.

## Prerequisites

Ensure you have an AWS EC2 instance ready for setup.

## Steps

### 1. Install Git

Update your package manager and install Git:

```bash
sudo yum update
sudo yum install git
```

Verify the installation:

```bash
git version
```

### 2. Install Node.js Using NVM

Download and install NVM (Node Version Manager):

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

Load NVM into the current session:

```bash
source ~/.bashrc
```

Install and use Node.js (replace `20.8.0` with the version you need):

```bash
nvm install 20.8.0
nvm use 20.8.0
```

Verify the Node.js installation:

```bash
node -v
```

### 3. Install Yarn

Install Yarn globally using npm:

```bash
npm install --global yarn
```

Verify the installation and check the path:

```bash
echo $PATH
yarn --version
```

Check Yarn in the global npm list:

```bash
npm list -g | grep yarn
```

### 4. Clone and Set Up the Project

Clone the project repository:

```bash
git clone https://github.com/acvid3/aws-ec2.git
```

Navigate to the project directory:

```bash
cd aws-ec2
```

Install project dependencies:

```bash
yarn install
```

## Running the Project

After completing the setup, you can run the project using the appropriate start command, such as `yarn start`, depending on how your project is configured.

---

Follow these instructions to successfully set up and run your project on an AWS EC2 instance.

### 5. Configure Nginx for Port Redirection

Set up Nginx to redirect traffic from port 80 to port 3000, where the Node.js application runs:

```bash
sudo nano /etc/nginx/nginx.conf
```

Insert the following server block inside the `http` context:

```nginx
server {
    listen 80 default_server;
    server_name _;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Save and close the file with `Ctrl + O`, `Enter`, and `Ctrl + X`. Then test and restart Nginx:

```bash
sudo nginx -t
sudo systemctl restart nginx
```

### 6. Manage the Application with PM2

Install PM2 to manage the application process:

```bash
npm install pm2@latest -g
```

Start the application with PM2:

```bash
cd ~/aws-ec2
pm2 start server.js --name "my-app"
pm2 save
```

Set up PM2 to boot at server startup:

```bash
pm2 startup
```

Now, the application will restart automatically if it crashes or the server reboots.

### 7. Access the Application

The application is now running and accessible at:

[http://44.204.13.49/](http://44.204.13.49/)

---

By following these instructions, you will have a Node.js application running on an AWS EC2 instance, managed by PM2, and accessible via Nginx on the default HTTP port 80.

Make sure to replace the placeholder text `server.js` and `"my-app"` with the actual entry point and name of your application as needed.

Now you have a complete `README.md` that provides comprehensive instructions on setting up and running a Node.js application on AWS EC2 with Nginx and PM2, including how to access the deployed application.
