FROM node:18 AS ui-build

WORKDIR /client
COPY package.json /client
RUN npm install
COPY src /client
COPY public /client
RUN npm run build

FROM node:18 AS server-build

WORKDIR /

COPY --from=ui-build /client/build ./client/build
WORKDIR /

COPY package.json /
RUN npm install

COPY server.js /

ENV NODE_ENV=production

EXPOSE 5000

CMD ["node","server.js"]