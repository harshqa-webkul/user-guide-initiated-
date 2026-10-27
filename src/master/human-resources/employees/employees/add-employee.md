# Add an employee

Adding an employee creates the record that every other HR task depends on. You enter the person's name and job, then optionally fill work, private and settings details. You can save with only a name and complete the rest later.

> **In simple words:** Fill in who the person is and where they fit in the company, then save.

Open `Employees → Employees → New Employee`.

::: info Prerequisite
The lists on this form come from other pages. Create a [department](../departments/departments.md), a [job position](../setup/job-positions.md), [tags](../setup/tags.md) and a [work location](../setup/work-locations.md) first if you need new ones. Skills are added after saving. See [Skills and resume](skills-and-resume.md).
:::

Only **Name** is required. Every other field is optional. Fields do not fill each other. For example, choosing a **Department** does not fill **Manager**, **Coach** or **Job Position**.

## The top block

The top block stays visible above all tabs.

- **_Name:_** Required. Type the full name.
- **_Job Title:_** The title shown on cards and the profile.
- **Avatar:** Click **Browse** or drag an image into the round frame.
- **_Work Email:_** The business email. The envelope button opens your mail app.
- **_Department:_** Pick one. Click the plus button to create a department without leaving the form.
- **_Work Mobile:_** The business mobile number.
- **_Job Position:_** Pick one. The plus button creates a new position.
- **_Work Phone:_** The desk or office number.
- **_Manager:_** The person this employee reports to.
- **_Employee Tags:_** Pick several tags. The plus button creates a tag.
- **_Coach:_** A person who guides the employee, often during the first months.

::: info Who is who
| Field | Who it is |
| --- | --- |
| **Manager** | The employee this person reports to. |
| **Coach** | An employee who guides this person. |
| **Time Off** (approver) | The user who approves leave in the Time Off app. |
| **Attendance Manager** | The user who manages attendance records. |
| **Related User** | The login of this person. |
:::

## Tab: Work Information

### Location

- **_Work Address:_** A contact that holds the office address.
- **_Work Location:_** Where the person sits, such as **Building 1, Second Floor**, **Home** or **Other**.

### Approver

- **_Time Off:_** The user who approves this employee's leave requests. The list shows users, such as **HR Admin**, not employees.
- **_Attendance Manager:_** The user who manages this employee's attendance.

### Schedule

- **_Working Hours:_** The working schedule. It is empty on a new employee and stays empty until you pick one.
- **_Time Zone:_** Starts as **UTC**. Change it to the place where the person works.

### Organization Details

- **_Company:_** Defaults to **My Company**. If you change it, **Job Position**, **Work Location** and **Department** clear. Pick them again.
- **_Color:_** A colour for this employee.

## Tab: Private Information

### Private Contact

Fill the home address with **Street 1**, **Street 2**, **City**, **Postal Code**, **Country** and **State**. The state list depends on the country. Then add **Private Phone**, **Private Email** and **Private Car Plate**.

**_Distance Home to Work_** and **_Km Home to Work_** are numbers. **Distance Unit** switches between **Kilometer** and **Meter**.

**_Bank Account:_** This field is greyed out on a new employee. It works only after the employee has a related user. See the Settings tab below.

### Emergency Contact

- **_Contact Name:_** Who to call.
- **_Contact Phone:_** Their number.

### Family Status

**_Marital Status:_** Defaults to **Single**. Choose **Married**, **Divorced** or **Widowed** and three more fields appear: **Spouse Name** (required), **Spouse Birthday** and **Number of Children**. With **Single** they stay hidden.

### Education

- **_Certificate Level:_** **Graduated**, **Bachelor**, **Master**, **Doctor** or **Other**.
- **_Field of Study_** and **_School_**.

### Citizenship

Pick **Country** and **State**. **State** is required only when the country needs one. Then fill **Identification ID**, **SSN No**, **SIN No**, **Passport ID**, **Gender**, **Date of Birth** and **Country of Birth**.

### Work Permit

Fill **Visa Number**, **Work Permit No**, **Visa Expiration** and **Work Permit Expiration Date**. Upload the document in **Work Permit**.

## Tab: Settings

### Employment Status

- **_Active Employee:_** On by default. Turn it off when the person has left. See [Leaving the company](leaving-the-company.md).
- **_Flexible Work Arrangement_** and **_Fully Flexible Schedule_:** Off by default. Turn them on for staff with flexible hours. Leave them off if you do not use flexible hours.
- **_Work Permit Scheduled Activity:_** Off by default.
- **_Related User:_** The login of this employee. Users that already belong to another employee are greyed out. Click the plus button to create a user. The **Create User** window opens with **Name** and **Email** filled from the employee.
- **_Departure Reason:_** Leave empty for current staff.

### Additional Information

**Primary Language**, **Additional Notes** and **Notes**.

### Attendance/Point of Sale

- **_Badge ID:_** Type a code, or click the plus button at the end to generate an 8 character code. It is saved only when you save the employee.
- **_PIN:_** A PIN code for this employee.

## Example: add Priya Sharma

Priya is the new Warehouse Supervisor in the Operations department.

1. Open `Employees → Employees` and click **New Employee**.

<ImagePopup src="/images1/employees/emp_add_new_button.png" alt="Employees list with the New Employee button outlined in orange" />

2. In the top block, type **Priya Sharma** as **Name** and **Warehouse Supervisor** as **Job Title**.
3. Set **Department** to **Operations** and **Job Position** to **Warehouse Supervisor**.
4. Set **Manager** to **Sarah Mitchell** and **Coach** to **Rachel Kim**.
5. Pick the tags **Operations** and **Senior**.
6. Type **priya.sharma@mycompany.com** as **Work Email**, **9876543210** as **Work Mobile** and **0221234567** as **Work Phone**.

<ImagePopup src="/images1/employees/emp_add_top_block.png" alt="Create Employees form with the top block filled for Priya Sharma" />

7. Open the **Work Information** tab. Set **Work Location** to **Building 1, Second Floor** and **Time Off** to the user **HR Admin**. Leave **Working Hours** empty and keep **Time Zone** as **UTC**.

<ImagePopup src="/images1/employees/emp_add_work_tab.png" alt="Work Information tab with work location Building 1 Second Floor and Time Off approver HR Admin filled" />

8. Open the **Private Information** tab. Enter **Pune** as **City**, **India** as **Country** and **9123456780** as **Private Phone**. Keep **Marital Status** as **Single**.
9. Under **Emergency Contact**, enter **Anil Sharma** and **9988776655**.
10. Under **Education**, choose **Bachelor** and type **Logistics** as **Field of Study**.

<ImagePopup src="/images1/employees/emp_add_private_tab.png" alt="Private Information tab with Pune, India, a private phone, emergency contact Anil Sharma and education Bachelor in Logistics filled" />

11. Open the **Settings** tab. Leave **Active Employee** on.

<ImagePopup src="/images1/employees/emp_add_settings_tab.png" alt="Settings tab with Active Employee turned on" />

12. Click **Create**. An **Employee created** notification says **The employee has been created successfully.** Aureus opens the profile with the **Resume** tab open. It is empty at first.

<ImagePopup src="/images1/employees/emp_add_saved.png" alt="Profile page of Priya Sharma with the Resume tab open, showing her resume lines and skill" />

## Create, Create and create another, Cancel

- **Create:** saves the employee and opens the profile page on the **Resume** tab.
- **Create & create another:** saves and opens a blank form. Use it for batch entry.
- **Cancel:** leaves without saving.

## Behind the scenes

Each time you save an employee, Aureus creates a matching contact marked as an employee. It copies the name, work email, job title, phones, colour and company. If the contact exists, Aureus updates it on every save. See [Contacts](../../../getting-started/contacts/contacts.md).

::: tip
Related User needs a user to exist first. Create one in [Manage users](../../../general-settings/users/manage-users.md) or with the plus button.
:::

## See also

- [Employee profile](employee-profile.md)
- [Skills and resume](skills-and-resume.md)
- [Employee list](employee-list.md)
- [Departments](../departments/departments.md)
