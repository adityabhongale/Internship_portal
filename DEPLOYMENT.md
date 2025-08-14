# Deployment Guide - Internship Portal

This guide provides step-by-step instructions for deploying the Internship Portal to various hosting platforms.

## 🚀 Deployment Options

1. [Vercel (Frontend) + Railway (Backend)](#vercel--railway)
2. [Netlify (Frontend) + Heroku (Backend)](#netlify--heroku)
3. [Digital Ocean Droplet](#digital-ocean-droplet)
4. [AWS (Frontend: S3/CloudFront, Backend: EC2)](#aws-deployment)
5. [Docker Deployment](#docker-deployment)

---

## 📋 Pre-Deployment Checklist

### Environment Preparation
- [ ] Create production MongoDB database
- [ ] Set up environment variables
- [ ] Configure CORS settings
- [ ] Set up file storage (for resume uploads)
- [ ] Configure email service (for notifications)
- [ ] Set up monitoring and logging

### Code Preparation
- [ ] Run production build locally
- [ ] Test all functionality
- [ ] Update API base URLs
- [ ] Optimize images and assets
- [ ] Configure security headers

---

## 🌐 Vercel + Railway

### Frontend Deployment (Vercel)

1. **Prepare the Repository**
   ```bash
   # Ensure your code is pushed to GitHub
   git add .
   git commit -m "Prepare for deployment"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Visit [vercel.com](https://vercel.com) and sign in with GitHub
   - Click "New Project" and import your repository
   - Configure build settings:
     - **Framework Preset**: Vite
     - **Build Command**: `npm run build`
     - **Output Directory**: `dist`
     - **Install Command**: `npm install`

3. **Environment Variables in Vercel**
   Add these environment variables in Vercel dashboard:
   ```
   VITE_API_URL=https://your-backend-url.railway.app/api
   VITE_APP_NAME=Internship Portal
   ```

4. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Configure DNS records as instructed

### Backend Deployment (Railway)

1. **Deploy to Railway**
   - Visit [railway.app](https://railway.app) and sign in with GitHub
   - Click "New Project" → "Deploy from GitHub repo"
   - Select your repository

2. **Environment Variables in Railway**
   ```
   NODE_ENV=production
   PORT=8080
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/internship_portal
   JWT_SECRET=your_super_secure_jwt_secret_key_here
   JWT_EXPIRES_IN=7d
   CORS_ORIGIN=https://your-frontend-domain.vercel.app
   ```

3. **Configure Build Settings**
   - Railway should automatically detect your Node.js app
   - If needed, create a `railway.toml` file:
   ```toml
   [build]
   builder = "NIXPACKS"
   
   [deploy]
   startCommand = "npm start"
   
   [[ports]]
   port = 8080
   protocol = "HTTP"
   ```

---

## 🎯 Netlify + Heroku

### Frontend Deployment (Netlify)

1. **Build Configuration**
   Create `netlify.toml` in your root directory:
   ```toml
   [build]
     publish = "dist"
     command = "npm run build"

   [build.environment]
     NODE_VERSION = "18"

   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

2. **Deploy to Netlify**
   - Visit [netlify.com](https://netlify.com) and sign in
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - Configure build settings (should auto-detect from netlify.toml)

3. **Environment Variables**
   ```
   VITE_API_URL=https://your-app.herokuapp.com/api
   ```

### Backend Deployment (Heroku)

1. **Prepare for Heroku**
   Create `Procfile` in your backend directory:
   ```
   web: node server.js
   ```

2. **Deploy to Heroku**
   ```bash
   # Install Heroku CLI
   npm install -g heroku
   
   # Login to Heroku
   heroku login
   
   # Create Heroku app
   cd backend
   heroku create your-app-name
   
   # Set environment variables
   heroku config:set NODE_ENV=production
   heroku config:set MONGODB_URI=your_mongodb_connection_string
   heroku config:set JWT_SECRET=your_jwt_secret
   
   # Deploy
   git add .
   git commit -m "Deploy to Heroku"
   git push heroku main
   ```

---

## 🌊 Digital Ocean Droplet

### Server Setup

1. **Create Droplet**
   - Choose Ubuntu 20.04 LTS
   - Select appropriate size (minimum 1GB RAM)
   - Add SSH key

2. **Initial Server Configuration**
   ```bash
   # Connect to your droplet
   ssh root@your_server_ip
   
   # Update system
   apt update && apt upgrade -y
   
   # Install Node.js
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   apt-get install -y nodejs
   
   # Install PM2
   npm install -g pm2
   
   # Install Nginx
   apt install nginx -y
   ```

3. **Deploy Application**
   ```bash
   # Clone repository
   git clone https://github.com/your-username/Internship_portal.git
   cd Internship_portal
   
   # Install dependencies
   npm install
   
   # Build frontend
   npm run build
   
   # Set up backend
   cd backend
   npm install
   
   # Create environment file
   nano .env
   ```

4. **Configure PM2**
   Create `ecosystem.config.js`:
   ```javascript
   module.exports = {
     apps: [{
       name: 'internship-portal-backend',
       script: './server.js',
       cwd: './backend',
       env: {
         NODE_ENV: 'production',
         PORT: 5000
       }
     }]
   };
   ```

   Start with PM2:
   ```bash
   pm2 start ecosystem.config.js
   pm2 startup
   pm2 save
   ```

5. **Configure Nginx**
   Create `/etc/nginx/sites-available/internship-portal`:
   ```nginx
   server {
       listen 80;
       server_name your_domain.com;
       
       # Serve frontend
       location / {
           root /path/to/Internship_portal/dist;
           try_files $uri $uri/ /index.html;
       }
       
       # Proxy API requests to backend
       location /api {
           proxy_pass http://localhost:5000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

   Enable the site:
   ```bash
   ln -s /etc/nginx/sites-available/internship-portal /etc/nginx/sites-enabled/
   nginx -t
   systemctl restart nginx
   ```

---

## ☁️ AWS Deployment

### Frontend (S3 + CloudFront)

1. **Build and Upload to S3**
   ```bash
   # Build the application
   npm run build
   
   # Install AWS CLI
   pip install awscli
   
   # Configure AWS credentials
   aws configure
   
   # Create S3 bucket
   aws s3 mb s3://your-internship-portal-bucket
   
   # Upload files
   aws s3 sync dist/ s3://your-internship-portal-bucket --delete
   
   # Configure bucket for website hosting
   aws s3 website s3://your-internship-portal-bucket --index-document index.html --error-document index.html
   ```

2. **Set up CloudFront**
   - Create CloudFront distribution
   - Set origin to your S3 bucket
   - Configure custom error pages (404 → /index.html)

### Backend (EC2)

1. **Launch EC2 Instance**
   - Choose Amazon Linux 2
   - Configure security groups (port 22, 80, 443, 5000)

2. **Deploy Backend**
   ```bash
   # Connect to instance
   ssh -i your-key.pem ec2-user@your-instance-ip
   
   # Install Node.js
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
   source ~/.bashrc
   nvm install 18
   
   # Clone and deploy
   git clone https://github.com/your-username/Internship_portal.git
   cd Internship_portal/backend
   npm install
   
   # Use PM2 for process management
   npm install -g pm2
   pm2 start server.js
   pm2 startup
   ```

---

## 🐳 Docker Deployment

### Dockerfiles

**Frontend Dockerfile:**
```dockerfile
# Build stage
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

**Backend Dockerfile:**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 5000
USER node
CMD ["node", "server.js"]
```

**Docker Compose:**
```yaml
version: '3.8'
services:
  frontend:
    build: .
    ports:
      - "80:80"
    depends_on:
      - backend

  backend:
    build: ./backend
    ports:
      - "5000:5000"
    environment:
      - NODE_ENV=production
      - MONGODB_URI=mongodb://mongo:27017/internship_portal
      - JWT_SECRET=your_jwt_secret
    depends_on:
      - mongo

  mongo:
    image: mongo:latest
    volumes:
      - mongo_data:/data/db
    environment:
      - MONGO_INITDB_DATABASE=internship_portal

volumes:
  mongo_data:
```

### Deploy with Docker
```bash
# Build and run
docker-compose up -d

# Scale services
docker-compose up -d --scale backend=3
```

---

## 🔒 Security Configuration

### Environment Variables
Never commit sensitive information. Use these secure environment variables:

```bash
# Generate secure JWT secret
NODE_ENV=production
JWT_SECRET=$(openssl rand -base64 64)
JWT_EXPIRES_IN=7d

# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/internship_portal

# CORS
CORS_ORIGIN=https://yourdomain.com

# File Upload
MAX_FILE_SIZE=5242880
ALLOWED_FILE_TYPES=application/pdf,application/msword

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

### Security Headers
Configure these security headers in your web server:

```nginx
add_header X-Frame-Options "SAMEORIGIN";
add_header X-Content-Type-Options "nosniff";
add_header X-XSS-Protection "1; mode=block";
add_header Referrer-Policy "strict-origin-when-cross-origin";
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:;";
```

---

## 📊 Monitoring and Logging

### Application Monitoring
1. **Uptime Monitoring**: Use services like UptimeRobot or Pingdom
2. **Error Tracking**: Implement Sentry for error monitoring
3. **Performance**: Use New Relic or DataDog for APM

### Log Management
```javascript
// Add to your backend
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}
```

---

## 🧪 Post-Deployment Testing

### Automated Testing
```bash
# Create a simple health check script
curl -f https://your-domain.com/api/health || exit 1
```

### Manual Testing Checklist
- [ ] User registration works
- [ ] Login functionality
- [ ] File uploads work
- [ ] Admin dashboard accessible
- [ ] Email notifications sent
- [ ] Database connections stable
- [ ] All API endpoints responding
- [ ] HTTPS certificate valid
- [ ] Mobile responsiveness
- [ ] Cross-browser compatibility

---

## 🔄 Continuous Deployment

### GitHub Actions Example
Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm install
      
    - name: Build
      run: npm run build
      
    - name: Deploy to Vercel
      uses: amondnet/vercel-action@v20
      with:
        vercel-token: ${{ secrets.VERCEL_TOKEN }}
        vercel-org-id: ${{ secrets.ORG_ID }}
        vercel-project-id: ${{ secrets.PROJECT_ID }}
        vercel-args: '--prod'
```

---

## 🆘 Troubleshooting

### Common Issues

**Build Failures:**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Environment Variables Not Loading:**
- Check variable names match exactly
- Ensure variables are set in deployment platform
- Verify environment file syntax

**CORS Errors:**
- Update CORS_ORIGIN in backend environment
- Check API URLs in frontend
- Verify protocol (http vs https)

**Database Connection Issues:**
- Check MongoDB URI format
- Verify database credentials
- Ensure database server is accessible

---

## 📞 Support and Resources

- **Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs)
- **Railway Documentation**: [docs.railway.app](https://docs.railway.app)
- **Netlify Documentation**: [docs.netlify.com](https://docs.netlify.com)
- **Heroku Documentation**: [devcenter.heroku.com](https://devcenter.heroku.com)
- **Digital Ocean Tutorials**: [digitalocean.com/community/tutorials](https://www.digitalocean.com/community/tutorials)

---

**Last Updated:** August 13, 2025
**Version:** 1.0.0
