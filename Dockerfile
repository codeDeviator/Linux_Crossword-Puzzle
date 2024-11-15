# Step 1: Base Image set karo, yaha node image ka use ho raha hai
FROM node:20

# Step 2: Working Directory set karo
WORKDIR /app

# Step 3: Dependencies copy karo
COPY package*.json ./

# Step 4: Dependencies install karo
RUN npm install

# Step 5: Source code copy karo
COPY . .

# Step 6: Production build command agar tumhara project React mein hai
RUN npm run build

# Step 7: Default port expose karo (3000 React ke liye, agar tumne alag port nahi rakha hai)
EXPOSE 3000

# Step 8: Start command define karo
CMD ["npm", "start"]
