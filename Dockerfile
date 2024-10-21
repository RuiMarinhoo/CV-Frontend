FROM node:20-alpine as build

WORKDIR /app
COPY . .

RUN npm install --legacy-peer-deps
RUN npm run ng build

FROM nginx:latest

COPY --from=build app/dist/cv-front-end /usr/share/nginx/html

EXPOSE 4200
