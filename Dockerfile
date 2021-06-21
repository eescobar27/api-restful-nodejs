# stage 0 : builder
# install all dependencies (including dev)
# runs test and validate code syntax
# if this goes well then continue to the next stage
FROM node:12.21.1 AS builder

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci

COPY . ./
RUN npm run build

# stage: production
# builds code for production
# installs only production dependencies
# copies the built artifact from the previous stage
FROM node:12.22.1

WORKDIR /usr/src/app
COPY package*.json ./

# building code for production
RUN npm ci --only=production

COPY --from=builder /usr/src/app/src /usr/src/app/src
USER node

EXPOSE 8080
CMD [ "node", "src/server.js" ]
