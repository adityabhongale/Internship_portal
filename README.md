# 🚀 Internship Portal

A modern, responsive web application for managing internship applications and student-company interactions. Built with React, Vite, and Tailwind CSS, featuring a comprehensive admin dashboard and student portal.

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Usage](#-usage)
- [API Documentation](#-api-documentation)
- [Components](#-components)
- [Pages](#-pages)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

### Student Portal
- **User Registration & Authentication**: Secure student registration and login system
- **Internship Applications**: Apply for internships across multiple domains
- **Personal Dashboard**: Track application status and assigned tasks
- **Task Management**: View and manage assigned internship tasks
- **Profile Management**: Update personal information and upload documents

### Admin Portal
- **Admin Dashboard**: Comprehensive overview of applications and statistics
- **Application Management**: Review, approve, or reject student applications
- **Task Assignment**: Create and assign tasks to interns
- **User Management**: Manage student accounts and permissions
- **Analytics**: View application statistics by domain and status

### Responsive Design
- **Mobile-First Approach**: Optimized for all device sizes
- **Progressive Enhancement**: Enhanced experience on larger screens
- **Touch-Friendly Interface**: Intuitive navigation for mobile devices
- **Accessible Design**: WCAG compliant interface elements

## 🛠 Tech Stack

### Frontend
- **React 19.1.0**: Modern React with hooks and concurrent features
- **Vite**: Fast development build tool with HMR
- **Tailwind CSS**: Utility-first CSS framework for responsive design
- **React Router Dom 7.7.1**: Client-side routing and navigation

### Backend
- **Node.js**: JavaScript runtime environment
- **Express 5.1.0**: Web application framework
- **MongoDB**: NoSQL database for data persistence
- **Mongoose 8.17.1**: MongoDB object modeling

### Security & Authentication
- **JSON Web Tokens (JWT)**: Secure authentication system
- **bcryptjs**: Password hashing and encryption

### Development Tools
- **ESLint**: Code linting and quality assurance
- **PostCSS**: CSS processing and optimization
- **Autoprefixer**: CSS vendor prefix automation

## 📁 Project Structure

```
Internship_portal/
├── public/                 # Static assets
│   └── vite.svg           # Vite logo
├── src/                   # Source code
│   ├── assets/            # Images and static resources
│   │   ├── card 1.png     # Feature card images
│   │   ├── card 2.png
│   │   ├── card 3.png
│   │   ├── react.svg      # React logo
│   │   └── sarg1.png      # Company logo
│   ├── components/        # Reusable UI components
│   │   ├── Adminsidebar.jsx    # Admin navigation sidebar
│   │   ├── DomainCard.jsx      # Domain selection cards
│   │   ├── Footer.jsx          # Site footer
│   │   ├── Header.jsx          # Site header with navigation
│   │   └── OfferCard.jsx       # Feature cards
│   ├── pages/             # Main application pages
│   │   ├── Admin.jsx           # Admin dashboard
│   │   ├── Dashboard.jsx       # Student dashboard
│   │   ├── Home.jsx           # Landing page
│   │   ├── Login.jsx          # Student login
│   │   └── Register.jsx       # Student registration
│   ├── scripts/           # Utility scripts
│   │   └── admin.js           # Admin-specific functions
│   ├── styles/            # CSS stylesheets
│   │   ├── Dashboard.css      # Dashboard-specific styles
│   │   ├── login.css          # Login page styles
│   │   ├── register.css       # Registration styles
│   │   └── style.css          # Global styles
│   ├── App.jsx            # Main application component
│   ├── App.css            # Application styles
│   ├── GlobalStyles.jsx   # Global style definitions
│   ├── index.css          # Base CSS styles
│   └── main.jsx           # Application entry point
├── backend/               # Backend server code
├── eslint.config.js       # ESLint configuration
├── index.html             # HTML entry point
├── package.json           # Project dependencies and scripts
├── postcss.config.js      # PostCSS configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── vite.config.js         # Vite build configuration
└── README.md              # Project documentation
```

## 🚀 Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager
- MongoDB database (local or cloud)

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/adityabhongale/Internship_portal.git
   cd Internship_portal
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env` file in the root directory:
   ```env
   # Database Configuration
   MONGODB_URI=mongodb://localhost:27017/internship_portal
   
   # JWT Configuration
   JWT_SECRET=your_jwt_secret_key_here
   JWT_EXPIRES_IN=7d
   
   # Server Configuration
   PORT=5000
   NODE_ENV=development
   ```

4. **Start the development servers**
   
   **Frontend (Port 5173/5174):**
   ```bash
   npm run dev
   ```
   
   **Backend (Port 5000):**
   ```bash
   cd backend
   npm start
   ```

5. **Access the application**
   - Frontend: `http://localhost:5173` or `http://localhost:5174`
   - Backend API: `http://localhost:5000`

## 📖 Usage

### For Students

1. **Registration**
   - Navigate to the registration page
   - Fill in personal details, university information
   - Select preferred internship domain
   - Upload resume and provide additional information

2. **Login & Dashboard**
   - Login with registered credentials
   - Access personal dashboard to view application status
   - Track assigned tasks and deadlines
   - Update profile information

3. **Application Process**
   - Browse available internship domains
   - Submit applications with required documents
   - Monitor application status updates

### For Administrators

1. **Admin Access**
   - Use the floating admin button on the homepage
   - Login with admin credentials
   - Access comprehensive admin dashboard

2. **Application Management**
   - Review submitted applications
   - Approve or reject applications
   - View applicant details and documents
   - Track application statistics

3. **Task Management**
   - Create and assign tasks to interns
   - Set deadlines and priorities
   - Monitor task completion status

## 🔌 API Documentation

### Authentication Endpoints

#### POST `/api/register`
Register a new student account.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securePassword123",
  "phone": "+1234567890",
  "university": "Example University",
  "domain": "Software Development",
  "message": "I'm interested in web development..."
}
```

**Response:**
```json
{
  "msg": "User registered successfully",
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

#### POST `/api/login`
Authenticate user login.

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "securePassword123"
}
```

**Response:**
```json
{
  "msg": "Login successful",
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

### Application Endpoints

#### GET `/api/applications`
Retrieve all applications (Admin only).

**Headers:**
```
Authorization: Bearer jwt_token_here
```

**Response:**
```json
{
  "applications": [
    {
      "id": "app_id",
      "name": "John Doe",
      "email": "john@example.com",
      "domain": "Software Development",
      "status": "Pending",
      "createdAt": "2025-08-13T00:00:00.000Z"
    }
  ]
}
```

## 🧩 Components

### Header Component
**File:** `src/components/Header.jsx`

Responsive navigation header with mobile hamburger menu.

**Features:**
- Mobile-first responsive design
- Hamburger menu for mobile devices
- Company logo and navigation links
- External links to company website sections

**Props:** None

### Admin Sidebar Component
**File:** `src/components/Adminsidebar.jsx`

Administrative navigation sidebar for the admin dashboard.

**Features:**
- Collapsible sidebar for mobile
- Navigation sections: Dashboard, Tasks, Users, Settings
- Responsive design with mobile overlay
- Active section highlighting

**Props:**
- `activeSection`: Current active section
- `setActiveSection`: Function to change active section
- `sidebarOpen`: Boolean for mobile sidebar state
- `setSidebarOpen`: Function to toggle mobile sidebar

### Domain Card Component
**File:** `src/components/DomainCard.jsx`

Displays internship domain information with icons.

**Props:**
- `icon`: React element for domain icon
- `title`: Domain title string
- `description`: Domain description text
- `className`: Additional CSS classes

### Offer Card Component
**File:** `src/components/OfferCard.jsx`

Displays feature offerings with attractive styling.

**Props:**
- `icon`: React element for feature icon
- `title`: Feature title string
- `description`: Feature description text
- `className`: Additional CSS classes

## 📄 Pages

### Home Page (`src/pages/Home.jsx`)
Landing page with hero section, features, and domain information.

**Sections:**
- Hero section with call-to-action
- "What We Offer" features grid
- Internship domains showcase
- Floating admin access button

### Dashboard Page (`src/pages/Dashboard.jsx`)
Student portal for managing applications and tasks.

**Features:**
- Application status overview
- Task management interface
- Profile information display
- Responsive sidebar navigation

### Admin Page (`src/pages/Admin.jsx`)
Administrative interface for managing the platform.

**Sections:**
- Dashboard with statistics cards
- Application management table
- Task assignment interface
- User management tools

### Login Page (`src/pages/Login.jsx`)
Student authentication interface.

**Features:**
- Secure login form
- Password validation
- Error handling and feedback
- Link to registration page

### Register Page (`src/pages/Register.jsx`)
Student registration interface.

**Features:**
- Comprehensive registration form
- File upload for resume
- Domain selection
- Form validation and error handling

## 🎨 Responsive Design

The application implements a mobile-first responsive design using Tailwind CSS breakpoints:

- **Mobile (default)**: Base styles for mobile devices
- **Small (sm: 640px+)**: Tablet portrait styles
- **Medium (md: 768px+)**: Tablet landscape styles
- **Large (lg: 1024px+)**: Desktop styles
- **Extra Large (xl: 1280px+)**: Large desktop styles

### Key Responsive Features:
- Mobile hamburger navigation
- Collapsible sidebars with overlays
- Responsive grid layouts
- Touch-friendly button sizes
- Horizontal scrolling tables
- Adaptive typography scaling

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow React best practices and hooks patterns
- Use Tailwind CSS for styling
- Maintain responsive design principles
- Write meaningful commit messages
- Test functionality across different devices

## 📝 License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## 🏢 About Sarg Softech

This internship portal is developed by Sarg Softech, a technology company focused on providing quality internship opportunities and professional development programs.

**Contact Information:**
- Website: [https://sargsoftech.com](https://sargsoftech.com)
- Email: Contact through website
- Copyright: © 2025 Sarg Softech

---

**Last Updated:** August 13, 2025
**Version:** 1.0.0
