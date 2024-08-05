#!/bin/bash
docker login -u $DOCKERHUB_USERNAME -p $DOCKERHUB_PASSWORD
docker pull $DOCKERHUB_USERNAME/todo-app:$CIRCLE_SHA1
docker stop todo-app || true
docker rm todo-app || true
docker run -d -p 80:3000 --name todo-app $DOCKERHUB_USERNAME/todo-app:$CIRCLE_SHA1
