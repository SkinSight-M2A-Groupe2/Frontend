FROM node:20.7 AS base

WORKDIR /app

COPY package.json .

EXPOSE 3000

FROM base AS development

RUN npm install

COPY . .

CMD ["npm", "start"]

FROM base AS production