# Test Cases - Internship Portal

This document contains comprehensive test cases for the Internship Portal application, covering all major functionality across different user roles and scenarios.

## 📋 Test Case Format

Each test case includes:
- **Test Case ID**: Unique identifier
- **Test Title**: Descriptive test name
- **Test Steps**: Step-by-step instructions
- **Expected Result**: What should happen
- **Actual Result**: What actually happened (filled during testing)
- **Status**: Pass/Fail/In Progress
- **Comments**: Additional notes or issues
- **Tested By**: Tester name
- **Date**: Test execution date

---

## 🏠 UI/UX Test Cases - Homepage

| Test Case ID | Test Title | Test Steps | Expected Result | Status | Comments | Tested By | Date |
|--------------|------------|------------|-----------------|---------|----------|-----------|------|
| UI_001 | Homepage header loads correctly | 1. Open website URL<br>2. Observe header section | Logo, navigation menu are visible & aligned | - | - | - | - |
| UI_002 | Verify "Apply Now" button functionality | 1. Click the "Apply Now" button on the hero section | Redirects to the application form or relevant page | - | - | - | - |
| UI_003 | Verify hero section text alignment and styling | 1. Inspect "A Launchpad to Your Tech Career" heading and paragraph | Text is center-aligned, gradient heading visible, spacing consistent | - | - | - | - |
| UI_004 | Verify internship domains section layout | 1. Scroll to "Internship Domains" section | Six cards are visible, evenly spaced, each with icon, title, and description | - | - | - | - |
| UI_005 | Verify Internship Domains icons | 1. Check each domain card icon | Each card has the correct domain-related icon | - | - | - | - |
| UI_006 | Verify "What We Offer" section content | 1. Scroll to "What We Offer" section | Three cards visible with icon, title, and description | - | - | - | - |
| UI_007 | Verify footer links | 1. Click each footer link under "Quick Links" and "Our Services" | Redirects to correct pages | - | Our services links are added but not opening | - | - |
| UI_008 | Verified social Media links in footer | 1. Clicked on each link | Open respective social media page | - | - | - | - |
| UI_009 | Responsive design check | 1. Opened page in mobile viewport | Layout adapts, text readable | - | - | - | - |
| UI_010 | Verified hover effects | 1. Hover over nav links, buttons & cards | Hover styles apply correctly | - | - | - | - |
| UI_011 | Checked broken images | 1. Inspected all images/icons | All images load successfully, no broken links | - | - | - | - |
| UI_012 | Verified scrolling behavior | 1. Scrolled through entire page | Smooth scrolling, no content cutoff | - | - | - | - |
| UI_013 | Verify floating admin button | 1. Check bottom-right corner for admin access button | Shield icon visible, hover tooltip shows "Admin Portal" | - | - | - | - |
| UI_014 | Test mobile hamburger menu | 1. Open on mobile device<br>2. Click hamburger menu icon | Menu opens/closes smoothly, navigation links visible | - | - | - | - |
| UI_015 | Verify glassmorphism effects | 1. Inspect hero section background | Backdrop blur and transparency effects visible | - | - | - | - |

---

## 🔐 Authentication Test Cases - Login

| Test Case ID | Test Title | Test Steps | Expected Result | Status | Comments | Tested By | Date |
|--------------|------------|------------|-----------------|---------|----------|-----------|------|
| TC_LOGIN_001 | Verify login with valid credentials | 1. Enter valid username/email and password<br>2. Click "Login" | User is logged in and redirected to dashboard/homepage | - | - | - | - |
| TC_LOGIN_002 | Verify login with invalid password | 1. Enter valid username/email but wrong password | Error message displayed: "Invalid credentials" | - | - | - | - |
| TC_LOGIN_003 | Verify login with invalid username/email | 1. Enter invalid username/email and valid password | Error message displayed: "Invalid credentials" | - | - | - | - |
| TC_LOGIN_004 | Verify login with blank fields | 1. Leave username/email and password empty<br>2. Click "Login" | Validation message shown for both fields | - | - | - | - |
| TC_LOGIN_005 | Verify login with blank password | 1. Enter valid username/email but leave password empty | Validation message shown for password | - | - | - | - |
| TC_LOGIN_006 | Verify login with blank username/email | 1. Leave username/email empty but enter valid password | Validation message shown for username/email | - | - | - | - |
| TC_LOGIN_007 | Verify "Forgot Password" link | 1. Click on "Forgot Password" link | Redirects to password reset page | - | Functionality not available | - | - |
| TC_LOGIN_008 | Verify password masking | 1. Enter password in password field | Characters are masked with dots/bullets | - | - | - | - |
| TC_LOGIN_009 | Verify password show/hide toggle | 1. Click "eye" icon in password field | Password becomes visible, click again to hide | - | - | - | - |
| TC_LOGIN_010 | Verify login button disable state | 1. Keep one or both fields empty | Login button remains disabled until both fields are filled | - | Functionality not available | - | - |
| TC_LOGIN_011 | Verify case sensitivity of wrong-case password | 1. Enter correct username/email but wrong-case password | Login fails with error message | - | Functionality not available | - | - |
| TC_LOGIN_012 | Verify email format validation | 1. Enter invalid email format (e.g., abc@g) | Error message: "Enter a valid email" | - | - | - | - |
| TC_LOGIN_013 | Verify social login - Google | 1. Click "Login with Google" button | Google authentication popup appears | - | Functionality not available | - | - |
| TC_LOGIN_014 | Verify social login - Facebook | 1. Click "Login with Facebook" button | Facebook authentication popup appears | - | Functionality not available | - | - |
| TC_LOGIN_015 | Verify special characters in password | 1. Enter password with special characters | Accepted without errors | - | - | - | - |
| TC_LOGIN_016 | Verify error message styling | 1. Trigger invalid login | Error message is clearly visible in red with proper spacing | - | - | - | - |
| TC_LOGIN_017 | Verify accessibility support | 1. Navigate with keyboard (Tab, Enter) | All fields, buttons, and links are accessible via keyboard | - | - | - | - |
| TC_LOGIN_018 | Test login form on mobile | 1. Access login page on mobile device | Form is responsive, inputs are touch-friendly | - | - | - | - |
| TC_LOGIN_019 | Verify login page loading time | 1. Measure page load time | Page loads within 3 seconds | - | - | - | - |
| TC_LOGIN_020 | Test with SQL injection attempts | 1. Enter SQL injection strings in email/password fields | Input is sanitized, no security vulnerabilities | - | - | - | - |

---

## 📝 Registration Test Cases

| Test Case ID | Test Title | Test Steps | Expected Result | Status | Comments | Tested By | Date |
|--------------|------------|------------|-----------------|---------|----------|-----------|------|
| TC_REG_001 | Verify registration with valid details | 1. Fill all fields with valid data<br>2. Click "Submit Application" | Registration successful, confirmation message shown | - | - | - | - |
| TC_REG_002 | Verify email uniqueness validation | 1. Register with an already existing email | Error message: "Email already exists" | - | - | - | - |
| TC_REG_003 | Verify required field validation | 1. Leave required fields empty<br>2. Click submit | Validation messages shown for required fields | - | - | - | - |
| TC_REG_004 | Verify password strength validation | 1. Enter weak password (e.g., "123") | Error message about password requirements | - | - | - | - |
| TC_REG_005 | Verify phone number format validation | 1. Enter invalid phone number format | Error message: "Enter a valid phone number" | - | - | - | - |
| TC_REG_006 | Verify email format validation | 1. Enter invalid email format | Error message: "Enter a valid email address" | - | - | - | - |
| TC_REG_007 | Verify university field validation | 1. Enter special characters or numbers in university field | Error message or auto-correction | - | - | - | - |
| TC_REG_008 | Verify domain selection requirement | 1. Submit form without selecting a domain | Validation message: "Please select an internship domain" | - | - | - | - |
| TC_REG_009 | Verify resume file upload | 1. Upload a valid PDF/DOC resume file | File uploads successfully, filename displayed | - | - | - | - |
| TC_REG_010 | Verify invalid file format rejection | 1. Try to upload image or text file | Error message: "Only PDF and DOC files are allowed" | - | - | - | - |
| TC_REG_011 | Verify file size limit | 1. Upload file larger than 5MB | Error message: "File size cannot exceed 5MB" | - | - | - | - |
| TC_REG_012 | Verify form reset functionality | 1. Fill form partially<br>2. Click reset/clear button | All fields are cleared to default state | - | - | - | - |
| TC_REG_013 | Verify character limits | 1. Enter text exceeding character limits in message field | Input is limited or shows character count | - | - | - | - |
| TC_REG_014 | Verify form autosave | 1. Fill form partially<br>2. Refresh page | Form data is preserved (if implemented) | - | Functionality not available | - | - |
| TC_REG_015 | Verify terms and conditions checkbox | 1. Try to submit without checking T&C checkbox | Error message: "Please accept terms and conditions" | - | Functionality not available | - | - |
| TC_REG_016 | Test registration on mobile devices | 1. Complete registration on mobile | Form is responsive, all fields accessible | - | - | - | - |
| TC_REG_017 | Verify success page redirection | 1. Complete successful registration | Redirects to success page or login page | - | - | - | - |
| TC_REG_018 | Verify password confirmation match | 1. Enter different passwords in password and confirm fields | Error message: "Passwords do not match" | - | Functionality not available | - | - |
| TC_REG_019 | Test special characters in name field | 1. Enter name with special characters | Appropriate handling or validation message | - | - | - | - |
| TC_REG_020 | Verify data persistence after submission | 1. Complete registration<br>2. Check if data is stored in database | Data is correctly stored and retrievable | - | - | - | - |

---

## 📊 Student Dashboard Test Cases

| Test Case ID | Test Title | Test Steps | Expected Result | Status | Comments | Tested By | Date |
|--------------|------------|------------|-----------------|---------|----------|-----------|------|
| TC_DASH_001 | Verify dashboard loading after login | 1. Login with valid credentials | Dashboard loads with user-specific data | - | - | - | - |
| TC_DASH_002 | Verify application status display | 1. Check application status section | Current status (Pending/Accepted/Rejected) is displayed | - | - | - | - |
| TC_DASH_003 | Verify tasks section visibility | 1. Navigate to tasks section | Assigned tasks are visible with details | - | - | - | - |
| TC_DASH_004 | Verify task status updates | 1. Update task status from "To Do" to "In Progress" | Status changes and is saved | - | - | - | - |
| TC_DASH_005 | Verify profile information display | 1. Navigate to profile section | User's registration information is displayed | - | - | - | - |
| TC_DASH_006 | Verify profile edit functionality | 1. Click edit profile<br>2. Modify information<br>3. Save changes | Changes are saved and displayed | - | - | - | - |
| TC_DASH_007 | Verify logout functionality | 1. Click logout button | User is logged out and redirected to homepage | - | - | - | - |
| TC_DASH_008 | Verify sidebar navigation | 1. Click different sidebar menu items | Correct sections are displayed | - | - | - | - |
| TC_DASH_009 | Verify mobile sidebar toggle | 1. Open dashboard on mobile<br>2. Click hamburger menu | Sidebar opens/closes smoothly | - | - | - | - |
| TC_DASH_010 | Verify task due date highlighting | 1. Check tasks with approaching due dates | Overdue or upcoming tasks are highlighted | - | - | - | - |
| TC_DASH_011 | Verify statistics cards | 1. Check dashboard overview cards | Correct statistics are displayed | - | - | - | - |
| TC_DASH_012 | Verify responsive design | 1. Access dashboard on different screen sizes | Layout adapts appropriately | - | - | - | - |
| TC_DASH_013 | Verify task completion marking | 1. Mark task as completed | Task moves to completed section | - | - | - | - |
| TC_DASH_014 | Verify file download functionality | 1. Click to download uploaded resume | File downloads successfully | - | - | - | - |
| TC_DASH_015 | Verify dashboard refresh behavior | 1. Refresh dashboard page | Data persists, no errors occur | - | - | - | - |

---

## 👨‍💼 Admin Dashboard Test Cases

| Test Case ID | Test Title | Test Steps | Expected Result | Status | Comments | Tested By | Date |
|--------------|------------|------------|-----------------|---------|----------|-----------|------|
| TC_ADMIN_001 | Verify admin login access | 1. Click admin button<br>2. Enter admin credentials | Admin dashboard loads successfully | - | - | - | - |
| TC_ADMIN_002 | Verify applications overview | 1. Navigate to applications section | All submitted applications are visible | - | - | - | - |
| TC_ADMIN_003 | Verify application details view | 1. Click "View Details" on an application | Full application details are displayed | - | - | - | - |
| TC_ADMIN_004 | Verify application status change | 1. Change application status from Pending to Accepted | Status updates successfully | - | - | - | - |
| TC_ADMIN_005 | Verify tasks creation | 1. Click "Add New Task"<br>2. Fill task details<br>3. Assign to intern | Task is created and assigned | - | - | - | - |
| TC_ADMIN_006 | Verify task assignment | 1. Select intern from dropdown<br>2. Set due date<br>3. Save task | Task appears in intern's dashboard | - | - | - | - |
| TC_ADMIN_007 | Verify statistics dashboard | 1. Check dashboard statistics cards | Correct counts for applications, tasks, etc. | - | - | - | - |
| TC_ADMIN_008 | Verify application filtering | 1. Filter applications by status/domain | Results are filtered correctly | - | - | - | - |
| TC_ADMIN_009 | Verify application search | 1. Search for specific applicant by name/email | Correct results are returned | - | - | - | - |
| TC_ADMIN_010 | Verify bulk actions | 1. Select multiple applications<br>2. Perform bulk action | Action is applied to all selected items | - | Functionality not available | - | - |
| TC_ADMIN_011 | Verify user management | 1. Navigate to users section | All registered users are visible | - | - | - | - |
| TC_ADMIN_012 | Verify data export functionality | 1. Click export/download button | Data is exported in appropriate format | - | Functionality not available | - | - |
| TC_ADMIN_013 | Verify admin sidebar navigation | 1. Click different admin sidebar items | Correct sections load | - | - | - | - |
| TC_ADMIN_014 | Verify responsive admin interface | 1. Access admin panel on mobile | Interface is responsive and usable | - | - | - | - |
| TC_ADMIN_015 | Verify admin logout | 1. Click logout in admin panel | Admin is logged out securely | - | - | - | - |

---

## 🔒 Security Test Cases

| Test Case ID | Test Title | Test Steps | Expected Result | Status | Comments | Tested By | Date |
|--------------|------------|------------|-----------------|---------|----------|-----------|------|
| TC_SEC_001 | Test SQL injection in login | 1. Enter SQL injection strings in login fields | Input is sanitized, no database errors | - | - | - | - |
| TC_SEC_002 | Test XSS in registration form | 1. Enter script tags in text fields | Scripts are sanitized/escaped | - | - | - | - |
| TC_SEC_003 | Verify password encryption | 1. Check database for stored passwords | Passwords are hashed, not in plain text | - | - | - | - |
| TC_SEC_004 | Test unauthorized admin access | 1. Try to access admin pages without login | Access is denied, redirected to login | - | - | - | - |
| TC_SEC_005 | Verify session timeout | 1. Leave application idle for extended period | Session expires, user must re-login | - | - | - | - |
| TC_SEC_006 | Test file upload security | 1. Try to upload malicious files | File types are validated, dangerous files rejected | - | - | - | - |
| TC_SEC_007 | Verify HTTPS implementation | 1. Check if site uses HTTPS | All pages load over secure connection | - | - | - | - |
| TC_SEC_008 | Test rate limiting | 1. Make rapid repeated requests | Rate limiting prevents abuse | - | - | - | - |
| TC_SEC_009 | Verify CORS headers | 1. Check cross-origin requests | Proper CORS headers are implemented | - | - | - | - |
| TC_SEC_010 | Test input validation bypass | 1. Try to bypass client-side validation | Server-side validation catches invalid input | - | - | - | - |

---

## 📱 Mobile Responsiveness Test Cases

| Test Case ID | Test Title | Test Steps | Expected Result | Status | Comments | Tested By | Date |
|--------------|------------|------------|-----------------|---------|----------|-----------|------|
| TC_MOB_001 | Test homepage on mobile (375px) | 1. Open homepage on iPhone SE viewport | Layout adapts, content readable | - | - | - | - |
| TC_MOB_002 | Test tablet landscape view (1024px) | 1. Open on tablet in landscape mode | Layout uses available space effectively | - | - | - | - |
| TC_MOB_003 | Test mobile navigation menu | 1. Click hamburger menu on mobile | Menu opens/closes smoothly | - | - | - | - |
| TC_MOB_004 | Test form inputs on touch devices | 1. Fill forms on touch device | Inputs are touch-friendly, keyboards appear correctly | - | - | - | - |
| TC_MOB_005 | Test image loading on mobile | 1. Check all images on mobile device | Images load and scale appropriately | - | - | - | - |
| TC_MOB_006 | Test button sizing on mobile | 1. Test all buttons on touch device | Buttons are large enough for touch interaction | - | - | - | - |
| TC_MOB_007 | Test table scrolling on mobile | 1. View data tables on mobile | Tables scroll horizontally when needed | - | - | - | - |
| TC_MOB_008 | Test modal dialogs on mobile | 1. Open modals/popups on mobile | Modals are properly sized and accessible | - | - | - | - |
| TC_MOB_009 | Test text readability on mobile | 1. Check text on small screens | Text is readable without zooming | - | - | - | - |
| TC_MOB_010 | Test orientation change | 1. Rotate device between portrait/landscape | Layout adapts to orientation change | - | - | - | - |

---

## ⚡ Performance Test Cases

| Test Case ID | Test Title | Test Steps | Expected Result | Status | Comments | Tested By | Date |
|--------------|------------|------------|-----------------|---------|----------|-----------|------|
| TC_PERF_001 | Test homepage loading time | 1. Measure page load time from clean cache | Page loads within 3 seconds | - | - | - | - |
| TC_PERF_002 | Test large file upload performance | 1. Upload maximum size resume file | Upload completes within reasonable time | - | - | - | - |
| TC_PERF_003 | Test dashboard with many tasks | 1. Load dashboard with 50+ tasks | Dashboard loads without performance issues | - | - | - | - |
| TC_PERF_004 | Test image optimization | 1. Check image file sizes and formats | Images are optimized for web | - | - | - | - |
| TC_PERF_005 | Test concurrent user access | 1. Simulate multiple users accessing simultaneously | System handles concurrent access gracefully | - | - | - | - |
| TC_PERF_006 | Test memory usage | 1. Monitor memory usage during extended use | Memory usage remains within acceptable limits | - | - | - | - |
| TC_PERF_007 | Test API response times | 1. Measure API endpoint response times | All APIs respond within 2 seconds | - | - | - | - |
| TC_PERF_008 | Test caching behavior | 1. Check if resources are cached properly | Static resources are cached appropriately | - | - | - | - |
| TC_PERF_009 | Test search performance | 1. Search through large datasets | Search results return quickly | - | - | - | - |
| TC_PERF_010 | Test database query optimization | 1. Monitor database query execution times | Queries execute efficiently | - | - | - | - |

---

## 🔧 Cross-Browser Compatibility Test Cases

| Test Case ID | Test Title | Test Steps | Expected Result | Status | Comments | Tested By | Date |
|--------------|------------|------------|-----------------|---------|----------|-----------|------|
| TC_BROWSER_001 | Test on Chrome (latest) | 1. Test all functionality on Chrome | All features work correctly | - | - | - | - |
| TC_BROWSER_002 | Test on Firefox (latest) | 1. Test all functionality on Firefox | All features work correctly | - | - | - | - |
| TC_BROWSER_003 | Test on Safari (latest) | 1. Test all functionality on Safari | All features work correctly | - | - | - | - |
| TC_BROWSER_004 | Test on Edge (latest) | 1. Test all functionality on Edge | All features work correctly | - | - | - | - |
| TC_BROWSER_005 | Test CSS compatibility | 1. Check styling across browsers | Consistent appearance across browsers | - | - | - | - |
| TC_BROWSER_006 | Test JavaScript functionality | 1. Test interactive elements across browsers | JavaScript works consistently | - | - | - | - |
| TC_BROWSER_007 | Test file upload across browsers | 1. Test file upload on different browsers | Upload works on all supported browsers | - | - | - | - |
| TC_BROWSER_008 | Test form validation across browsers | 1. Test validation on different browsers | Validation works consistently | - | - | - | - |
| TC_BROWSER_009 | Test responsive design across browsers | 1. Test mobile view on different browsers | Responsive design works consistently | - | - | - | - |
| TC_BROWSER_010 | Test older browser versions | 1. Test on older versions (if supported) | Graceful degradation or clear compatibility messages | - | - | - | - |

---

## 📋 Test Execution Guidelines

### Pre-Testing Setup
1. **Environment Preparation**
   - Ensure test environment is set up
   - Clear browser cache and cookies
   - Disable browser extensions that might interfere
   - Prepare test data (valid user accounts, files, etc.)

2. **Test Data Requirements**
   - Valid email addresses for registration
   - Test resume files (PDF, DOC formats)
   - Invalid files for negative testing
   - Admin credentials

### During Testing
1. **Documentation**
   - Record actual results for each test case
   - Take screenshots for visual bugs
   - Note any deviations from expected behavior
   - Record browser and device information

2. **Bug Reporting**
   - Immediate reporting of critical bugs
   - Detailed steps to reproduce issues
   - Environment and context information
   - Screenshots or video recordings

### Post-Testing
1. **Test Report Compilation**
   - Summary of test execution results
   - Pass/fail statistics
   - List of identified bugs
   - Recommendations for improvements

2. **Regression Testing**
   - Re-test fixed bugs
   - Verify no new issues introduced
   - Confirm all critical paths still work

---

## 🎯 Test Prioritization

### Critical (P1) - Must Pass
- User authentication (login/logout)
- Registration functionality
- Application submission
- Admin access and core functions
- Security validations

### High (P2) - Should Pass
- Dashboard functionality
- Task management
- File upload features
- Mobile responsiveness
- Form validations

### Medium (P3) - Nice to Pass
- UI/UX elements
- Performance optimizations
- Cross-browser compatibility
- Advanced features

### Low (P4) - Can Defer
- Visual polish items
- Non-critical animations
- Optional features

---

## 📊 Test Metrics

Track these metrics during testing:
- **Test Coverage**: Percentage of requirements tested
- **Pass Rate**: (Passed tests / Total tests) × 100
- **Defect Density**: Number of defects per module
- **Test Execution Rate**: Tests executed per day
- **Defect Resolution Rate**: Bugs fixed per day

---

**Document Version**: 1.0  
**Last Updated**: August 13, 2025  
**Created By**: QA Team  
**Approved By**: Project Manager
