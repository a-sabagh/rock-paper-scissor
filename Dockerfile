FROM node:25-alpine3.21 AS build

COPY ./app /app

WORKDIR /app

RUN npm i && npm run build

FROM nginx:1.29.3-trixie AS workstage

COPY --from=build /app/public/ /usr/share/nginx/html

EXPOSE 80