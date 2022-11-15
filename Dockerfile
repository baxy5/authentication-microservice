FROM node:latest
WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/

RUN npm install

COPY . .

EXPOSE 8005

CMD [ "npm", "start" ]

