FROM node:20.8.0 as builder

WORKDIR /home/node

COPY assets ./assets
COPY me.json .
COPY package.json .
COPY package-lock.json .
COPY templates/ ./templates

RUN npm i
RUN npm run build


FROM nginx

WORKDIR /usr/share/nginx/html

COPY --from=builder /home/node/assets/ .
