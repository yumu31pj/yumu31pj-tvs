# Use latest Node.js version (in this case, Node 21.7.1)
FROM node:21.7.1

RUN mkdir /frontend

# Set the working directory to /frontend (same as in docker-compose.yml)
WORKDIR /frontend

# Upgrade npm to the latest version
RUN npm install -g npm@latest

# Install dependencies for Next.js
COPY ./tvs_frontend/package.json ./tvs_frontend/package-lock.json ./
RUN npm install

# Copy the rest of the application code
COPY ./tvs_frontend ./tvs_frontend

# Expose port 3000 to be accessible from the host
EXPOSE 2222

# Default command to run Next.js in development mode
CMD ["npm", "run", "dev", "--", "-p", "2222"]
