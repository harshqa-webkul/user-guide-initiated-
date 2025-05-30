# Settings – Roles & Permissions

Before accessing any functionality in the **Invoices Plugin**, permissions must be granted to user roles. This ensures that only authorized users can view or manage sensitive invoice-related data.

## 🔐 Managing Roles & Permissions

Navigate to **Settings >> Roles >> [Select Role] >>edit** as shown in the below image.

![Settings](../../../images/roles.png)

You will see a list of **resources** and **pages** with checkboxes that define what actions users assigned to that role can perform.

### Resources Permissions

Each **resource** in the Invoices plugin (such as invoices, payments, taxes, etc.) includes a detailed permission structure.

![Settings](../../../images/permissions.png)

### Available Actions:

- **View**
- **View Any**
- **Create**
- **Update**
- **Restore**
- **Restore Any**
- **Replicate**
- **Reorder**
- **Delete**
- **Delete Any**
- **Force Delete**
- **Force Delete Any**

![Settings](../../../images/roles_actions.png)

### Resources Covered:

- **Bank Account**
- **Incoterms**
- **Payment Terms**
- **Attribute**
- **Category**
- **Tax Groups**
- **Taxes**
- **Credit Note**
- **Invoice**
- **Customers**
- **Payment**
- **Products**
- **Bill**
- **Payments**
- **Product**
- **Refund**
- **Vendors**

> To enable full functionality of the **Invoices Plugin**, ensure all relevant checkboxes for each resource are enabled.
> ![Settings](../../../images/resources_covered.png)

## Page Access Control

In addition to resources, specific **pages** can be granted access to individual roles.

### Pages Include:

- **Configuration**
- **Customers**
- **Manage Product**
- **Vendors**

![Settings](../../../images/page.png)

Enabling these will allow users to navigate and interact with the respective UI sections of the plugin.

## Select All Shortcut

If you wish to quickly grant full access:

- Use the **Select All** toggle located at the top of the page.
- This will automatically enable all checkboxes under both **Resources** and **Pages**.

![Settings](../../../images/select_all.png)

> Useful for admin roles or when configuring a role with full access to the invoices module.

## Summary

Role and permission configuration is the **first and essential step** to begin using the Invoices plugin. It ensures secure, role-based access and management of financial documents and related resources.

Make sure to review and assign permissions carefully based on your organization's policies and user responsibilities.
