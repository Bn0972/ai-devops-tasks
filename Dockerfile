# Use a slim base image
FROM node:18-slim

# Create app directory
WORKDIR /usr/src/app

# Create a non-root user
RUN groupadd -r appgroup && useradd -r -g appgroup appuser

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application code
COPY . .

# Set proper permissions
RUN chown -R appuser:appgroup /usr/src/app

# Switch to non-root user
USER appuser

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "start"] 