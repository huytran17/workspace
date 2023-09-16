FROM node:14.18.0 as install-stage
RUN mkdir -p /usr/app
WORKDIR /usr/app
COPY package.json .
RUN yarn --frozen-lockfile

FROM install-stage as modules-stage
RUN yarn --pure-lockfile --production

FROM install-stage as build-stage
COPY . .
RUN yarn build

FROM node:14.18.0 as prod-stage
ENV NODE_ENV=production
RUN mkdir -p /usr/app
WORKDIR /usr/app/node_modules
COPY --from=modules-stage /usr/app/node_modules .
WORKDIR /usr/app
RUN mkdir -p dist
COPY --from=build-stage /usr/app/dist .
COPY . .
RUN chmod 777 .

USER 1001
EXPOSE 3000
CMD ["yarn", "serve"]