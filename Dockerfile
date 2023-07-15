FROM node:18
WORKDIR /website
COPY ./package.json /website
COPY ./yarn.lock /website

RUN yarn install --mutex file:/usr/local/share/.cache/yarn/.yarn-mutex

COPY . ./
ENV PORT=3000
ENV NODE_ENV=development

EXPOSE 3000
CMD yarn dev