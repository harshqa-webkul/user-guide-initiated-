# Leave types

A leave type is one kind of time off, such as **Paid Time Off** or **Sick Time Off**. It decides who must approve a request, whether the person needs days given first, and how the request is counted and coloured. Every request and every allocation uses a leave type.

> **In simple words:** A leave type is a kind of leave with its own rules.

Open `Time Off → Configuration → Leave Types`.

::: info Prerequisite
Notified officers are users. Create them first in [Manage users](../../../general-settings/users/manage-users.md). Seven leave types already exist, so you can start without creating one.
:::

## Overview

The page lists every leave type. Two tabs sit above the list.

- **All:** leave types in use.
- **Archived:** leave types you deleted. You can restore them here.

The columns **Name** and **Allocation Approval** show by default. Use the columns icon (the toggle next to the search box) to add **Time Off Approval**, **Notified Time Officers**, **Requires Allocation**, **Employee Request**, **Color** and **Company**. Use the search box to find a type. The funnel icon opens the filters, where you can build rules on fields such as **Name**, **Requires Allocation** and **Time Type**.

Each row has **View**, **Edit** and **Delete**. **Delete** archives the type.

<ImagePopup src="/images1/time-off/to_set_types_list.png" alt="Leave Types list with the All and Archived tabs, the Name and Allocation Approval columns and the seven standard leave types" />

## Create a leave type

This example creates a type for study leave.

1. Open `Time Off → Configuration → Leave Types`.
2. Click **New Leave Type**. A full page opens.
3. Fill in the three cards below.

### General Information

- **_Title:_** Required. The name people see, for example `Study Leave`.
- **_Approval:_** Who must approve a request. The default is **By Time Off Officer**.
- **_Requires Allocation:_** Choose **Yes** or **No Limit**. The default is **No Limit**. **Yes** adds allocation settings. They show on the **Edit** page of the saved type. **No Limit** has none. Aureus still checks approved days when a request is saved.

**Approval** has four options.

- **No Validation**
- **By Time Off Officer**
- **By Employee's Approver:** the approver named on the employee form.
- **By Employee's Approver and Time Off Officer**

::: info
The choice records your policy for the leave type. On `Time Off → Management → Time off`, the **Approve** button shows on every request that is not yet approved.
:::

<ImagePopup src="/images1/time-off/to_set_type_general.png" alt="General Information card of the Create Leave Type page with Title Study Leave and Requires Allocation set to No Limit" />

#### What Requires Allocation reveals

Save a type with **Yes**, then open its **Edit** page. Two more fields show.

- **_Employee Requests:_** **Not Allowed** (default) or **Extra Days Request Allowed**.
- **_Approval:_** A second **Approval** field, for allocations. Same four options. The default is **By Time Off Officer**. It shows in the list as **Allocation Approval**.

<ImagePopup src="/images1/time-off/to_set_type_yes.png" alt="Edit Leave Type page of Paid Time Off with Requires Allocation set to Yes, showing Employee Requests and the allocation Approval" />

::: tip
The first **Approval** is for requests. In this guide it is the request approval. The second is for allocations, shown in the list as **Allocation Approval**. They have the same label on the form.
:::

### Display Option

- **_Color:_** Required. Empty by default. Type a hex code such as `#2f72cc`, or click the swatch dot and pick a colour in the panel. It paints the balance card and the calendar bars.

### Configuration

- **_Notified Time Off Officers:_** Pick users from a searchable list. It is empty by default.
- **_Take Time Off In:_** The unit of the type. The default is **Day**. **Half Day** and **Hour** are also available.
- **_Public Holiday Included:_** Toggle, off by default. Public holidays do not change **Duration** in the request form.
- **_Allow to Attach Supporting Document:_** Toggle, off by default. Turn it on for types that need proof, such as a doctor's note.
- **_Show on Dashboard:_** Toggle, off by default. When on, the type gets a balance card on `Time Off → My Time → Dashboard`.
- **_Kind of Time Off:_** **Absence** (default) or **Worked Time**.

With **Requires Allocation** set to **Yes**, two more settings appear.

- **_Allow Negative Cap:_** Toggle, off by default. Use it with **Max Negative Cap**.
- **_Max Negative Cap:_** Required number, default `0`. It shows only when **Allow Negative Cap** is on.

<ImagePopup src="/images1/time-off/to_set_type_config.png" alt="Display Option and Configuration cards with Color #2f72cc, Notified Time Off Officers HR Admin, Take Time Off In Day, only Show on Dashboard switched on and Kind of Time Off Absence" />

4. Click **Create**. The type opens in the list. Use **Create & create another** to add several.

## The seeded leave types

| Type | Approval | Requires Allocation | Employee Requests | Allocation Approval | Public Holiday Included | Allow Negative Cap |
| --- | --- | --- | --- | --- | --- | --- |
| **Paid Time Off** | By Employee's Approver and Time Off Officer | Yes | Not Allowed | By Time Off Officer | On | Off |
| **Sick Time Off** | By Time Off Officer | No Limit | | | On | |
| **Compensatory Days** | By Employee's Approver | No Limit | | | Off | |
| **Unpaid** | By Employee's Approver and Time Off Officer | No Limit | | | Off | |
| **Parental Leaves** | By Employee's Approver and Time Off Officer | Yes | Extra Days Request Allowed | By Employee's Approver and Time Off Officer | Off | Off |
| **Training Time Off** | By Employee's Approver and Time Off Officer | Yes | Not Allowed | By Time Off Officer | Off | On |
| **Extra Hours** | By Employee's Approver | No Limit | | | Off | |

All seven have **Show on Dashboard** on and **Kind of Time Off** set to **Absence**.

## Two examples

**Paid Time Off** needs an allocation. Priya Sharma has no days, so her request is refused until you allocate some. After you allocate 12 days, she can book up to 12.

**Sick Time Off** has no day limit. Priya still needs an approved Sick Time Off allocation before Aureus accepts a request.

## Edit, view or delete

Click **Edit** to change any field, then **Save changes**. Click **View** for a read-only page. Click **Delete** to archive the type. Use **Restore** on the **Archived** tab to bring it back. A type that is in use cannot be deleted for good.

## See also

- [Setup](index.md)
- [Allocations](../allocations/index.md)
- [Request time off](../requests/request-time-off.md)
- [Add an employee](../../employees/employees/add-employee.md)
