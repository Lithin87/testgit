FROM node:16
WORKDIR /code
COPY . .
RUN npm install
EXPOSE 80
CMD ["npm", "run", "serve"]