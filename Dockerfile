# Pull Node.js image from Docker Hub
FROM node:22-alpine

# Set the working directory in the container
WORKDIR /App

# Copy package.json to the working directory
COPY package.json .

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port that the application will run on
EXPOSE 5173

# Start the application
CMD [ "npm", "run", "dev" ]