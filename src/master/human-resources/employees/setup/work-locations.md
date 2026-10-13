# Work locations

A work location tells everyone where a person usually works: at an office, at home, or somewhere else. You set it once per place and pick it on each employee. This helps you see who is on site and who works remotely.

> **In simple words:** A work location is the place an employee works from.

Open `Employees → Configurations → Work Locations`.

::: info Prerequisite
None. The sample data has **Home**, **Building 1, Second Floor** and **Other**.
:::

## Overview

Four tabs filter the list by kind: **All**, **Office**, **Home** and **Other**. Columns are **Name**, **Location Type**, **Status** and **Company**. You can filter by **Status**.

<ImagePopup src="/images1/employees/set_worklocation_list.png" alt="Work Locations list with tabs All, Office, Home and Other and the columns Name, Location Type, Status and Company" />

## Create a work location

This example adds a second office.

1. Open `Employees → Configurations → Work Locations`.
2. Click **New Work Location**. A window opens.
3. Fill in the form.

- **_Name:_** Required. Type `Warehouse Block A`.
- **_Location Type:_** Required. Click **Office**. The other choices are **Home** and **Other**. Nothing is chosen at first.
- **_Location Number:_** Optional. A room or building number, such as `B-12`.
- **_Company:_** Required. Fills with **My Company**.
- **_Status:_** Required toggle. Default is off. Turn it on.

<ImagePopup src="/images1/employees/set_worklocation_form.png" alt="Create Work Locations window with Warehouse Block A, Location Type Office, number B-12, My Company and Status on" />

4. Click **Create**.

::: warning
**Status** is off by default. Turn it on, or the location stays inactive.
:::

## Where work locations are used

- On the employee form, `Work Information → Location → Work Location` offers these records. The plus button next to it creates one on the spot.
- Changing the employee's company clears the work location, so you pick again.
- The tab on this list groups places by type, which helps you review office and home setups.

## Edit or delete

Click **Edit** on a row to change it. Click **Delete** to remove it.

## See also

- [Add an employee](../employees/add-employee.md)
- [First steps](../get-started/first-steps.md)
- [Setup overview](index.md)
