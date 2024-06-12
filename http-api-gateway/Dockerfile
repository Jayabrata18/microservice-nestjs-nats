FROM node:18 As development

WORKDIR /usr/src/app

COPY package.json ./

RUN yarn install

COPY . .
