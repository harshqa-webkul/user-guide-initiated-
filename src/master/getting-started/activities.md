# Activities

An **activity** is a task you schedule on a record, such as a call to a customer, an email to send, or a meeting to hold. Each activity has a type, a due date and a person who is responsible. Activities sit in the **Chatter** panel of a record, so the follow-up stays next to the work it belongs to.

> **In simple words:** An activity is a reminder with an owner and a date, attached to the record it is about.

## Schedule an activity

You can schedule an activity from two places: the **Chatter** panel of a record, or the clock icon on a list row.

### From the Chatter panel

1. Open a record that has the **Chatter** panel, for example a quotation, a task or a maintenance request.
2. In the Chatter panel, click **Schedule Activity**.

   <ImagePopup src="/images1/getting-started/activity_button.png" alt="Chatter panel with the Schedule Activity button" />

3. Fill in the form:

   - **_Activity Plan:_** Optional. Choose a ready-made set of activities. See [Schedule from an activity plan](#schedule-from-an-activity-plan).
   - **_Activity Type:_** Choose what kind of activity it is, for example **To-Do**. This field is required.
   - **_Due Date:_** Choose the date by which the activity must be done.
   - **_Summary:_** Add a short title, for example `Check Quantity`.
   - **_Assigned To:_** Choose the user who must do the activity. This field is required.
   - **Note box:** Write more detail in the text editor at the bottom, if needed.

   <ImagePopup src="/images1/getting-started/activity_schedule_form.png" alt="Schedule Activity form with type, due date, summary, assignee and note" />

4. Click **Schedule** to save the activity, or **Cancel** to close the form without saving.

### From a list view

On many list pages, each row has a clock icon at the end. Click it to open the same **Schedule Activity** form for that record, without opening the record first.

<ImagePopup src="/images1/getting-started/activity_list_icon.png" alt="List view with the clock icon on each row" />

::: info
When the activity type is a meeting, the form does not ask for a due date or an assignee.
:::

After you schedule, the activity shows in the **Activities** section at the top of the Chatter panel.

<ImagePopup src="/images1/getting-started/activity_card.png" alt="Activities section showing type, assignee, due date and summary" />

Each activity card shows:

- **_Activity:_** The activity type, for example **To-Do**.
- **_Assigned To:_** The user who must do it.
- **_Due date:_** The date, with how many days are left.
- **_Summary:_** The short title you entered.

### Schedule from an activity plan

An **activity plan** is a ready-made set of activities. Use a plan when the same follow-ups repeat, for example the steps for a new employee.

1. In the **Schedule Activity** form, choose a plan in **Activity Plan**.
2. Choose the **Plan Date**. The dates of all activities in the plan are counted from this date.
3. Read the **Plan Summary** to see the activities the plan will create.
4. Click **Schedule**.

::: tip
The **Activity Plan** field appears only when the record has plans available. Plans are set up in the Configuration menu of the module, for example under Project, Recruitment or Employees.
:::

## Work with scheduled activities

Click the three dots at the top right of an activity card to open its menu:

- **_Mark as done:_** Closes the activity. See [Mark an activity as done](#mark-an-activity-as-done).
- **_Edit Activity:_** Change the type, plan, due date, summary or assignee.
- **_Cancel Activity:_** Remove the activity without doing it.

<ImagePopup src="/images1/getting-started/activity_actions_menu.png" alt="Activity menu with Mark as done, Edit Activity and Cancel Activity" />

### Mark an activity as done

1. Click **Mark as done** on the activity.
2. Write your result in **Feedback**, if you want to keep a record of it.
3. Click one of the buttons:
   - **Done** closes the activity.
   - **Done & Schedule Next** closes the activity and opens a new schedule form.

The finished activity moves into the message history of the record, with your feedback.

<ImagePopup src="/images1/getting-started/activity_mark_done.png" alt="Mark as done form with Feedback, Done and Done & Schedule Next" />

## Activity types

An **activity type** is the kind of activity you pick when you schedule one, such as **Meeting**, **Call** or **To-Do**. Each type can set a default user, a default due date delay, and a follow-up activity.

### Open the activity types

1. Open the **Settings** app and click the **Settings** tab.
2. In the left menu, under **General**, click **Manage Activities**.
3. Click **Activity Types**.

<ImagePopup src="/images1/getting-started/activity_types_settings.png" alt="Manage Activities page with the Activity Types link" />

The list shows these columns:

- **_Activity Type:_** The name of the type.
- **_Summary:_** The default summary for new activities of this type.
- **_Planned In:_** How long after the start point the due date falls, for example `1 days`.
- **_Type:_** The start point for the delay, for example **After Complete Date**.
- **_Action:_** What the type does, for example **Meeting**, **Upload File** or **Default**.
- **_Status:_** A tick shows the type is active.

Use the **All** and **Archived** tabs to switch between active and archived types. You can also search, group and filter the list.

<ImagePopup src="/images1/getting-started/activity_types_list.png" alt="Activity types list with All and Archived tabs" />

### Create an activity type

1. On the list, click **New Activity Type**.
2. Fill in the form. **General Information** and **Delay Information** are on the left. **Advanced Information** and **Status & Configuration** are on the right.

   <ImagePopup src="/images1/getting-started/activity_type_form.png" alt="Create Activity Type form with General Information, Advanced Information and Status & Configuration" />

   #### General information

   - **_Activity Type:_** The name of the type. This field is required.
   - **_Action:_** Choose **None**, **Upload File**, **Default**, **Phone Call** or **Meeting**.
   - **_Default User:_** The user who is assigned by default when you schedule this type.
   - **_Summary:_** The default short title.
   - **_Note:_** The default note text.

   #### Delay information

   - **_Delay Count:_** A number. This field is required and starts at `0`.
   - **_Delay Unit:_** Choose **Minutes**, **Hours**, **Days** or **Weeks**.
   - **_Delay Form:_** Choose where the delay is counted from: **After Previous Activity Deadline** or **After Complete Date**.

   #### Advanced information

   - **_Icon:_** Pick an icon for the type.
   - **_Decoration Type:_** Choose **Alert** or **Error** to colour the activity.
   - **_Chaining Type:_** Choose **Suggest Next Activity** or **Trigger Next Activity**.
   - **_Suggest:_** Appears when the chaining type is **Suggest Next Activity**. Choose the types to offer next.
   - **_Trigger:_** Appears when the chaining type is **Trigger Next Activity**. Choose the type that starts next.

   #### Status & Configuration

   - **_Status:_** Turn on to make the type active.
   - **_Keep Done Activities:_** Turn on to keep finished activities of this type.

3. Save the type.

::: info
For the **Upload File** action, the chaining fields do not appear.
:::

## See also

- [Stages](./stages.md)
