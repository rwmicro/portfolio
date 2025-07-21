# Base on offical Node.js Alpine image
FROM node:20-alpine

# Set working directory
WORKDIR /usr/src/

# Install PM2 globally
RUN npm install --global pm2

# Copy package.json and package-lock.json before other files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

RUN npm run build

# Expose the listening port
EXPOSE 4402
# Change ownership of directories
RUN chown -R node:node /usr/src/
# Run container as non-root (unprivileged) user
# The node user is provided in the Node.js Alpine base image
USER node

# Run npm start script with PM2 when container starts
CMD [ "pm2-runtime", "npm", "--", "start" ]
