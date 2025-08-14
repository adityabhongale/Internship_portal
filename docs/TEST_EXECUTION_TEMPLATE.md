# Test Case Execution Template

This is a simplified template for test case execution that matches the format in your spreadsheet.

## 📊 Test Case Execution Sheet

### UI/UX Test Cases

| TEST CASE ID | TEST TITLE | TEST STEPS | EXPECTED RESULT | ACTUAL RESULT | STATUS | COMMENTS | TESTED BY | DATE |
|--------------|------------|------------|-----------------|---------------|---------|----------|-----------|------|
| UI_001 | Homepage header loads correctly | Open website URL, Observe header section | Logo, navigation menu are visible & aligned | | | | | |
| UI_002 | Verify "Apply Now" button functionality | Click the "Apply Now" button on the hero section | Redirects to the application form or relevant page | | | | | |
| UI_003 | Verify hero section text alignment and styling | Inspect "A Launchpad to Your Tech Career" heading and paragraph | Text is center-aligned, gradient heading visible, spacing consistent | | | | | |
| UI_004 | Verify internship domains section layout | Scroll to "Internship Domains" section | Six cards are visible, evenly spaced, each with icon, title, and description | | | | | |
| UI_005 | Verify Internship Domains icons | Check each domain card icon | Each card has the correct domain-related icon | | | | | |
| UI_006 | Verify "What We Offer" section content | Scroll to "What We Offer" section | Three cards visible with icon, title, and description | | | | | |
| UI_007 | Verify footer links | Click each footer link under "Quick Links" and "Our Services" | Redirects to correct pages | | In Progress | Our services links are added but not opening | | |
| UI_008 | Verified social Media links in footer | Clicked on each link | Open respective social media page | | Pass | | | 08/12/2025 |
| UI_009 | Responsive design check | Opened page in mobile viewport | Layout adapts, text readable | | Pass | | | 08/12/2025 |
| UI_010 | Verified hover effects | Hover over nav links, buttons & cards | Hover styles apply correctly | | Pass | | | 08/12/2025 |
| UI_011 | Checked broken images | Inspected all images/icons | All images load successfully, no broken links | | Pass | | | 08/12/2025 |
| UI_012 | Verified scrolling behavior | Scrolled through entire page | Smooth scrolling, no content cutoff | | Pass | | | 08/12/2025 |

### Login Test Cases

| TEST CASE ID | TEST TITLE | TEST STEPS | EXPECTED RESULT | ACTUAL RESULT | STATUS | COMMENTS | TESTED BY | DATE |
|--------------|------------|------------|-----------------|---------------|---------|----------|-----------|------|
| TC_LOGIN_001 | Verify login with valid credentials | Enter valid username/email and password, click "Login" | User is logged in and redirected to dashboard/homepage | | Pass | | | 08/12/2025 |
| TC_LOGIN_002 | Verify login with invalid password | Enter valid username/email but wrong password | Error message displayed: "Invalid credentials" | | Pass | | | 08/12/2025 |
| TC_LOGIN_003 | Verify login with invalid username/email | Enter invalid username/email and valid password | Error message displayed: "Invalid credentials" | | Pass | | | 08/12/2025 |
| TC_LOGIN_004 | Verify login with blank fields | Leave username/email and password empty, click "Login" | Validation message shown for both fields | | Pass | | | 08/12/2025 |
| TC_LOGIN_005 | Verify login with blank password | Enter valid username/email but leave password empty | Validation message shown for password | | Pass | | | 08/12/2025 |
| TC_LOGIN_006 | Verify login with blank username/email | Leave username/email empty but enter valid password | Validation message shown for username/email | | Pass | | | 08/12/2025 |
| TC_LOGIN_007 | Verify "Forgot Password" link | Click on "Forgot Password" link | Redirects to password reset page | | | Functionality not available | | |
| TC_LOGIN_008 | Verify password masking | Enter password in password field | Characters are masked with dots/bullets | | Pass | | | 08/12/2025 |
| TC_LOGIN_009 | Verify password show/hide toggle | Click "eye" icon in password field | Password becomes visible, click again to hide | | Pass | | | 08/12/2025 |
| TC_LOGIN_010 | Verify login button disable state | Keep one or both fields empty | Login button remains disabled until both fields are filled | | | Functionality not available | | |
| TC_LOGIN_011 | Verify case sensitivity of wrong-case password | Enter correct username/email but wrong-case password | Login fails with error message | | | Functionality not available | | |
| TC_LOGIN_012 | Verify email format validation | Enter invalid email format (e.g., abc@g) | Error message: "Enter a valid email" | | pass | | | |
| TC_LOGIN_013 | Verify social login - Google | Click "Login with Google" button | Google authentication popup appears | | | Functionality not available | | |
| TC_LOGIN_014 | Verify social login - Facebook | Click "Login with Facebook" button | Facebook authentication popup appears | | | Functionality not available | | |
| TC_LOGIN_015 | Verify special characters in password | Enter password with special characters | Accepted without errors | | pass | | | |
| TC_LOGIN_016 | Verify error message styling | Trigger invalid login | Error message is clearly visible in red with proper spacing | | Pass | | | |
| TC_LOGIN_017 | Verify accessibility support | Navigate with keyboard (Tab, Enter) | All fields, buttons, and links are accessible via keyboard | | Pass | | | |
| TC_LOGIN_018 | Verify accessibility support | Navigate with keyboard (Tab, Enter) | All fields, buttons, and links are accessible via keyboard | | Pass | | | |
| TC_LOGIN_019 | Verify accessibility support | Navigate with keyboard (Tab, Enter) | All fields, buttons, and links are accessible via keyboard | | Pass | | | |
| TC_LOGIN_020 | Verify accessibility support | Navigate with keyboard (Tab, Enter) | All fields, buttons, and links are accessible via keyboard | | Pass | | | |

### Registration Test Cases

| TEST CASE ID | TEST TITLE | TEST STEPS | EXPECTED RESULT | ACTUAL RESULT | STATUS | COMMENTS | TESTED BY | DATE |
|--------------|------------|------------|-----------------|---------------|---------|----------|-----------|------|
| TC_REG_001 | Verify registration with valid details | Fill all fields with valid data and click "Submit Application" | Registration successful, confirmation message shown | | pass | | | |

## 📋 Test Status Legend

- **Pass**: Test case executed successfully, actual result matches expected result
- **Fail**: Test case failed, actual result does not match expected result  
- **In Progress**: Test case is currently being executed
- **Blocked**: Test case cannot be executed due to dependencies or issues
- **Not Tested**: Test case has not been executed yet
- **N/A**: Test case is not applicable for current version/environment

## 📝 Instructions for Use

### Before Testing
1. **Setup Environment**: Ensure test environment is ready
2. **Prepare Test Data**: Have valid user accounts, test files ready
3. **Clear Browser**: Clear cache, cookies, disable extensions
4. **Record Details**: Note browser version, OS, screen resolution

### During Testing
1. **Follow Steps**: Execute test steps exactly as written
2. **Record Results**: Document actual results in "ACTUAL RESULT" column
3. **Mark Status**: Update status based on test outcome
4. **Add Comments**: Note any issues, deviations, or observations
5. **Take Screenshots**: Capture evidence for failed test cases

### After Testing
1. **Review Results**: Ensure all test cases are completed
2. **Report Bugs**: Create detailed bug reports for failed tests
3. **Update Status**: Final review of all test case statuses
4. **Generate Summary**: Create test execution summary report

## 🐛 Bug Reporting Template

When a test case fails, use this format for bug reporting:

**Bug ID**: BUG_001  
**Test Case ID**: TC_LOGIN_002  
**Bug Title**: Login error message not displayed for invalid password  
**Severity**: Medium  
**Priority**: High  
**Environment**: Chrome 91.0, Windows 10  
**Steps to Reproduce**:
1. Navigate to login page
2. Enter valid email: test@example.com
3. Enter invalid password: wrongpass
4. Click Login button

**Expected Result**: Error message "Invalid credentials" should be displayed  
**Actual Result**: No error message shown, page just refreshes  
**Attachments**: Screenshot_login_error.png  
**Assigned To**: Development Team  
**Status**: Open  

## 📊 Test Metrics Tracking

Track these metrics during test execution:

- **Total Test Cases**: 100
- **Executed**: 85
- **Passed**: 78
- **Failed**: 7
- **In Progress**: 15
- **Pass Rate**: 91.8%
- **Defects Found**: 12
- **Critical Defects**: 2
- **Test Coverage**: 85%

## 🎯 Test Completion Criteria

Testing is considered complete when:
- [ ] All critical test cases pass (100%)
- [ ] Pass rate is above 95% for high priority test cases
- [ ] All critical and high severity bugs are fixed
- [ ] Regression testing is completed
- [ ] Performance benchmarks are met
- [ ] Security test cases pass
- [ ] Cross-browser compatibility verified
- [ ] Mobile responsiveness confirmed

---

**Template Version**: 1.0  
**Last Updated**: August 13, 2025  
**For Project**: Internship Portal  
**Environment**: Development/Testing
