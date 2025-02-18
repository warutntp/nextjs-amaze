# Build Full-ECommerce Website By Next.js 15 & MongoDB
## Run Locally

1. Create Env File

   - duplicate .example-env and rename it to .env.local

2. Setup MongoDB

   - Cloud MongoDB
     - Create database at https://mongodb.com/
     - In .env.local file update MONGODB_URI to db url
   - OR Local MongoDB
     - Install it from https://www.MongoDB.org/download
     - In .env.local file update MONGODB_URI to db url

3. Seed Data

   ```shell
     npm run seed
   ```

4. Install and Run

   ```shell
     npm install --legacy-peer-deps
     npm run dev
   ```

5. Admin Login

   - Open http://localhost:3000
   - Click Sign In button
   - Enter admin email "admin@example.com" and password "123456" and click Sign In
