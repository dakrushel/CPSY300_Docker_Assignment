# Create a new build from the latest LTS version of Node.js
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy and define app dependencies first
COPY package.json package-lock.json ./

# Install the app dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port the correct port for the app to run on
EXPOSE 8080

# Start the application using the same commands you normally would
CMD ["node", "server.js"]
