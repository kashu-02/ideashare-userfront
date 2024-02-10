FROM node:lts

RUN apt-get update && apt-get upgrade -y
WORKDIR /app
