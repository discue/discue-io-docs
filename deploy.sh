#!/bin/bash

git switch -C deploy
git pull origin deploy
git merge master
git push origin deploy
git switch -C master