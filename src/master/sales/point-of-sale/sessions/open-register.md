# Open the register

Opening the register starts a new session and tells the system how much cash is in the drawer. You do this at the start of every shift or trading day. Until the register is open, you cannot sell.

> **In simple words:** Open the register, confirm the cash in the drawer, and start selling.

You can open a register from the back office **Dashboard** or from the terminal's **Registers** page. Both lead to the same **Opening Control** window.

## Before you start

The register must be active and set up with its journals, payment methods and accounts. If something is missing, Aureus shows a message when you try to open. See [Set up a register](../get-started/set-up-a-register.md).

## Open from the Dashboard

1. Go to `Point of Sale → Dashboard`.
2. Find the card of your register, for example **TechNest Electronics**.
3. Click **Open Register**. The terminal opens.

<ImagePopup src="/images1/pos/dashboard_register_cards.png" alt="Dashboard register cards for Spice Route Kitchen & Bar and TechNest Electronics, each with a Continue Selling button" />

A register that already has a live session shows **Continue Selling** instead. Click it to go back to the same session.

## Open from the terminal

1. Open the terminal at `/pos/registers`. This page lists every register.
2. Click **Open register** under the register you want. A register that is already open shows **Resume**.

<ImagePopup src="/images1/pos/terminal_registers.png" alt="Terminal Registers page with Spice Route Kitchen & Bar and TechNest Electronics, each showing its session status and a Resume button" />

Each card shows the register name, its short code and its status, such as **Closed** or **Open by ERP Admin**.

## The Opening Control window

After you open, the **Opening Control** window appears over the till.

- **_Opening cash:_** The cash you put in the drawer. The hint under the field shows the closing balance of the last session, so you can compare. Type the amount.
- **_Opening note:_** An optional message for the closing check, such as who prepared the drawer.

3. Click the card icon next to **Opening cash** if you want to count by coin and note.

<ImagePopup src="/images1/pos/opening_control_window.png" alt="Opening Control window with Previous session closing balance, Opening cash 1750, an opening note and the Open Register button" />

### Count coins and notes

The **Coins/Notes** window lists every denomination with a counter. Click **+** or type the number of each coin or note. The **Total** at the bottom updates as you count. Click **Confirm** and the total fills **Opening cash**.

<ImagePopup src="/images1/pos/coins_notes_counter.png" alt="Coins/Notes window with 5 notes of 200, 4 of 100, 5 of 50 and 5 of 20 and a total of 1,750" />

The denominations come from your list of coins and bills. See [Coins and bills](../payments-setup/coins-and-bills.md).

4. Click **Open Register**.

The till opens with an empty order and the session status becomes **In Progress**.

**Example:** TechNest counts 5 notes of 200, 4 of 100, 5 of 50 and 5 of 20. The total is 1,750. The cashier types the note "Float prepared by ERP Admin" and clicks **Open Register**.

## Actions and statuses

- **Open Register:** Confirms the opening cash and moves the session from **Opening Control** to **In Progress**.
- **Resume:** Returns to a session that is already in progress.
- **Discard session:** Removes a session that has no orders and no cash movements. Use it if you opened by mistake.

::: info
If a session is stuck in **Opening Control**, a manager can click **Open Session** on it in `Point of Sale → Orders → Sessions`. See [Register sessions](index.md).
:::

::: warning
Count the drawer honestly. The opening cash is the starting point for the expected balance at closing.
:::

## See also

- [Terminal tour](../selling/terminal-overview.md)
- [Cash in and out](cash-in-and-out.md)
- [Close a session](close-session.md)
