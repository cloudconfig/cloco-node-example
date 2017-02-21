<p align="center">
  <img src="https://raw.githubusercontent.com/cloudconfig/cloco-docs/master/source/images/logo.png" width="100" height="104" />
</p>

# cloco-node-example
An express web application to demonstrate the use of the cloco node client.

## Documentation

The documentation for cloco is available on GitHub pages [https://cloudconfig.github.io/cloco-docs/](https://cloudconfig.github.io/cloco-docs/).

## Prerequisites
The following global prerequisites must exist:
- node: >=6.9.1
- npm: >=3.10.8
- Python: >= 2.6

## Install & Build
To install and build the cloco node example on your machine please follow these steps.

### Sign up for cloco

You can sign up for a free cloco personal account at [www.cloco.io](https://www.cloco.io).  All you need to do is create an account is to sign in with your GitHub account and we'll do the rest.

Once you have signed up you need to generate API credentials.

### Download and install the cloco-cli tool

The cloco bash tool is available on pypi and requires Python and pip:

`pip install cloco-cli`

You now have the cloco command line interface installed.

### Configure the CLI on your local machine

Set your local machine to use your subscription name (normally your GitHub username).

`cloco init --sub your_subscription_name`

Authorize the machine using your API credentials:

`cloco init --key cloco_client_key --secret cloco_client_secret`

### Note on encryption

You can use an environment variable CLOCO_ENCRYPTION_KEY to use the cloco client in encrypted mode.  If you are going to run in this mode, be sure to set the env var before you run the setup script so that the data stored in cloco is encrypted, as the client will be attempting to decrypt.

To set the encryption key, add the following into your ~/.bashrc file:

`export CLOCO_ENCRYPTION_KEY=please-put-your-encryption-key-here`

You must restart your shell for this to take effect.

### Clone the cloco-node-example project

The cloco bash tool is available on [GitHub](https://github.com/cloudconfig/cloco-node-example).  Clone the repo and install:

`git clone https://github.com/cloudconfig/cloco-node-example.git`

Navigate to the folder:

`cd cloco-node-example`

### Upload the sample data to cloco

Navigate to the setup folder:

`cd setup`

Run the setup shell script to upload the data to cloco:

`sh ./setup.sh`

## Running the cloco-node-example web application

Navigate to the "with cloco" version:

`cd ../with-cloco`

Install the dependencies:

`npm install`

To run the example:

`npm run start`

Browse to http://localhost:8003

## License
Copyright (c) 2016-2017 345 Systems LLP
Licensed under the MIT license.
