FROM node:boron
WORKDIR /usr/app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . ./

RUN npm run build

EXPOSE 3000/tcp

CMD ["node", "dist/index.js"]
