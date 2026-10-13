# Workflows

A manufacturing order moves through a fixed lifecycle. Each state tells you what has happened and which buttons you can use next. This page is the map. The pages linked below explain each step in depth.

> **In simple words:** An order starts as a draft, gets confirmed, is worked on, and ends as done.

Open `Manufacturing → Operations → Manufacturing Orders`.

## The lifecycle

```text
Draft ─► Confirmed ─► In Progress ─► To Close ─► Done
  │          │              │            │
  └──────────┴──────────────┴────────────┴──► Cancelled
```

The order header shows a stepper with **Draft**, **Confirmed** and **Done**. **In Progress**, **To Close** and **Cancelled** appear only while they are the current state.

<ImagePopup src="/images1/manufacturing/mo_state_stepper.png" alt="MO/2 view header showing the state stepper Draft, Confirmed, Done with Confirmed highlighted, and the header buttons" />

## States

| State | Meaning |
|---|---|
| **Draft** | The order is saved. Nothing is reserved yet. |
| **Confirmed** | The order is accepted and its transfers exist. |
| **In Progress** | Work has started. |
| **To Close** | Work is finished and the order waits to be closed. |
| **Done** | Components are consumed and the finished product exists. |
| **Cancelled** | The order is stopped. |

## Readiness

The **MO Readiness** column tells you if a confirmed order can start.

| Value | Meaning |
|---|---|
| **Waiting** | Components are not all available. |
| **Ready** | The order can start. |
| **Waiting another operation** | A step must finish before this one can start. |

## Buttons by state

| State | Buttons |
|---|---|
| **Draft** | **Confirm** |
| **Confirmed** | **Produce All**, **Plan**, **Start**, **Cancel**, **Print** |
| **Confirmed and planned** | **Unplan** is added |
| **In Progress** | **Produce All** or **Produce**, **Cancel**, **Print** |
| **To Close** | **Produce All** or **Produce**, **Cancel**, **Print** |
| **Done** | No action buttons |
| **Cancelled** | No action buttons |

**Produce** replaces **Produce All** when **Quantity Producing** differs from the order quantity.

## Where to go next

| Step | Page |
|---|---|
| Create, confirm, start, cancel and print | [Manufacturing orders](manufacturing-orders.md) |
| Schedule work orders on work centers | [Plan and schedule](plan-and-schedule.md) |
| Run, pause and finish each step | [Work orders](work-orders.md) |
| Consume components and make the product | [Produce and consume](produce-and-consume.md) |
| Track lots and serial numbers | [Lots and serial numbers](lots-and-serial-numbers.md) |

::: info
The warehouse step setting decides which transfers appear. See [One-step](../basic-setup/one-step-manufacturing.md), [two-step](../basic-setup/two-step-manufacturing.md) and [three-step](../basic-setup/three-step-manufacturing.md) manufacturing.
:::

## See also

- [Manufacturing order costs](../basic-setup/manufacturing-order-costs.md)
- [Basic setup](../basic-setup/index.md)
- [Manufacturing settings](../get-started/manufacturing-settings.md)
