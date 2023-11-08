FROM node:latest

WORKDIR /home/node/app

COPY . .

RUN npm install

RUN npm run build

RUN npm install -g serve

ENTRYPOINT [ "serve", "-s", "build", "-p", "8080" ]
