FROM node:20-alpine
RUN apk update \
&& apk add --no-cache tzdata \
&& mkdir -p /usr/src/app
COPY ./dist /usr/src/app
COPY ./package.json .
RUN npm install
WORKDIR /usr/src/app
RUN cp /usr/share/zoneinfo/America/Bogota /etc/localtime
RUN echo "America/Bogota" > /etc/timezone
ENV NODE_ENV='production'
CMD ["node","main.js"]