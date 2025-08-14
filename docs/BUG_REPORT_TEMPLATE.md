# Bug Report Template - Internship Portal

## 🐛 Bug Report Information

| Field | Details |
|-------|---------|
| **Bug ID** | BUG-YYYY-MM-DD-### |
| **Report Date** | [Date] |
| **Reported By** | [Tester Name] |
| **Assigned To** | [Developer Name] |
| **Module/Feature** | [Authentication/Dashboard/Admin/etc.] |
| **Version/Build** | [Version Number] |
| **Environment** | [Test/Staging/Production] |

---

## 📋 Bug Summary

### Title
**[Provide a clear, concise bug title]**

Example: "Login button remains disabled after entering valid credentials"

### Bug Type
- [ ] **Functional**: Feature not working as expected
- [ ] **UI/UX**: Visual or user experience issue
- [ ] **Performance**: Slow response or loading issues
- [ ] **Security**: Security vulnerability or concern
- [ ] **Compatibility**: Browser or device compatibility issue
- [ ] **Data**: Data integrity or validation issue

---

## 🎯 Priority and Severity

### Priority (Business Impact)
- [ ] **P1 - Critical**: Blocking release, affects core functionality
- [ ] **P2 - High**: Important feature affected, workaround available
- [ ] **P3 - Medium**: Minor feature affected, easy workaround
- [ ] **P4 - Low**: Cosmetic issue, minimal impact

### Severity (Technical Impact)
- [ ] **Critical**: System crash, data loss, security breach
- [ ] **High**: Major feature broken, no workaround
- [ ] **Medium**: Feature partially working, workaround exists
- [ ] **Low**: Minor issue, doesn't affect functionality

---

## 🔍 Bug Details

### Description
**[Detailed description of the issue]**

Example: When a user enters valid email and password on the login page and clicks the "Sign In" button, the button remains in a disabled state and the user cannot proceed to the dashboard.

### Preconditions
**[Any setup or conditions needed before reproducing the bug]**

Example:
- User account exists in the system
- User is on the login page
- Browser cookies are cleared

### Steps to Reproduce
**[Detailed steps to reproduce the issue]**

1. Navigate to the login page (http://localhost:3000/login)
2. Enter valid email: "student@example.com"
3. Enter valid password: "password123"
4. Click the "Sign In" button
5. Observe the button state

### Expected Result
**[What should happen]**

Example: The user should be successfully logged in and redirected to the dashboard page.

### Actual Result
**[What actually happens]**

Example: The "Sign In" button remains disabled and the user stays on the login page with no error message displayed.

### Additional Information
**[Any other relevant details]**

Example:
- This issue occurs intermittently (about 30% of login attempts)
- No error messages appear in the browser console
- The issue doesn't occur when using keyboard navigation (Enter key)

---

## 🖼️ Evidence

### Screenshots
**[Attach relevant screenshots]**
- [ ] Screenshot 1: [Description]
- [ ] Screenshot 2: [Description]
- [ ] Screenshot 3: [Description]

### Screen Recording
**[If applicable, attach screen recording showing the issue]**
- [ ] Video 1: [Description]

### Browser Console Logs
```
[Paste any relevant browser console errors or warnings]

Example:
TypeError: Cannot read property 'email' of undefined
    at LoginForm.jsx:45:23
    at onClick (LoginForm.jsx:58:15)
```

### Network Logs
```
[Paste any relevant network request/response data]

Example:
POST /api/auth/login
Status: 500 Internal Server Error
Response: {"error": "Database connection failed"}
```

---

## 🌐 Environment Details

### Browser Information
- **Browser**: [Chrome/Firefox/Safari/Edge]
- **Version**: [Browser version number]
- **Operating System**: [Windows/macOS/Linux]
- **Screen Resolution**: [1920x1080/1366x768/etc.]

### Device Information (if mobile)
- **Device**: [iPhone 12/Samsung Galaxy S21/etc.]
- **Operating System**: [iOS 15/Android 12/etc.]
- **Screen Size**: [375x667/414x896/etc.]

### Application Information
- **URL**: [Specific URL where bug occurs]
- **Build Version**: [Application version]
- **Database State**: [Any relevant data conditions]

---

## 🔄 Reproducibility

### Frequency
- [ ] **Always (100%)**: Bug occurs every time
- [ ] **Usually (75-99%)**: Bug occurs most of the time
- [ ] **Sometimes (25-74%)**: Bug occurs occasionally
- [ ] **Rarely (<25%)**: Bug occurs rarely
- [ ] **Unable to Reproduce**: Cannot reproduce the issue

### Browsers Tested
- [ ] **Chrome** (Version: ___)
- [ ] **Firefox** (Version: ___)
- [ ] **Safari** (Version: ___)
- [ ] **Edge** (Version: ___)
- [ ] **Mobile Safari** (Version: ___)
- [ ] **Mobile Chrome** (Version: ___)

### Devices Tested
- [ ] **Desktop/Laptop**
- [ ] **Tablet**
- [ ] **Mobile Phone**

---

## 💡 Suggested Solution

### Root Cause Analysis
**[If known, describe the potential cause]**

Example: The login button's disabled state is not being properly reset after form validation passes.

### Proposed Fix
**[If applicable, suggest how to fix the issue]**

Example: Add proper state management to re-enable the button when form validation is successful.

### Workaround
**[If there's a temporary solution for users]**

Example: Users can press the Enter key instead of clicking the button to submit the login form.

---

## 📝 Testing Notes

### Test Data Used
**[Specific test data that triggers the bug]**

Example:
- Email: student@example.com
- Password: password123

### Related Test Cases
**[Reference to related test cases]**

Example:
- TC_AUTH_001: Valid User Login
- TC_AUTH_002: Invalid User Login

### Impact on Other Features
**[How this bug affects other parts of the application]**

Example: This bug prevents users from accessing the dashboard, affecting all dashboard-related functionality.

---

## 🏷️ Labels and Tags

### Component Tags
- [ ] **Frontend**: UI/React component issue
- [ ] **Backend**: API/Server issue
- [ ] **Database**: Data storage issue
- [ ] **Authentication**: Login/security issue
- [ ] **File Upload**: File handling issue

### Feature Tags
- [ ] **Login/Logout**
- [ ] **Registration**
- [ ] **Dashboard**
- [ ] **Admin Panel**
- [ ] **Profile Management**
- [ ] **Task Management**
- [ ] **File Management**

### Platform Tags
- [ ] **Web**
- [ ] **Mobile**
- [ ] **Tablet**
- [ ] **Cross-browser**

---

## 🔄 Status Tracking

### Bug Lifecycle
- [ ] **New**: Bug reported and awaiting review
- [ ] **Assigned**: Bug assigned to developer
- [ ] **In Progress**: Developer working on fix
- [ ] **Fixed**: Fix implemented and ready for testing
- [ ] **Verified**: Fix tested and confirmed working
- [ ] **Closed**: Bug resolved and closed
- [ ] **Reopened**: Bug still exists after attempted fix

### Resolution Details
**[To be filled by developer]**
- **Fixed in Version**: [Version number]
- **Fix Description**: [What was changed to fix the bug]
- **Files Modified**: [List of files changed]

### Verification Details
**[To be filled by tester]**
- **Verified By**: [Tester name]
- **Verification Date**: [Date]
- **Verification Notes**: [Any additional notes]

---

## 📞 Communication

### Stakeholders to Notify
- [ ] **QA Lead**
- [ ] **Development Team Lead**
- [ ] **Product Owner**
- [ ] **Project Manager**

### Urgency Level
- [ ] **Immediate**: Notify immediately
- [ ] **Same Day**: Notify within business day
- [ ] **Regular**: Include in regular reports

---

## 📊 Metrics

### Time Tracking
- **Time to Report**: [Time from discovery to reporting]
- **Time to Assign**: [Time from report to assignment]
- **Time to Fix**: [Time from assignment to fix]
- **Time to Verify**: [Time from fix to verification]
- **Total Resolution Time**: [Total time from report to closure]

### Effort Estimation
- **Estimated Fix Time**: [Developer's estimate]
- **Actual Fix Time**: [Actual time taken]
- **Testing Time**: [Time spent testing]

---

## 📚 References

### Related Bugs
- **Duplicate of**: [Bug ID if duplicate]
- **Related to**: [Related bug IDs]
- **Blocks**: [Bug IDs that this bug blocks]
- **Blocked by**: [Bug IDs that block this bug]

### Documentation References
- **Requirements**: [Link to requirement document]
- **Test Cases**: [Link to relevant test cases]
- **Design Specs**: [Link to design specifications]

---

## ✅ Review and Approval

### Review Checklist
- [ ] **Bug title is clear and descriptive**
- [ ] **Steps to reproduce are detailed and accurate**
- [ ] **Expected vs actual results are clearly stated**
- [ ] **Priority and severity are correctly assigned**
- [ ] **Environment details are complete**
- [ ] **Screenshots/evidence are attached**
- [ ] **All required fields are filled**

### Approvals
| Role | Name | Date | Comments |
|------|------|------|----------|
| **QA Lead** | | | |
| **Technical Lead** | | | |

---

## 🔖 Template Usage Guidelines

### When to Use This Template
- Use this template for all bug reports
- Ensure all mandatory fields are completed
- Attach relevant evidence (screenshots, logs)
- Follow the bug lifecycle process

### Template Customization
- Add project-specific fields as needed
- Modify priority/severity definitions per project
- Adjust workflow states as required
- Include additional evidence types if necessary

### Best Practices
1. **Be Specific**: Provide detailed, actionable information
2. **Be Objective**: Report facts, not assumptions
3. **Be Complete**: Fill all relevant sections
4. **Be Consistent**: Use standard terminology
5. **Be Timely**: Report bugs promptly after discovery

---

**Document Information:**
- **File Name**: Bug_Report_Template_v1.0.md
- **Location**: /docs/BUG_REPORT_TEMPLATE.md
- **Version**: 1.0
- **Last Updated**: August 13, 2025
- **Created By**: QA Team

---

**© 2025 Sarg Softech. All rights reserved.**
