FROM node:16.16.0 AS builder
WORKDIR /app
RUN npm install npm@8.19.2
RUN rm -rf /usr/local/lib/node_modules/npm
RUN mv node_modules/npm /usr/local/lib/node_modules/npm
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build && npm prune --production

FROM node:16.16.0
USER node:node
WORKDIR /app
COPY --from=builder --chown=node:node /app/build ./build
COPY --from=builder --chown=node:node /app/node_modules ./node_modules
COPY --chown=node:node package.json .
ENV PORT 3000
EXPOSE ${PORT}
CMD ["node","build"]



