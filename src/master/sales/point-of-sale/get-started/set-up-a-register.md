# Set up a register

A register is one till, such as the counter of a shop or the floor of a restaurant. Its form holds every rule for that till: which payment methods it takes, how prices show, what receipts say and where stock comes from. You build the register once, then open a session on it each day.

> **In simple words:** A register is a till with its own rules. Fill in its form once, then sell.

Before you start, create the items the register needs: [payment methods](../payments-setup/payment-methods.md), [coins and bills](../payments-setup/coins-and-bills.md) and, for a restaurant, [floors](../payments-setup/restaurant-floors-and-notes.md).

## The register list

Go to `Point of Sale → Configurations → Point of Sale`. The list shows each register with **Name**, **Code**, **Closing**, **Balance**, **Active** and **Company**. Tabs split the list into **Default**, **Active**, **Restaurant** and **Archived**. You can group rows by **Warehouse** or **Company**.

<ImagePopup src="/images1/pos/register_list.png" alt="Point of Sale register list showing Spice Route Kitchen & Bar (SRK) and TechNest Electronics (TNE)" />

## Create a register

1. Go to `Point of Sale → Configurations → Point of Sale`.
2. Click **New Point of Sale**.
3. Fill the **General** section.
   - **_Point of Sale:_** The register name, for example **TechNest Electronics**.
   - **_Short Code:_** A prefix of up to 16 characters, for example **TNE**. POS uses it for order and session numbers.

   <ImagePopup src="/images1/pos/register_create_general.png" alt="New Point of Sale form with Point of Sale set to TechNest Electronics and Short Code set to TNE" />

4. Click **Create**. The page reopens with the **Configurations** section and its tabs.
5. Fill each tab as described below, then click **Save changes**.

## The configuration tabs

The tabs run down the left side of the **Configurations** section.

<ImagePopup src="/images1/pos/register_edit_tabs.png" alt="Register edit page with the tab list: Restaurant Mode, Payment, PoS Interface, Product and PoS categories, Accounting, Pricing, Bills and Receipts, Preparation, Inventory" />

### Restaurant Mode

- **_Is a Bar/Restaurant:_** Turns on tables, split bills and preparation tickets. Keep it off for a shop.
- **_Allow Bill Splitting:_** Lets the cashier split the total or order lines.
- **_Early Receipt Printing:_** Lets the cashier print a receipt before payment.
- **_Eat in / Take out:_** Changes the tax rate by service type. A new field, **Alternative Fiscal Position**, then appears. Pick the position used for take out.
- **_Floors & Tables Map:_** The floors for this register, such as **Ground Floor** and **Rooftop Lounge**.

The last four options show only when **Is a Bar/Restaurant** is on.

<ImagePopup src="/images1/pos/register_tab_restaurant.png" alt="Restaurant Mode tab of Spice Route Kitchen & Bar with all toggles on and Ground Floor and Rooftop Lounge selected" />

### Payment

- **_Payment Methods:_** The methods the cashier can choose, such as Cash or Bank.
- **_Set Maximum Difference:_** Limits the gap allowed between expected and counted money at closing. Then enter **Maximum Difference**.
- **_Cash Rounding:_** Rounds cash payments to the smallest coin. Then pick a **Rounding Method**. Turn on **Only apply rounding on cash** to leave other methods exact.
- **_Tips:_** Lets the cashier accept tips. Then pick a **Tip Product**, which must be a service.

<ImagePopup src="/images1/pos/register_tab_payment.png" alt="Payment tab with Cash and Bank payment methods selected and Tips turned on with a Tip Product" />

### PoS Interface

- **_Customer Required:_** The cashier must pick a customer before payment.
- **_Show product images:_** Shows pictures on product tiles.
- **_Show category images:_** Shows pictures on category tiles.
- **_Products Loaded:_** How many products load when a session opens. The default is 500.

<ImagePopup src="/images1/pos/register_tab_interface.png" alt="PoS Interface tab with product images and category images on and Products Loaded set to 500" />

### Product & PoS categories

- **_Show margins & costs:_** Shows margin and cost on product information.
- **_Restrict Categories:_** Limits the register to chosen categories. Then pick them in **Available PoS Product Categories**.

<ImagePopup src="/images1/pos/register_tab_categories.png" alt="Product and PoS categories tab with Restrict Categories on and Accessories and Audio selected" />

### Accounting

- **_Orders Journal:_** The journal for the session closing entry.
- **_Invoices Journal:_** The sales journal for invoices made from POS orders.
- **_Closing Entry by product:_** Lists sales by product in the closing entry.
- **_Flexible Taxes:_** Lets orders use different [fiscal positions](../../../finance/taxes/fiscal-positions.md). Then pick a **Default Fiscal Position** and the allowed **Fiscal Positions**.
- **_Intermediary Account:_** Receivable account used between payment and closing. Leave empty to use the default from [POS settings](pos-settings.md).
- **_Cash In/Out Account:_** Account for cash moved in or out of the drawer.
- **_Balancing Account:_** Account for a cash difference at closing.
- **_Cost of Goods Sold:_** Posts the cost of sold items when you close. Then pick a **Cost of Goods Sold Journal** and a **Stock Output Account**.

<ImagePopup src="/images1/pos/register_tab_accounting.png" alt="Accounting tab with Orders Journal, Invoices Journal and the cash in and out account filled in" />

### Pricing

- **_Product Prices:_** Choose **Tax Excluded** or **Tax Included**. This sets how prices show on the terminal and receipts.
- **_Price Control:_** Only managers can change a price.
- **_Flexible Pricelists:_** Allows several price lists. Pick the **Available Pricelists**.
- **_Default Pricelist:_** The list applied to every order. Cashiers can switch lists only when flexible pricelists are on.
- **_Line Discounts:_** Cashiers can give a discount on one line.
- **_Global Discounts:_** Adds a button for a whole-order discount. Then pick a **Discount Product** (a service) and the default **Discount %**.

<ImagePopup src="/images1/pos/register_tab_pricing.png" alt="Pricing tab with Product Prices set to Tax Included, Line Discounts on and Global Discounts on at 10 percent" />

### Bills & Receipts

- **_Receipt Printing:_** Shows a **Print** button on the receipt screen.
- **_Automatic Receipt Printing:_** Prints the receipt as soon as payment is registered.
- **_Receipt Header:_** Text at the top of the receipt, for example your shop address.
- **_Receipt Footer:_** Text at the bottom, for example "Thank you for shopping at TechNest".
- **_Coins/Bills:_** The denominations offered when counting cash at opening and closing.

<ImagePopup src="/images1/pos/register_tab_receipts.png" alt="Bills and Receipts tab with receipt printing on, header and footer text, and coin and bill denominations selected" />

### Preparation

- **_Preparation Printers:_** The printers that receive kitchen or bar tickets. See [Preparation printers](../payments-setup/preparation-printers.md).

<ImagePopup src="/images1/pos/register_tab_preparation.png" alt="Preparation tab with a Kitchen printer selected" />

### Inventory

- **_Warehouse:_** The warehouse stock comes from. Required.
- **_Operation Type:_** The outgoing operation used to record product pickings.
- **_Return Operation Type:_** The incoming operation used for returns.
- **_Allow Ship Later:_** Sell now and deliver later. Then choose a **Specific Route** and a **Shipping Policy**: **As soon as possible** or **When all products are ready**.

<ImagePopup src="/images1/pos/register_tab_inventory.png" alt="Inventory tab with Warehouse, Operation Type and Return Operation Type filled in" />

## Two worked examples

**TechNest Electronics (retail).** Leave **Is a Bar/Restaurant** off. Pick Cash and Bank. Turn on **Customer Required** and **Line Discounts**. Set **Product Prices** to **Tax Included** and choose the main warehouse.

**Spice Route Kitchen & Bar (restaurant).** Turn on **Is a Bar/Restaurant**, **Allow Bill Splitting** and **Early Receipt Printing**. Pick **Ground Floor** and **Rooftop Lounge**. Add a kitchen printer in **Preparation**.

## Actions and statuses

- **Open Terminal:** In the page header. It opens the cashier terminal for this register.
- **Save changes:** Saves the form.
- **Delete:** Archives the register. A register with sessions or orders cannot be deleted permanently, so archive it.

::: warning
While a session is open, these fields are locked: **Is a Bar/Restaurant**, **Payment Methods**, **Restrict Categories**, **Available PoS Product Categories** and **Global Discounts**. Close the session to change them.
:::

::: tip
Before the first session, POS checks the register. It needs a receivable account, payment methods, a cash journal and tax accounts. A missing item stops the session from opening.
:::

## See also

- [POS settings](pos-settings.md)
- [Open a register](../sessions/open-register.md)
- [Payment methods](../payments-setup/payment-methods.md)
