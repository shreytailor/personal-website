FROM node:lts-slim

COPY --chown=node:node ./src /home/node/personal-website/src
COPY --chown=node:node ./package.json /home/node/personal-website
COPY --chown=node:node ./public /home/node/personal-website/public
COPY --chown=node:node ./index.html /home/node/personal-website
COPY --chown=node:node ./vite.config.ts /home/node/personal-website

WORKDIR /home/node/personal-website

EXPOSE 5173

RUN ["yarn"]
ENTRYPOINT ["yarn", "dev"]