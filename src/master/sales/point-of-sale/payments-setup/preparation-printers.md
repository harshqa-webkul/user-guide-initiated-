# Preparation printers

A preparation printer prints the items of an order at the place where they are made, such as the kitchen or the bar. The waiter sends the order and the cook gets a ticket. You define each printer once and then link it to a register.

> **In simple words:** A preparation printer is the kitchen ticket printer. It prints only the categories you give it.

## Overview

Go to `Point of Sale → Orders → Preparation Printers`.

<ImagePopup src="/images1/pos/preparation_printers_list.png" alt="Preparation Printers list with Kitchen Printer and Bar Printer rows" />

The list shows **Name**, **Printer Type**, **Proxy IP**, **Categories** and **Company**. Filter by **Printer Type**.

## Create a printer

1. Go to `Point of Sale → Orders → Preparation Printers`.
2. Click **New Printer**.
3. Fill in the **General** section.

   - **_Name\:_** Required. For example **Kitchen Printer**.
   - **_Printer Type\:_** Required. Choose **IoT Box** or **Epson ePOS**.
   - **_Proxy IP:_** The IP address of the printer or its box, such as 192.168.1.50.
   - **_Company\:_** Required. The company that owns the printer.
   - **_Printed Categories:_** Pick the PoS categories to print, for example **Starters**, **Pizza & Pasta** and **Main Course**.

   <ImagePopup src="/images1/pos/preparation_printer_form.png" alt="Preparation printer form with Name Kitchen Printer, Printer Type Epson ePOS, Proxy IP 192.168.1.50 and Printed Categories Starters, Main Course" />

4. Click **Create**. Click **Create & create another** to add the next.

Use **View** or **Edit** on a row to open it later.

## Use a printer on a register

1. Go to `Point of Sale → Configurations → Point of Sale` and open **Spice Route Kitchen & Bar**.
2. Open the **Preparation** tab.
3. In **Preparation Printers**, pick the printers. The hint says "Print orders at the kitchen, at the bar, etc."
4. Click **Save changes**.

<ImagePopup src="/images1/pos/register_preparation_tab.png" alt="Register Preparation tab with Preparation Printers set to Kitchen Printer and Bar Printer" />

Preparation printers are meant for restaurant registers. Switch on **Is a Bar/Restaurant** on the **Restaurant Mode** tab. That mode enables "table management, split bills and preparation tickets".

## Example

Spice Route Kitchen & Bar has two printers. **Kitchen Printer** prints **Starters**, **Pizza & Pasta** and **Main Course**. **Bar Printer** prints **Beverages**. A waiter orders one Butter Chicken and a drink. The cook sees only the chicken. The bartender sees only the drink.

::: tip
Add notes such as **No Dressing** to a line. The note goes to the kitchen with the item. See [Restaurant floors and notes](./restaurant-floors-and-notes.md).
:::

## See also

- [Categories and attributes](../products-pricing/categories-and-attributes.md)
- [Set up a register](../get-started/set-up-a-register.md)
- [Restaurant tables](../selling/restaurant-tables.md)
