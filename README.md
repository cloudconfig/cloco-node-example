# cloco-node-example
An express web application to demonstrate the use of the cloco node client.

## Prerequisites
The following global prerequisites must exist:
- node: >=6.9.1
- npm: >=3.10.8

## Install & Build
To install and build the cloco node example on your machine please follow these steps.

### Sign up for cloco

You can sign up for a free cloco personal account at [www.cloco.io](https://www.cloco.io).  All you need to do is create an account is to sign in with your GitHub account and we'll do the rest.

Alternatively, you can clone the [cloco-auth repo on GitHub](https://github.com/cloudconfig/cloco-auth) and follow the instructions there for authorizing your machine.

### Download and install the cloco-bash tool

The cloco bash tool is available on [GitHub](https://github.com/cloudconfig/cloco-bash).  Clone the repo and install:

`git clone https://github.com/cloudconfig/cloco-bash.git`

Navigate to the folder and install:

`cd cloco-bash`
`sudo sh ./install.sh`

You now have the cloco command line interface installed.

### Clone the cloco-node-example project

The cloco bash tool is available on [GitHub](https://github.com/cloudconfig/cloco-node-example).  Clone the repo and install:

`git clone https://github.com/cloudconfig/cloco-node-example.git`

Navigate to the folder and install:

`cd cloco-node-example`
`npm install`

### Configure your local machine

Set your local machine to use your subscription name (normally your GitHub username).

`cloco --init --sub <your-subscription-name>`

Authorize the machine using your API keys:

`cloco --authorize <cloco-api-key> <cloco-api-secret>`

### Upload the sample data to cloco

Navigate to the setup folder and upload the data to cloco.

`cd setup`
`sh ./setup.sh`

## Running the cloco-node-example web application

To run the example:

`npm run start`

## License
Copyright (c) 2016 345 Systems LLP
Licensed under the MIT license.
