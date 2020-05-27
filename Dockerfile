FROM node:12

# Create app dir
WORKDIR /app

# Install app dependencies
COPY package.json .

RUN npm install

# Bundle app source

COPY . .

EXPOSE 3000

CMD [ "node", "app.js" ]
