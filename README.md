Для создания файла `README.md` с инструкциями по настройке сервера на AWS EC2 на английском языке, вы можете использовать следующий шаблон:

```markdown
# AWS EC2 Server Setup Instructions

This guide provides step-by-step instructions on how to set up a server on AWS EC2.

## Prerequisites

Ensure you have an AWS EC2 instance ready for setup.

## Steps

### 1. Install Git
```

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
