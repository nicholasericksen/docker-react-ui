From node:6.4.0
Maintainer Nicholas Ericksen

# Update container and install deps
RUN apt-get update && apt-get install -y build-essential

# Copy the application code & change the working directory
COPY . /app
WORKDIR /app

# Install the npm modules
RUN npm install

# Run the webpack dev server
CMD /app/node_modules/.bin/webpack-dev-server --hot --inline --config /app/webpack.config.js --host 0.0.0.0

# Expose the container application port
EXPOSE 8080
