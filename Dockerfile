FROM node:20-alpine as build

WORKDIR /app
COPY . .

RUN npm install
RUN npm run ng build


FROM nginx:1.13.8-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /app/dist/cv-front-end .
COPY nginx.conf  /etc/nginx/nginx.conf
#EXPOSE 80

