#!/bin/bash
# cloco-node-example setup script.

# This will deploy the app and configuration to cloco.
# Please make sure you have installed the cloco-cli tool.
#
#
# configure subscription and credentials if you have not already done so:
# cloco init --sub subscription_identifier
# cloco init --key cloco_client_key --secret cloco_client_secret

# initialize - set the application and environment.
cloco init --app cloco-cafe
cloco init --env dev

# upload the app.json
echo "creating application..."
cloco application put --app cloco-cafe --filename ./app.json

# upload the config
if [ "$CLOCO_ENCRYPTION_KEY" = "" ]; then

  echo "uploading unencrypted json..."
  cloco configuration put --cob menu --filename ./menu.json --mime-type application/json
  cloco configuration put --cob logging --filename ./logging.json --mime-type application/json

else

  echo "encrypting and uploading..."
  cloco configuration put --cob menu --data $(openssl enc -aes256 -a -A -nosalt -in ./menu.json -k $CLOCO_ENCRYPTION_KEY)
  cloco configuration put --cob logging --data $(openssl enc -aes256 -a -A -nosalt -in ./logging.json -k $CLOCO_ENCRYPTION_KEY)

fi
