FROM node:14.17.6

WORKDIR /usr/src/next-me

COPY ./ ./

RUN yarn

CMD [ "/bin/bash" ]