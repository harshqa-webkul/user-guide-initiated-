# Payments setup

This group holds the setup that sits around payments and the till hardware. You define how customers can pay, which coins and notes cashiers count, where kitchen tickets print, and how the dining room is laid out.

> **In simple words:** Set up the ways to pay, the money to count and the places to print once. Every register can then reuse them.

## What you set up here

- [Payment methods](./payment-methods.md): Cash, bank and other ways to pay, linked to a journal.
- [Coins and bills](./coins-and-bills.md): The denominations cashiers count when they open and close a session.
- [Preparation printers](./preparation-printers.md): Printers for the kitchen or the bar.
- [Restaurant floors and notes](./restaurant-floors-and-notes.md): Floors, tables and quick notes for restaurant registers.

## How it ties to a register

A register is the till configuration. You link these items to it from `Point of Sale → Configurations → Point of Sale`.

| Item | Register tab | Field |
| --- | --- | --- |
| Payment methods | **Payment** | **Payment Methods** |
| Coins and bills | **Bills & Receipts** | **Coins/Bills** |
| Preparation printers | **Preparation** | **Preparation Printers** |
| Floors | **Restaurant Mode** | **Floors & Tables Map** |

::: info
Some fields lock while a session is open. Close the session before you change them.
:::

## Where to find each page

- Payment methods, Coins/Bills, Floors and Note Models: `Point of Sale → Configurations`.
- Preparation Printers: `Point of Sale → Orders → Preparation Printers`.

## See also

- [Set up a register](../get-started/set-up-a-register.md)
- [Orders and payments](../orders-payments/index.md)
