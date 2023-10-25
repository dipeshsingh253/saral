#/bin/bash

git filter-branch --env-filter '
  if [ "$GIT_AUTHOR_EMAIL" = "dipeshsinh@gmail.com" ]; then
    export GIT_AUTHOR_NAME="dipeshsingh253"
    export GIT_AUTHOR_EMAIL="sinhdipesh@gmail.com"
  fi
' -- --all

