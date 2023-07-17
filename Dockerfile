FROM node:18 AS ui-build

WORKDIR /app/client
COPY ./client/package.json ./
RUN npm install
COPY ./client/src ./
COPY ./client/public ./
RUN npm run build
ENV PORT=8080
EXPOSE 8080
CMD [ "npm", "start" ]