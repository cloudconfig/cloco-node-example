<p align="center">
  <img src="https://raw.githubusercontent.com/cloudconfig/cloco-docs/master/source/images/logo.png" width="100" height="104" />
</p>

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

Navigate to the folder:

`cd cloco-bash`

Run the install script:

`sudo sh ./install.sh`

You now have the cloco command line interface installed.

### Clone the cloco-node-example project

The cloco bash tool is available on [GitHub](https://github.com/cloudconfig/cloco-node-example).  Clone the repo and install:

`git clone https://github.com/cloudconfig/cloco-node-example.git`

Navigate to the folder:

`cd cloco-node-example`

Install the dependencies:

`npm install`

### Configure your local machine

Set your local machine to use your subscription name (normally your GitHub username).

`cloco --init --sub <your-subscription-name>`

Authorize the machine using your API keys:

`cloco --authorize --key <cloco-api-key> --secret <cloco-api-secret>`

### Upload the sample data to cloco

Navigate to the setup folder:

`cd setup`

Run the setup shell script to upload the data to cloco:

`sh ./setup.sh`

Note on encryption:  You can use an environment variable CLOCO_ENCRYPTION_KEY to use the cloco client in encrypted mode.  If you are going to run in this mode, be sure to set the env var before you run the setup script so that the data stored in cloco is encrypted, as the client will be attempting to decrypt.

## Running the cloco-node-example web application

Navigate to the "with cloco" version:

`cd ../with-cloco`

To run the example:

`npm run start`

Browse to http://localhost:8003

## License
Copyright (c) 2016 345 Systems LLP
Licensed under the MIT license.
