#!/bin/bash

set -e

declare -r INTERMEDIATE_FILE="../discue-io-api-docs/docs/api-reference"
declare -r ENVIRONMENT_FILE="../discue-io-api-docs/generate-api-doc.config.json"
declare -r TEMPLATE_FOLDER="../discue-io-api-docs/templates"

declare -r API_INPUT_FILE="../discue-io-api/api.yaml"

cd ../widdershins && node widdershins -e "${ENVIRONMENT_FILE}" -o "${INTERMEDIATE_FILE}" -u "${TEMPLATE_FOLDER}"  "${API_INPUT_FILE}" 