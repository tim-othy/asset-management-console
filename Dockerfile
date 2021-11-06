FROM node:16-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./

RUN npm ci
RUN npm i react-scripts@4.0.3 -g

COPY . ./

RUN npm run build

CMD ["npm", "start"]
