#!/bin/bash
# cloco-node-example setup script.

# This will deploy the app and configuration to cloco.

# ensure the bearer token is current
cloco --refresh-login

# initialize - set the application and environment.
cloco --init --app cloco-cafe
cloco --init --env dev

# upload the app.json
cloco --save-app --app cloco-cafe --file ./app.json

# upload the config
cloco --save-cob --cob menu --file ./menu.json
cloco --save-cob --cob logging --file ./logging.json
