FROM node:10

WORKDIR /usr/src/brew-info

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "start"]

