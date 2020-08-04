FROM node:12.16.3 as build

WORKDIR /app

COPY . .

RUN yarn
RUN yarn build

FROM nginx

COPY ./nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/build /usr/share/nginx/html