FROM node:18 AS ui-build

WORKDIR /app/client
COPY ./client/package.json .
RUN npm install
COPY ./client/src .
COPY ./client/public .
RUN npm run build

FROM node:18 AS server-build

WORKDIR /

COPY --from=ui-build /app/client/build ./client/build
WORKDIR /

COPY package.json .
RUN npm install

COPY server.js .

ENV NODE_ENV=production

EXPOSE 5000

CMD ["node","server.js"]