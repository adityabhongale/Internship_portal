# 🔐 Admin Access Information

## Current Admin Access Codes

### For Development/Testing:

**Admin Registration Code:**
```
INTERN2025_ADMIN
```

**Default Admin Login (if you want to create one manually):**
- Email: `admin@sargsoftech.com`
- Password: `admin@123`

---

## 🔄 Admin System Flow:

### 1. **Create Admin Account:**
- Visit: `http://localhost:3000/admin-register`
- Fill in admin details
- Use code: `INTERN2025_ADMIN`
- Submit registration

### 2. **Login as Admin:**
- Visit: `http://localhost:3000/admin-login`
- Use your registered admin credentials
- Access admin dashboard

### 3. **Backend API Endpoints Needed:**

```javascript
// Admin Registration
POST /api/admin/register
{
  "name": "Admin Name",
  "email": "admin@company.com",
  "phone": "1234567890",
  "department": "IT",
  "password": "securePassword",
  "adminCode": "INTERN2025_ADMIN"
}

// Admin Login
POST /api/admin/login
{
  "email": "admin@company.com",
  "password": "securePassword"
}
```

---

## 🛡️ Security Recommendations:

### For Production:
1. **Environment Variables:**
   ```env
   ADMIN_ACCESS_CODE=your_super_secure_code_here
   ADMIN_JWT_SECRET=different_jwt_secret_for_admins
   ```

2. **Enhanced Security:**
   - Admin email domain restrictions
   - Two-factor authentication
   - IP whitelist for admin access
   - Admin session timeout
   - Audit logging

3. **Admin Code Management:**
   - Regular code rotation
   - Time-limited codes
   - Role-based access codes
   - Admin invitation system

---

## 🚀 Quick Test:

1. Start your React app: `npm start`
2. Visit: `http://localhost:3000/admin-register`
3. Use the displayed code: `INTERN2025_ADMIN`
4. Create your first admin account!

---

## 📱 Access Points:

- **Homepage:** Floating admin button (bottom right)
- **Student Login:** "Admin Portal" quick access button
- **Direct URLs:**
  - `/admin-login` - Admin login page
  - `/admin-register` - Admin registration page
  - `/admin` - Admin dashboard (after login)
