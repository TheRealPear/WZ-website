FROM node:18-alpine

WORKDIR /usr/src/app

COPY yarn.lock ./
COPY package.json ./

RUN yarn

COPY . .

RUN yarn build

ENV PORT=3000
CMD [ "yarn", "serveweb" ]