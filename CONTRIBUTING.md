# Contributing to Internship Portal

Thank you for your interest in contributing to the Internship Portal! This document provides guidelines and information for contributors.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- Git
- Code editor (VS Code recommended)
- Basic knowledge of React, JavaScript, and CSS

### Development Setup

1. **Fork and Clone**
   ```bash
   git fork https://github.com/adityabhongale/Internship_portal.git
   git clone https://github.com/your-username/Internship_portal.git
   cd Internship_portal
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Create Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 📋 Development Guidelines

### Code Style

#### React Components
- Use functional components with hooks
- Follow PascalCase for component names
- Use descriptive prop names and include PropTypes when possible

```jsx
// Good
const UserCard = ({ userName, email, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  
  return (
    <div className="user-card">
      {/* Component content */}
    </div>
  );
};

// Avoid
const usercard = (props) => {
  return <div>{props.data}</div>;
};
```

#### CSS and Styling
- Use Tailwind CSS utility classes
- Follow mobile-first responsive design
- Use semantic class names for custom CSS

```jsx
// Good - Mobile first with responsive breakpoints
<div className="p-4 sm:p-6 lg:p-8 bg-white rounded-lg shadow-md">

// Good - Semantic custom classes
<div className="user-profile-card">

// Avoid - Non-semantic or desktop-first
<div className="lg:p-4 p-8" style={{backgroundColor: 'white'}}>
```

#### File Organization
```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Basic UI elements (buttons, inputs, etc.)
│   ├── forms/          # Form components
│   └── layout/         # Layout components (header, footer, etc.)
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── services/           # API service functions
└── constants/          # Application constants
```

### Commit Messages

Follow the Conventional Commits specification:

```
type(scope): description

[optional body]

[optional footer]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**
```bash
feat(auth): add password reset functionality
fix(dashboard): resolve mobile navigation issue
docs(api): update authentication endpoints
style(components): improve button hover states
```

### Pull Request Process

1. **Before Submitting**
   - Ensure your code follows the style guidelines
   - Test functionality across different screen sizes
   - Update documentation if needed
   - Run linting: `npm run lint`

2. **Pull Request Template**
   ```markdown
   ## Description
   Brief description of changes

   ## Type of Change
   - [ ] Bug fix
   - [ ] New feature
   - [ ] Documentation update
   - [ ] Performance improvement

   ## Testing
   - [ ] Tested on desktop
   - [ ] Tested on mobile
   - [ ] Cross-browser tested

   ## Screenshots (if applicable)
   Add screenshots to help explain your changes
   ```

3. **Review Process**
   - All PRs require at least one review
   - Address feedback promptly
   - Keep PRs focused and reasonably sized

## 🐛 Bug Reports

When reporting bugs, please include:

1. **Environment Information**
   - Browser and version
   - Device type (desktop/mobile/tablet)
   - Screen resolution
   - Operating system

2. **Bug Description**
   - Clear, concise description
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots or videos if helpful

3. **Bug Report Template**
   ```markdown
   **Bug Description:**
   A clear description of the bug

   **To Reproduce:**
   1. Go to '...'
   2. Click on '....'
   3. Scroll down to '....'
   4. See error

   **Expected Behavior:**
   What you expected to happen

   **Screenshots:**
   If applicable, add screenshots

   **Environment:**
   - Browser: [e.g. Chrome 91.0]
   - Device: [e.g. iPhone 12, Desktop]
   - OS: [e.g. iOS 14.6, Windows 10]
   ```

## ✨ Feature Requests

When suggesting new features:

1. **Check existing issues** to avoid duplicates
2. **Provide context** about the problem you're solving
3. **Describe the solution** you'd like to see
4. **Consider alternatives** you've thought about
5. **Add mockups** or examples if helpful

## 🧪 Testing Guidelines

### Manual Testing Checklist

#### Responsive Design
- [ ] Mobile devices (320px - 768px)
- [ ] Tablets (768px - 1024px)
- [ ] Desktop (1024px+)
- [ ] Test hamburger menu functionality
- [ ] Check table horizontal scrolling

#### Cross-Browser Testing
- [ ] Chrome/Chromium
- [ ] Firefox
- [ ] Safari (if on Mac)
- [ ] Edge

#### Functionality Testing
- [ ] User registration and login
- [ ] Form validation
- [ ] Navigation between pages
- [ ] Admin dashboard features
- [ ] Student dashboard features

### Automated Testing (Future)
We plan to implement:
- Unit tests with Jest
- Integration tests with React Testing Library
- E2E tests with Cypress

## 🔧 Development Tools

### Recommended VS Code Extensions
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- Prettier - Code formatter
- ESLint
- Auto Rename Tag
- Bracket Pair Colorizer

### Useful npm Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 📚 Resources

### Learning Resources
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/)
- [React Router Documentation](https://reactrouter.com/)

### Design Resources
- [Tailwind UI Components](https://tailwindui.com/)
- [Heroicons](https://heroicons.com/)
- [Unsplash](https://unsplash.com/) for free images

## ❓ Questions and Support

- **General Questions**: Open a GitHub Discussion
- **Bug Reports**: Create an Issue with the bug template
- **Feature Requests**: Create an Issue with the feature template
- **Security Issues**: Contact maintainers directly

## 🏆 Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes for significant contributions
- GitHub repository insights

Thank you for contributing to making internship opportunities more accessible and manageable! 🎉
