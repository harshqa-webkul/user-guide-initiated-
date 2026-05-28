# Equipment

In the **Maintenance** module, an **Equipment** is any physical asset your company owns and needs to keep in good working condition — for example a *Laptop*, *Printer*, *CNC Machine*, *Forklift*, or *Air Conditioner*.
Each equipment record stores its identity (model, serial number), who owns it, who looks after it, when it was purchased, and how often it is expected to fail.

**Use Case:**
Create an equipment record for every machine, tool, vehicle, or device you want to track. Once an equipment exists in the system, you can raise [Maintenance Requests](../operations/maintenance-requests.md) against it, assign a technician, and monitor how often it breaks down.

> **In simple words:** Equipment is the *thing you take care of*. Before you can log a repair or schedule a check-up, the item must exist here.

## Steps to Create a New Equipment

1. Navigate to **`Maintenance → Equipment`** as shown below:

   <ImagePopup src="/images1/maintenance/equipment_navigation.png" alt="Equipment Navigation" />

2. Fill in the following details:

   #### General Information

   - **_Name:_** The name of the equipment (e.g. `Laptop - Dell Latitude 5420`). This is shown everywhere the equipment is referenced.
   - **_Description:_** A free-text note describing the equipment, its purpose, or any extra information that helps identify it.

   <ImagePopup src="/images1/maintenance/equipment_general_section.png" alt="Equipment General Section" />

   #### Product Information

   - **_Vendor:_** The supplier or vendor from whom the equipment was purchased.
   - **_Vendor Reference:_** The reference number or code given by the vendor (e.g. invoice number, vendor SKU).
   - **_Model:_** Model name or number of the equipment (e.g. `Latitude 5420`).
   - **_Serial Number:_** Unique serial number printed on the equipment — useful for warranty claims and traceability.
   - **_Effective Date:_** The date the equipment was put into use. This is the starting point the system uses to calculate the **Mean Time Between Failures (MTBF)**.
   - **_Cost:_** The purchase or acquisition cost of the equipment.
   - **_Warranty Expiration Date:_** The date when the vendor warranty ends. Useful for planning replacements or claiming repairs under warranty.

   <ImagePopup src="/images1/maintenance/equipment_product_information.png" alt="Equipment Product Information" />

   #### Settings

   - **_Equipment Category:_** Choose a [Category](../configurations/categories.md) (e.g. *Computers*, *Vehicles*, *Tools*) to group similar equipment together. Selecting a category auto-fills the default technician for that category.
   - **_Maintenance Team:_** The [Team](../configurations/teams.md) responsible for taking care of this equipment.
   - **_Company:_** The company that owns this equipment (useful in multi-company setups).
   - **_Technician:_** The person primarily responsible for maintaining this equipment. Defaults to the technician set on the chosen category.
   - **_Owner:_** The user who owns or uses this equipment day-to-day (e.g. the employee a laptop is assigned to).
   - **_Used in Location:_** Free-text field describing where the equipment is physically located (e.g. *Floor 2, Cabin 12*, *Warehouse A*).

   <ImagePopup src="/images1/maintenance/equipment_settings_section.png" alt="Equipment Settings Section" />

   #### Maintenance

   - **_Expected Mean Time Between Failure:_** The number of days you expect the equipment to run between two breakdowns. Helps you plan preventive maintenance before the next failure is due.

   <ImagePopup src="/images1/maintenance/equipment_maintenance_section.png" alt="Equipment Maintenance Section" />

3. **Action Buttons:**

   - **Create** – Save and open the equipment record.
   - **Create & Create Another** – Save and immediately open another blank form.
   - **Cancel** – Discard the entry and return to the list view.

## Equipment View Page

After creation, you are redirected to the **Equipment View Page**, where you can review every detail.

<ImagePopup src="/images1/maintenance/equipment_view_page.png" alt="Equipment View Page" />

On this page you can see:

- **General Information** — name and description.
- **Product Information** — vendor, model, serial number, cost, dates.
- **Settings** — category, team, technician, owner, location.
- **Maintenance** — expected MTBF, total maintenance count, currently open maintenance count, assigned date, and scrap date.

You can also:

- **Edit:** Modify any saved field.
- **Delete / Archive:** Remove or archive the equipment. Archived equipment stays in the database but no longer appears in selection lists.

## List View — Filters, Groups & Actions

The **Equipment** list view shows every equipment record with the following columns: **Equipment Name**, **Owner**, **Serial Number**, **Technician**, **Equipment Category**, and **Company**.

You can:

- **Filter by:** Equipment Category, Maintenance Team, or Technician.
- **Group by:** Technician, Equipment Category, Owner, or Vendor.
- **Search by:** Name or Serial Number.
- **Bulk Actions:** Archive, restore, or permanently delete selected equipment.

<ImagePopup src="/images1/maintenance/equipment_list_view.png" alt="Equipment List View" />

### Summary

The **Equipment** section is the foundation of the Maintenance module. By keeping every asset listed here with the right category, team, and technician, you can:

- Raise [Maintenance Requests](../operations/maintenance-requests.md) for any breakdown or check-up.
- Track how many times each equipment has been repaired.
- Plan **preventive maintenance** using the expected MTBF.
- Get warranty alerts before the warranty expires.

> **Next step:** Once your equipment is added, set up the supporting [Categories](../configurations/categories.md), [Teams](../configurations/teams.md), and [Stages](../configurations/stages.md), and then start logging [Maintenance Requests](../operations/maintenance-requests.md).
