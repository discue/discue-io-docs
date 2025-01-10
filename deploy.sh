#!/bin/bash

git switch -C deploy
git pull origin deploy
git merge main
git push origin deploy
git checkout main
