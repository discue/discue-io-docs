#!/bin/bash

set -e

declare -r INTERMEDIATE_FILE="../api-docs/docs/api-reference"
declare -r ENVIRONMENT_FILE="../api-docs/generate-api-doc.config.json"

declare -r API_INPUT_FILE="../discue-io-api/api.yaml"

cd ../openapi3-to-vuepress2-markdown && node widdershins -e "${ENVIRONMENT_FILE}" -o "${INTERMEDIATE_FILE}" "${API_INPUT_FILE}" 