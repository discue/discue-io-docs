#!/bin/bash

set -e

declare -r TMP_FOLDER='../discue-io-docs-next/./tmp'
declare -r INTERMEDIATE_FILE="${TMP_FOLDER}/api-endpoints-intermediate.md"
declare -r ENVIRONMENT_FILE="../discue-io-docs-next/generate-api-doc.config.json"
declare -r TEMPLATE_FOLDER="../discue-io-docs-next/templates"

declare -r API_INPUT_FILE="../discue-io-docs-next/api.yaml"

declare -r FINAL_TITLE="Reference"
declare -r FINAL_FILE_PATH="../discue-io-api-docs-next/docs/api-reference/README.md"

mkdir -p "${TMP_FOLDER}"

npx widdershins -e "${ENVIRONMENT_FILE}" -o "${INTERMEDIATE_FILE}" -u ."${TEMPLATE_FOLDER}"  "${API_INPUT_FILE}" \
  && sed -i "s/title: .*/title: ${FINAL_TITLE}/" "${INTERMEDIATE_FILE}" \
  && cp ./"${INTERMEDIATE_FILE}" ${FINAL_FILE_PATH}

rm -rf "${TMP_FOLDER}"