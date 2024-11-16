# Step 1: Set base image, node is used here
FROM node:20

# Step 2: Set up of working directory
WORKDIR /app

# Step 3: copy the dependencies of the project
COPY package*.json ./

# Step 4: install dependencies
RUN npm install

# Step 5: copy source code
COPY . .

# Step 6: Production build command if your project is in React
RUN npm run build

# Step 7: Default port expose 
EXPOSE 3000

# Step 8: Start command defined
CMD ["npm", "start"]
