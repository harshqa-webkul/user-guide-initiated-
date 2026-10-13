# Tracking stock

Tracking answers the question "which exact goods are these?". Without tracking, Aureus knows you hold 100 tablets. With tracking, it knows which batch they came from or which box they sit in. This group covers lots, serial numbers and packages.

> **In simple words:** A lot labels a batch, a serial number labels one item, and a package is a physical box.

## Pick the right tool

| Tool | What it labels | Good for |
| --- | --- | --- |
| Lot | A batch of identical units | Medicine, food, chemicals |
| Serial number | One single unit | Laptops, machines, devices |
| Package | A box, pallet or parcel that holds products | Shipping and storing |

```text
Product  →  Lot MC-VITC-001 (250 tablets)
Product  →  Serial SN-00045 (1 unit)
Box PACK007  →  holds several products
```

## Settings

Each tool has its own switch in `Inventory → Settings`.

- **Lots & Serial Numbers** on **Manage Traceability**.
- **Packages** on **Manage Operations**.

See [Inventory settings](../get-started/inventory-settings.md).

## Pages in this group

| Page | What you learn |
| --- | --- |
| [Lots and serial numbers](lots-and-serial-numbers.md) | Turn on tracking, assign numbers on receipts and deliveries |
| [Packages](packages.md) | Package types, package records, destination package |

::: tip
Decide on tracking before stock arrives. Adding it later to a product that already has stock needs a recount.
:::

## See also

- [Configure a product](../products/configure-product.md)
- [Receipts](../operations/receipts.md)
- [Deliveries](../operations/deliveries.md)
