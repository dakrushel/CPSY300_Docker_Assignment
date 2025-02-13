# Use an official Node.js image for building the frontend
FROM node:18 AS builder

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json before installing dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the frontend
RUN npm run build

# Use an Nginx image to serve the built frontend
FROM nginx:1.23 AS production

# Copy built files from the builder stage to Nginx's serving directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 for serving the frontend
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
