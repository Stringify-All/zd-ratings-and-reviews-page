FROM node:current-slim

WORKDIR usr/desktop/hr/zd-ratings-and-reviews-page
COPY package.json .
RUN npm install
RUN npm build

WORKDIR usr/desktop/hr/zd-ratings-and-reviews-page/server
COPY package.json .
RUN npm install
RUN npm start

EXPOSE 9003
CMD [ "npm", "start", "build" ]

COPY . .