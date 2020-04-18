FROM node:12.13.0-alpine

COPY . app
WORKDIR app
RUN npm install -g
CMD node app.js

EXPOSE 3000
