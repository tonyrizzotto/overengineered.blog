FROM node:18-alpine3.16

# Set NODE_ENV for entire container
ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV

# Create app directory
WORKDIR /app

# Copy over package files
COPY ["package.json", "package-lock.json", "./"]

# Install Dependencies based on package-lock
RUN npm ci

# Copy everything in our project to the docker file
COPY . .

# Build the application DIST
RUN npm run build

# Required ENV VARS for running in a container
ENV ADDRESS=0.0.0.0
ARG PORT=8080
ENV PORT=$PORT

# Confirm NPM version
RUN npm -version

# Start the application
CMD ["node", "./server/index.js"]

