# Restaurant floors and notes

Restaurant registers show a floor plan at the till. A floor is a room, and each room holds tables. Note models are the quick notes a waiter taps to tell the kitchen what to do.

> **In simple words:** Floors are the rooms and tables of your restaurant. Note models are one tap messages to the kitchen.

## Floors

### Overview

Go to `Point of Sale → Configurations → Floors`.

<ImagePopup src="/images1/pos/floors_list.png" alt="Floors list with Ground Floor (8 tables) and Rooftop Lounge (5 tables) for Spice Route Kitchen & Bar" />

The tabs are **Default**, **Active** and **Archived**. Columns are **Name**, **Tables**, **Point of Sale** and **Background Colour**.

### Create a floor

1. Go to `Point of Sale → Configurations → Floors`.
2. Click **New Floor**.
3. Fill in the **General** section.

   - **_Name\*:_** For example **Rooftop Lounge**.
   - **_Point of Sale:_** The restaurant registers that use this floor.
   - **_Background Colour:_** The colour of the floor plan.
   - **_Background Image:_** An optional picture, such as a floor drawing.

   <ImagePopup src="/images1/pos/floor_form.png" alt="Floor form with Name Rooftop Lounge, Point of Sale Spice Route Kitchen & Bar and a background colour" />

4. Click **Create**.

### Add tables

Open a floor with **Edit**. Below the form you see a **Tables** list. Ground Floor holds eight tables, T1 to T8.

1. Click **New table**.
2. Fill in the window.

   - **_Table Number\*:_** For example **T4**.
   - **_Shape\*:_** **Square** or **Round**.
   - **_Seats\*:_** How many guests sit there.
   - **_Horizontal Position_** and **_Vertical Position_:** The distance in pixels from the left and top edge of the plan.
   - **_Width_** and **_Height_:** The size on the plan.
   - **_Colour:_** The table colour.

   <ImagePopup src="/images1/pos/floor_table_form.png" alt="New table window with Table Number T9, Shape Round, Seats 4 and size and position values" />

3. Click **Create**.

The tables list shows **Table Number**, **Shape**, **Seats**, **Width**, **Height** and **Colour**. Use **Edit** or **Delete** on a row.

### Use floors at the till

On the register, open the **Restaurant Mode** tab. Switch on **Is a Bar/Restaurant**. In **Floors & Tables Map**, pick the floors. The hint says "Design floors and assign orders to tables."

<ImagePopup src="/images1/pos/register_restaurant_tab.png" alt="Register Restaurant Mode tab with Is a Bar/Restaurant on and Floors & Tables Map set to Ground Floor and Rooftop Lounge" />

At the till, the Home screen shows one tab for each floor, with a zoom control, **Grid view**, **Edit plan** and **+ New order**. The waiter taps a table to start its order. See [Restaurant tables](../selling/restaurant-tables.md).

::: info
**Is a Bar/Restaurant** locks while a session is open.
:::

## Note models

Note models are the quick notes on the order screen. The waiter selects a line, taps **Note** and picks one.

### Overview

Go to `Point of Sale → Configurations → Note Models`.

<ImagePopup src="/images1/pos/note_models_list.png" alt="Note Models list with Wait, To Serve, Emergency and No Dressing" />

The list shows **Note** and **Colour**. Four notes exist: **Wait**, **To Serve**, **Emergency** and **No Dressing**.

### Create a note model

1. Go to `Point of Sale → Configurations → Note Models`.
2. Click **New Note Model**. A window opens.
3. Fill in the form.

   - **_Note\*:_** The text, such as **Less Spicy**.
   - **_Colour:_** The colour of the chip.

   <ImagePopup src="/images1/pos/note_model_form.png" alt="New note model window with Note Less Spicy and a colour chosen" />

4. Click **Create**.

At the till, the note window offers **Internal note** and **Kitchen note**, with these chips. See [Order notes and customers](../selling/order-notes-and-customers.md).

::: tip
Keep notes short. A cook reads them at a glance.
:::

## See also

- [Preparation printers](./preparation-printers.md)
- [Restaurant tables](../selling/restaurant-tables.md)
- [Set up a register](../get-started/set-up-a-register.md)
