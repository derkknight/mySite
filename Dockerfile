# Get node image
FROM node:carbon

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

# Node packages
RUN npm install

COPY . .

#RUN npm run-script build
RUN npx webpack


# Map Docker daemon
EXPOSE 3000

CMD [ "npm" , "start" ]

LABEL description="mysite"