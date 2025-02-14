# Multi-stage build: create a new build from the latest LTS Node version as a named stage --> "builder"
FROM node:18 AS builder

# Set working directory inside the container
WORKDIR /app

# Copy and define app dependencies first
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the frontend
RUN npm run build

# Use an Nginx image to serve the built frontend (ChatGPT's recommendation...)
FROM nginx:1.23 AS production

# Copy built files from the builder stage to Nginx's serving directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Set port 80 as the port this container will listen on
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
