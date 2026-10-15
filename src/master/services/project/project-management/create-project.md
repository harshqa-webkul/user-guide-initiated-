# Create a project

A project groups the tasks, people, dates and hours of one job. The project list shows every project as a card. You can filter the cards, mark favorites, and open a project to see its details.

> **In simple words:** Open the project list, click **New Project**, fill the form and click **Create**.

Open `Project → Projects`.

::: info About the example
This page creates a second project, **Customer Portal Launch**, so the pictures show a fresh form. The rest of the guide uses **Website Revamp**. Create both if you want to follow every page.
:::

::: info Before you start
- Add [project stages](project-stages-and-milestones.md) if **Enable Project Stages** is on.
- Create the customer in [Contacts](../../../getting-started/contacts/contacts.md).
- Switch on the features you need in [Project settings](../get-started/project-settings.md).
:::

## Overview

Projects appear as cards, not as a table. Each card shows the name, the customer, the planned dates, the project manager and the tags. A badge with remaining hours appears when timesheets and milestones are on for the project.

<ImagePopup src="/images1/project/pj_list_cards.png" alt="Project list as cards showing Customer Portal Launch, Internal IT Upgrade and ERP Implementation with customer, dates, manager and tags" />

### Tabs

- **My Projects:** projects where you are the project manager.
- **My Favorites:** projects you marked with the star.
- **Unassigned Projects:** projects with no project manager.
- **Archived Projects:** projects you deleted. You can restore them.

### Group by, filters and search

Group the cards by **Stage**, **Project Manager**, **Customer** or **Created At**. Use the search box to find a project by name. Open the filter panel to narrow the list. You can filter by **Name**, **Visibility**, dates, **Stage**, **Customer**, **Project Manager** and **Tags**.

<ImagePopup src="/images1/project/pj_list_filters.png" alt="Filters panel of the project list with the Add rule menu listing Name, Visibility, Start Date, End Date, Stage, Customer and more" />

### Card buttons

- **Star:** marks the project as your favorite. It then shows in **My Favorites**.
- **Tasks:** shows the number of tasks. Click it to open the tasks of that project.
- **Milestones badge:** shows completed over total, for example 1/2. It appears when **Enable Milestones** and **Allow Milestones** are on.
- **Three dot menu:** **Edit**, **Delete**, **Restore** and **Force delete**.

## Create project

1. Click **New Project**. The page is titled **Create Project**.

<ImagePopup src="/images1/project/pj_create_empty.png" alt="Empty Create Project form with the stage bar, General card, Additional Information card and Settings card" />

2. If the stage bar shows, keep **To Do** or click another stage. It needs **Enable Project Stages**. The first stage is chosen for you.

### General

3. Type **Customer Portal Launch** in **Name**. Add a short **Description** if you like.

- **_Name:_** Required. Up to 255 characters.
- **_Description:_** Free text with formatting.

### Additional Information

4. Choose **ERP Admin** as **Project Manager**.
5. Choose **Azure Interiors** as **Customer**.
6. Set **Start Date** to 03 Aug 2026 and **End Date** to 31 Oct 2026.
7. If you switched on **Enable Timesheets**, enter **80** in **Allocated Hours**. Otherwise the field is hidden.
8. Pick the tag **Client Work** in **Tags**.

<ImagePopup src="/images1/project/pj_create_additional.png" alt="Additional Information card with Project Manager ERP Admin, Customer Azure Interiors, dates 03 Aug 2026 to 31 Oct 2026 and Allocated Hours 80" />

- **_Project Manager:_** The user who runs the project. Click the plus icon in the field to add a user.
- **_Customer:_** The company or person the work is for. Click the plus icon in the field to create a contact without leaving the form.
- **_Start Date_ and _End Date:_** Fill both or neither. The end date cannot be before the start date.
- **_Allocated Hours:_** The planned hours. Use decimals: 1.5 means 1 hour 30 minutes. Shown only when **Enable Timesheets** is on.
- **_Tags:_** Labels from [Tags](../configuration/tags.md). You can create a tag here.
- **_Company:_** The company that owns the project. It matters when you run more than one company in Aureus.

### Settings

9. In the **Settings** card on the right, leave **Visibility** on **Internal**. Switch on **Allow Timesheets** and **Allow Milestones**.

- **_Visibility:_** 
    - **Private** for invited internal users only. 
    - **Internal** for all internal users (default). An internal user is a person with an Aureus login. A portal user is a customer with portal access. See [Portal access](../../../general-settings/users/portal-access.md).
    - **Public** for invited portal users and all internal users. 
- **_Allow Timesheets:_** Lets people log hours on the project tasks. Needs **Enable Timesheets**.
- **_Allow Milestones:_** Lets you add milestones. Needs **Enable Milestones**. It is on by default.

<ImagePopup src="/images1/project/pj_create_settings.png" alt="Settings card with Visibility Internal, Allow Timesheets on and Allow Milestones on" />

10. Click **Create**. Click **Create & create another** to start a new form. Click **Cancel** to leave.

<ImagePopup src="/images1/project/pj_create_filled.png" alt="Completed Create Project form for Customer Portal Launch ready to save" />

## View, edit and archive

After you save, the **View** page opens. The top links are **View**, **Edit**, **Tasks** and **Milestones**. **Milestones** shows only when the project allows milestones.

<ImagePopup src="/images1/project/pj_view.png" alt="View page of Customer Portal Launch with General, Additional Information, Statistics and Project Settings sections" />

The page shows these sections:

- **General:** name and description.
- **Additional Information:** manager, customer, timeline, allocated and remaining hours, current stage and tags.
- **Statistics:** **Total Tasks** and **Milestones Progress**.
- **Project Settings:** visibility and what is enabled.

Below the sections, the **Task Stages** and **Milestones** tabs list the stages and milestones of this project.

Use the **Chatter** button for messages, followers and activities. See [Chatter](../../../getting-started/chatter.md).

## Actions and statuses

- **Edit:** opens the same form. Change values and save.
- **Delete:** archives the project. It moves to **Archived Projects**.
- **Restore:** in **Archived Projects**, brings the project back.
- **Force delete:** removes the project for good. It fails if other records still use the project.
- **Drag a card:** changes the card order.

::: warning
**Force delete** cannot be undone. Use **Delete** if you may need the project again.
:::

## See also

- [Project stages and milestones](project-stages-and-milestones.md)
- [Create a task](../task-management/create-task.md)
- [Project dashboard](project-dashboard.md)
- [Project settings](../get-started/project-settings.md)
- [Project management](index.md)
