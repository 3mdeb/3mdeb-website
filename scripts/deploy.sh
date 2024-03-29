#!/bin/bash -x

BRANCH="${GITHUB_REF}"

case "${BRANCH}" in
  "refs/heads/main")
    FTP_DIR="${FTP_DIR_PROD}"
      ;;
  "refs/heads/develop"|"refs/heads/github_actions")
    FTP_DIR="${FTP_DIR_DEV}"
      ;;
  *)
    echo "Invalid deploy branch: ${BRANCH}"
    exit 1
esac

sshpass -p "${FTP_PASSWORD}" rsync -e "ssh -o StrictHostKeyChecking=no" -azrv --delete ../public/ ${FTP_LOGIN}@${FTP_DOMAIN}:${FTP_DIR}
