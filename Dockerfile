FROM node

ENV PORT 3000
EXPOSE 3000

RUN mkdir -p /app
WORKDIR /app

RUN npm i -g node-dev
