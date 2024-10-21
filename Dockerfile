FROM node:20-alpine as build

WORKDIR /app
COPY . .

RUN npm install
RUN npm run ng build

FROM nginx:latest

COPY --from=build app/dist/cv-front-end /usr/share/nginx/html

EXPOSE 4200
