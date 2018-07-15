FROM mhart/alpine-node:9.11.1
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN yarn
EXPOSE 3000
CMD ["yarn", "start"]
