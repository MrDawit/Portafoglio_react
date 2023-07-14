FROM node:18 as ui-build

WORKDIR /client/
COPY package.json ./
RUN npm install
COPY src/ ./src
COPY public/ ./public
RUN npm run build

FROM node:18 as server-build

WORKDIR /

COPY --from=ui-build /client/build ./client/build
WORKDIR /

COPY package.json /
RUN npm install

COPY server.js /

ENV NODE_ENV=production

EXPOSE 5000

CMD ["node","server.js"]