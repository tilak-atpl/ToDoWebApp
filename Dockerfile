DockerfileCopy code
# Use the official Node.js image as the base image
FROM node:14

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Install serve to serve the app
RUN npm install -g serve

# Expose the port
EXPOSE 3000

# Command to run the app
CMD ["serve", "-s", "dist"]

