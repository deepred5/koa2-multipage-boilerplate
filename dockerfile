FROM node:11
ENV NODE_ENV prod
ENV PORT 8080
COPY package*.json /app/ 
WORKDIR /app
RUN npm ci --production
COPY . /app
EXPOSE 8080 9229
# CMD ["pm2-runtime","ecosystem.config.js"]
CMD ["node","app.js"]