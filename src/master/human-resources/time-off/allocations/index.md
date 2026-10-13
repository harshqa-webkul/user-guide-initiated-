# Time off allocations

An allocation is a balance of days that you grant to an employee for one leave type. Some leave types, such as **Paid Time Off**, only work when the employee has days to spend. The allocation is that stock of days. Without it, the employee cannot request this type of leave.

> **In simple words:** An allocation says "this person may take this many days of this leave type". Requests spend the days.

Open `Time Off → My Time → My Allocation` to see your own allocations. Open `Time Off → Management → Allocation` to manage everyone's.

::: info Before you start
Check the leave type in [Time off types](../setup/time-off-types.md). The allocation only matters when **Requires Allocation** is set to **Yes**.
:::

## How the balance works

The balance is the days allocated, minus the days already used by requests. Only **Approved** allocations count. Requests that are not **Refused** use days. This includes requests that still wait for approval.

Example from this guide: Sarah Mitchell has **Paid Time Off 2026**, an allocation of **20** days. She requests 3 days and a manager approves them.

- Allocated: 20 days.
- Taken: 3 days.
- Balance: 17 days.

The balance shows on the cards in [My Time](../requests/my-time.md). Each card shows the days left and a line such as **Valid until 2026-12-31**.

## When you do not need an allocation

Open a leave type and look at **Requires Allocation**.

- **Yes**: employees need an approved allocation first. Without one, Aureus refuses the request.
- **No Limit**: employees can request the leave without any allocation. Sick leave is an example.

## The two ways to create an allocation

- An employee asks for days from `Time Off → My Time → My Allocation`. See [My allocation](my-allocation.md).
- A manager creates the allocation for an employee in `Time Off → Management → Allocation`. See [Manage allocations](manage-allocations.md).

## Lifecycle

An allocation moves through these statuses.

1. **To Approve**: the allocation exists but adds nothing to the balance yet.
2. **Approved**: the days count in the balance.
3. **Refused**: the allocation is rejected and adds nothing.

A refused allocation can go back to **To Approve** with **Mark as Ready to Confirm**. See [Manage allocations](manage-allocations.md).

::: tip
Give each employee a yearly allocation at the start of the year. Use a clear name, for example **Paid Time Off 2026**.
:::

## See also

- [My allocation](my-allocation.md)
- [Manage allocations](manage-allocations.md)
- [Time off types](../setup/time-off-types.md)
- [Requests](../requests/index.md)
- [By Employees report](../reporting/by-employees.md)
