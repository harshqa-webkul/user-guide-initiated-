# Project

The **Project Plugin** helps you manage your company's projects, assign team members, track deadlines, organize tasks, and streamline communication. It is ideal for any organization that handles client-based work, internal project planning, or service-based workflows.

## Create a New Project

### Steps to Create a Project

1. Navigate to **`Project → Projects → New Project`** as shown in the below image.

   <ImagePopup src="/images1/project/project_create.png" alt="Create Project" />

2. Fill out the following details in the form that appears:

   ### General Section

   - **_Name:_** Enter the name of the project (e.g., Website Redesign, Client Onboarding).
   - **_Description:_** Provide a brief overview or purpose of the project. Helps team members understand the goal.

   <ImagePopup src="/images1/project/project_general.png" alt="General Project" />

   ### Additional Information

   - **_Project Manager:_** Assign the team member responsible for managing the project.
   - **_Customer:_** Link the project to a specific customer or client. Useful for client-based work.
   - **_Start Date:_** Choose the date when the project will begin.
   - **_End Date:_** Select the expected date of project completion.
   - **_Allocated Hours:_** Define the total number of working hours expected for the project. Helps in workload planning.
   - **_Tags:_** Add labels to organize and filter projects (e.g., Urgent, Internal, Long-Term).
   - **_Company:_** Select the company under which this project is being managed, if applicable.

   <ImagePopup src="/images1/project/project_additional.png" alt="Additional Project" />

   ### Settings

   - **Visibility Options**

     - **_Private:_** Only invited internal users can see the project.
     - **_Internal:_** All internal users can view the project.
     - **_Public:_** Internal users and invited external (portal) users can view the project.

   - **Time Management**

     - **_Allow Timesheets:_** Enable to allow users to log their time against this project.

   - **Task Management**

     - **_Allow Milestones:_** Enable to track significant phases of the project like design, development, testing, etc.

   <ImagePopup src="/images1/project/project_settings.png" alt="Setting Project" />

3. After Creating the Project

   Click **Create**. You will be redirected to the **View Project** page. Here, you'll see:

   - **_Edit Project:_** Modify project details.
   - **_Tasks:_** Manage all tasks under this project.
   - **_Milestone:_** Track major progress points (if enabled).

   <ImagePopup src="/images1/project/project_view.png" alt="Setting Project" />

## Task Creation in a Project

### Steps to Create a Task

1. On the **View Project** page, click **Tasks**.
2. Click on the **New Task** button.
   <ImagePopup src="/images1/project/project_task.png" alt="Task Project" />
3. Fill out the task creation form:

   ### General Section

   - **_Title:_** Task title (e.g., Design Landing Page, API Integration).
   - **_State:_** Task progress state:

     - In Progress
     - Change Requested
     - Approved
     - Cancelled
     - Done

   - **_Tags:_** Add tags or create new ones using (+) button to label or group tasks.
   - **_Description:_** Provide a detailed explanation of the task.

   <ImagePopup src="/images1/project/project_task_general.png" alt="Task Project" />

   ### Settings Section

   - **_Project:_** Select the project this task belongs to. Defaults to the current project.
   - **_Customer:_** Link to a customer, if applicable.
   - **_Assignees:_** Choose users responsible for this task. The task becomes visible in their dashboard.
   - **_Deadline:_** Set the task completion date.
   - **_Allocated Hours:_** Estimate time required for the task.

   <ImagePopup src="/images1/project/project_task_setting.png" alt="Task Project" />

4. Click **Create** to save the task. You will be redirected to the **View Task** page.

### On View Task Page

- **_Edit Task:_** Modify the task details.
- **_Delete:_** Permanently remove the task.
- **_Sub Tasks:_** Click to create smaller, trackable items within this task.

<ImagePopup src="/images1/project/project_task_view.png" alt="Task Project" />

## Sub Task Creation

### Steps to Create a Sub Task

1. On the **View Task** page, click **Sub Tasks**.
2. Click the **Create Sub Task** button.

   <ImagePopup src="/images1/project/project_subtask.png" alt="Task Project" />

3. A modal form will appear. Fill in the details:

   ### General Section

   - **_Title:_** Sub task title.
   - **_State:_** Same progress stages as tasks.
   - **_Tags:_** Add or create new tags.
   - **_Description:_** Detail the sub task requirements.

   <ImagePopup src="/images1/project/project_subtask_general.png" alt="Task Project" />

   ### Settings Section

   - **_Project:_** Automatically selected based on the parent task.
   - **_Customer:_** Link if applicable.
   - **_Assignees:_** Select users to work on the sub task.
   - **_Deadline:_** Set the deadline.
   - **_Allocated Hours:_** Estimated hours for this sub task.

   <ImagePopup src="/images1/project/project_subtask_settings.png" alt="Task Project" />

4. Action Buttons

- **_Create:_** Save the sub task.
- **_Create & Create Another:_** Save and open a new sub task form.
- **_Cancel:_** Close the form without saving.

Once created, sub tasks will appear under the **Sub Tasks** section in the **View Task** page.

### 📌 Use Case Example

**Example:** You’re managing a software development project for a client.

- Create the project “Client App Development” and assign a project manager.
- Add tasks like "Frontend Design", "Backend API Development", "Testing", each with different assignees and deadlines.
- For "Frontend Design", create sub tasks like "Login Screen UI", "Dashboard Layout", etc.
- Enable **Allow Timesheets** to track developer time on each task.
- Track key stages using Milestones like "Design Phase Complete" or "Beta Launch".

This structured approach keeps the team aligned and helps management monitor progress easily.

## Summary

**Projects** module in **AureusERP** allow for efficient management of tasks, deadlines, and team collaboration. By utilizing features like task assignments, sub tasks, milestones, and timesheets, organizations can streamline their project workflows and ensure successful project delivery.
