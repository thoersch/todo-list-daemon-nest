FROM node:14

# Create app directory inside container
WORKDIR /opt/todo_list_daemon

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

RUN npm run build
RUN npm run createormconfig

# start daemon
CMD ["node", "dist/main"]