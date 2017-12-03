FROM node:7.10

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app
RUN npm install --production

EXPOSE 8080
CMD [ "npm", "start" ]
