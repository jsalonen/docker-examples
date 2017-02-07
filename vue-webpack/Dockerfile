FROM mhart/alpine-node:7.3.0

COPY package.json /src/package.json
RUN cd /src && npm install

COPY . /src

WORKDIR /src

EXPOSE 8080

CMD ["npm", "run", "dev"]
