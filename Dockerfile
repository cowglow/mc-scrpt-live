FROM node:16
WORKDIR /website
COPY package.json yarn.lock ./

RUN yarn install --mutex file:/usr/local/share/.cache/yarn/.yarn-mutex

COPY . ./
ENV PORT=3000
ENV NODE_ENV=development

EXPOSE 3000
RUN yarn build
CMD yarn dev