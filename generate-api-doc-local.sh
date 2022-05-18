#!/bin/bash

set -e

declare -r INTERMEDIATE_FILE="../discue-io-api-docs/docs/api-reference"
declare -r ENVIRONMENT_FILE="../discue-io-api-docs/generate-api-doc.config.json"

declare -r API_INPUT_FILE="../discue-io-api/api.yaml"

cd ../widdershins && node widdershins -e "${ENVIRONMENT_FILE}" -o "${INTERMEDIATE_FILE}" "${API_INPUT_FILE}" 