FROM node:12
WORKDIR /usr/src/env
COPY . .
RUN npm install
EXPOSE 80
RUN npm install -g webpack webpack-cli
RUN apt-get update && apt-get install -y nginx
CMD ["nginx", "-g", "daemon off;"]
