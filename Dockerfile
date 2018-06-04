# Get node image
FROM node:carbon

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

# Node packages
RUN npm install

COPY . .

# Map Docker daemon
EXPOSE 8081

CMD [ "npm" , "start" ]