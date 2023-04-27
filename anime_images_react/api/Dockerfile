FROM node:16-alpine
# Add a work directory

WORKDIR /usr/src

# Cache and Install dependencies
COPY package.json package-lock.json ./

RUN npm install
# Copy app files
COPY . .
# Expose port
EXPOSE 3000
# Start the app
CMD ["npm", "run", "start"]