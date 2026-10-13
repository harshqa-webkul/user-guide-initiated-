# Custom fields

A **custom field** is an extra field that you add to a form, such as a quotation, an employee or a product. Use it to store information that the standard form does not ask for. You create the field once, and it then appears on the chosen form, in its list and on its view page.

> **In simple words:** A custom field adds your own box to an existing form, so you can keep the extra details your business needs.

## Overview

Open `Settings → Custom Fields` to see all custom fields.

<!-- TODO-SCREENSHOT: /images1/general-settings/custom_fields_list.png | Custom Fields list with the All and Archived tabs and the Create Field button -->

The list shows these columns:

- **_Code:_** The technical name of the field.
- **_Name:_** The label users see.
- **_Type:_** The kind of input, for example **Text Input** or **Select**.
- **_Resource:_** The form the field belongs to. The class name is shown below it.
- **_Created At:_** When you created the field. The newest field is first.

Use the **All** and **Archived** tabs to switch between active and archived fields. Each tab shows a count. You can search by **Code** or **Name**. You can also filter by **Type** and **Resource**.

## Create a custom field

1. Go to `Settings → Custom Fields`.
2. Click **Create Field**.
3. Fill in the form. The left side holds the field details. The right side holds the type and the target form.
4. Click **Create**.

<ImagePopup src="/images1/general-settings/custom_fields_create.png" alt="Create Custom Fields form with name, code, type, sort order and resource" />

### General

- **_Name:_** The label of the field. This is required.
- **_code:_** The technical name of the field. This is required and must be unique.

The code must start with a letter or an underscore. It can contain only letters, numbers and underscores. The code also cannot match an existing column of the target form.

### Settings

- **_Type:_** Choose the kind of input. This is required.
- **_Input Type:_** Shown only for **Text Input**. Choose **Text**, **Email**, **Numeric**, **Integer**, **Password**, **Telephone**, **URL** or **Color**.
- **_Is Multiselect:_** Shown only for **Select**. Turn it on to let users pick more than one value.
- **_Sort Order:_** A whole number. It sets the position of the field among the other custom fields.

<ImagePopup src="/images1/general-settings/custom_fields_settings.png" alt="Settings section with Type, Input Type and Sort Order" />

::: warning
After you save, you cannot change **Code**, **Type**, **Input Type**, **Plugin** or **Resource**. Choose them with care.
:::

### Resource

Choose where the field appears.

- **_Plugin:_** Choose the app that owns the form. This is required.
- **_Resource:_** Choose the form. It appears after you choose a plugin. This is required.

Only forms that support custom fields are listed. Forms of plugins that are not installed or not active are left out.

<ImagePopup src="/images1/general-settings/custom_fields_resource.png" alt="Resource section with Plugin and Resource selected" />

### Options

This section appears only for the types **Select**, **Checkbox List** and **Radio**. Click **Add Option** for each choice, and type its name.

<ImagePopup src="/images1/general-settings/custom_fields_options.png" alt="Options section with several options added" />

### Form Settings

Use this section to control how the field behaves on the form. It has two parts.

**Validations** set rules for the value. Click **Add Validation**, then fill in:

- **_Validation:_** Choose a rule, for example **Required** or **Max Length**. The list depends on the field type.
- **_Field:_** Shown only for rules that compare with another field.
- **_Value:_** Shown only for rules that need a value, for example a number or a text.

**Additional Settings** change the look and help text. Click **Add Setting**, then fill in:

- **_Setting:_** Choose an option, for example **Default Value**, **Placeholder**, **Helper Text**, **Hint** or **Read Only**. The list depends on the field type.
- **_Value:_** Enter the value for that setting. Some settings show a **Color** list instead.

<ImagePopup src="/images1/general-settings/custom_fields_form_settings.png" alt="Form Settings section with one validation and one additional setting" />

### Table Settings

Use this section to show the field as a column in the list of the target form.

1. Turn on **Use in Table**.
2. Click **Add Setting**, if you want to adjust the column.
3. Choose a **Setting**, then set its value. Options include **Color**, **Alignment**, **Font Weight**, **Icon Position** and **Size**.

<ImagePopup src="/images1/general-settings/custom_fields_table_settings.png" alt="Table Settings section with Use in Table turned on" />

### Infolist Settings

Use this section to style the field on the read-only view page of a record. Click **Add Setting**, choose a **Setting**, then set its value. Options include **Color**, **Font Weight**, **Icon Position** and **Size**.

<ImagePopup src="/images1/general-settings/custom_fields_infolist_settings.png" alt="Infolist Settings section with one setting added" />

## Field types

| Type | Use it for |
| --- | --- |
| **Text Input** | A single line of text, an email, a number, a phone or a URL |
| **Textarea** | A longer text |
| **Select** | A drop-down list with one or more values |
| **Checkbox** | A yes or no tick box |
| **Radio** | One choice from a short list |
| **Toggle** | A yes or no switch |
| **Checkbox List** | Several choices from a list |
| **Date Time Picker** | A date, or a date with time |
| **Rich Text Editor** | Formatted text |
| **Markdown Editor** | Text written in Markdown |
| **Color Picker** | A color |

## Where custom fields appear

After you save a field, it shows up in these places on the target form:

- **Form:** The field appears at the end of the create and edit form.
- **List:** The field appears as a column, only when **Use in Table** is on. It is also available in the list filters.
- **View page:** The field appears on the read-only page of the record, styled by the **Infolist Settings**.

::: info
Saving a new field adds a column to the database table of the target form. So the field is ready to use at once.
:::

## Edit, archive and delete a field

Click the three dots at the end of a row to open the menu.

- **_Edit:_** Change the name, options, settings and sort order. You cannot change the locked fields.
- **_Delete:_** Move the field to the **Archived** tab. Records keep their values.
- **_Restore:_** Bring an archived field back.
- **_Force delete:_** Remove the field for good. This also removes its column from the database table.

You can also select several rows and use the bulk actions for restore, delete and force delete.

<!-- TODO-SCREENSHOT: /images1/general-settings/custom_fields_row_menu.png | Row menu on the Custom Fields list showing Edit, Restore, Delete and Force delete -->

::: warning
Force delete cannot be undone. The values stored in that field are lost.
:::

## See also

- [Sequences](./sequences.md)
- [Plugins](../plugins.md)
- [Roles](../users/roles.md)
