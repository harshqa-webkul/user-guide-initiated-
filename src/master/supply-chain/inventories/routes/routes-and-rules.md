# Routes and rules

Routes and rules are the engine behind every flow in Aureus. A rule describes one step: where goods come from, where they go and which document is created. A route groups several rules under one name. Most users never edit them, but understanding them helps you fix unusual flows.

> **In simple words:** A rule is one step. A route is a named list of steps.

Open them from `Inventory → Configurations → Warehouse Management → Routes` and `→ Rules`.

::: warning Gate
These menus appear only when `Inventory → Settings → Manage Warehouses → Multi Steps Routes` is on. Locations must be on too.
:::

::: warning Careful with standard rules
Aureus creates standard routes and rules for each warehouse. Do not edit or delete them. Change the step options on the warehouse form instead. Test any new rule on a sample order first.
:::

## Routes

The **Routes** list shows **Route** and **Company**, with tabs **All** and **Archived**. There are 4 active routes, and the **Archived** tab holds 3. Click **New Route**.

<ImagePopup src="/images1/inventory/route_list.png" alt="Routes list on the All tab with 4 active routes: Receive in 3 steps, Deliver in 3 steps, Pick components and manufacture, and Cross-Dock" />

### General

- **_Route:_** required. A clear name, for example Two Step Reception.
- **_Company:_** defaults to your company.

### Applicable On

Choose where people can pick this route. The toggles are **Product Categories**, **Products** and **Packaging**, with **Warehouses** in a second column.

- **_Product Categories:_** the route can be set on a product category.
- **_Products:_** the route can be set on a product.
- **_Packaging:_** the route can be set on a packaging. The toggle always shows.
- **_Warehouses:_** the route becomes a default for a warehouse. A **Warehouses** list then appears. This toggle sits in the second column.

<ImagePopup src="/images1/inventory/route_form.png" alt="New Route form with the name Two Step Reception and the Applicable On toggles" />

The route page also has a **Rules** table. Click **Add Rule** to attach a step.

## Rules

The **Rules** list shows **Action**, **Source Location**, **Destination Location**, **Route** and **Name**. Click **New Rule**.

<ImagePopup src="/images1/inventory/route_rule_form.png" alt="New Rule form with action Pull From, operation type Pick and source WH/Stock" />

### General

- **_Name:_** required.
- **_Action:_** required. See the table below.
- **_Operation Type:_** required. The document the step creates. Options are named with the warehouse first, for example **My Company: Pick**.
- **_Source Location_ and _Destination Location:_** required. Where goods leave and arrive.
- **_Supply Method:_** how a pull gets goods. Hidden for Push To.
- **_Automatic Move:_** how a push behaves. Hidden for Pull From.

A live sentence beside **Action** explains the rule in plain words, for example "When products are required in X, Y is generated from Z...". These labels sit on the left of the form. The **Settings** card sits on the right.

### Actions

| Action | Meaning |
| --- | --- |
| **Pull From** | Goods are requested from the source when needed |
| **Push To** | Goods that reach the source are sent on to the destination |
| **Pull & Push** | Both behaviours |
| **Buy** | A request for quotation is created for the need |
| **Manufacture** | A manufacturing order is created for the need |

### Supply Method

- **Take From Stock:** use goods already in the source location.
- **Trigger Another Rule:** ignore stock and find another rule to bring goods in.
- **Take From Stock, if unavailable, Trigger Another Rule:** use stock first, then fall back.

### Automatic Move

- **Manual Operation:** creates a separate move after the current one.
- **Automatic No Step Added:** changes the location of the original move. No extra document.

### Settings

The **Settings** card on the right holds these fields.

- **_Partner Address:_** delivery address, optional. Shown for pulls.
- **_Lead Time (Days):_** used to calculate the expected date of the transfer.
- **Applicability:** a box inside the card with two fields.
  - **_Route_:** required. The route this rule belongs to.
  - **_Company:_** defaults to your company.

## Two worked rules

**Push rule: Input → Quality Control.** Action **Push To**, operation type **Quality Control**, source `WH/Input`, destination `WH/Quality Control`. When a receipt lands in `WH/Input`, a WH/QC document is created.

**Pull rule: Stock → Customers.** Action **Pull From**, operation type **Pick**, supply method **Take From Stock**. When a customer order asks for goods, a WH/PICK document is created.

## Apply a route

1. Open a product, a product category or a packaging.
2. Find the **Routes** field in its Inventory section.
3. Pick the route and save.

<ImagePopup src="/images1/inventory/route_on_product.png" alt="Product Inventory section with the Routes field showing Cross-Dock" />

The route only appears in the list if its **Applicable On** toggle matches. See [Product categories](../products/product-categories.md) and [Configure a product](../products/configure-product.md).

## Warehouse Routes page

The warehouse record has a **Routes** tab. It opens a page titled **Manage My Company Routes**. The page lists 3 routes: **Pick components, manufacture and then store products (3 steps)**, **Deliver in 3 steps** and **Receive in 3 steps**. **Cross-Dock** is not on it. The page has an **Add Route** button.

## See also

- [Routes overview](index.md)
- [Putaway rules](putaway-rules.md)
- [Warehouses](../warehouses/warehouses.md)
- [Operation types](../warehouses/operation-types.md)
