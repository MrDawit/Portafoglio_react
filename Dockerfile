FROM node:18 AS ui-build

WORKDIR /app/client
COPY ./client/package.json ./
RUN npm install
COPY . ./
#COPY ./client/src ./
#COPY ./client/public ./
RUN npm run build
ENV PORT=5000
EXPOSE 5000
CMD [ "npm", "start" ]