# Plugins

A **plugin** is a module of Aureus ERP, such as Sales, Inventory or Accounting. The plugin manager lists every module and lets an administrator install or uninstall it. You install only the modules your business uses. Your administrator usually installs plugins once. You need this page when you add a new module.

> **In simple words:** Plugins are the building blocks of the ERP. You switch each block on by installing it.

## Overview

Open the **Plugins** menu in the main navigation to see the plugin list. It shows each plugin as a card.

<ImagePopup src="/images1/general-settings/plugins_list.png" alt="Plugins page with the four tabs and plugin cards" />

Each card shows:

- **_Name:_** The name of the plugin, for example **Sales**.
- **_Version:_** The version number.
- **Description:** A short line about what the plugin does.
- **_Installation Status:_** **Installed** or **Not Installed**.
- **_Dependencies:_** How many other plugins it needs.

Use the tabs to narrow the list:

- **Apps:** Plugins that have an app icon.
- **Extra:** Plugins without an icon.
- **Installed:** Plugins that are installed.
- **Not Installed:** Plugins that are not installed yet.

Each tab shows a count. You can search by name.

## View plugin details

1. On a card, open the row menu.
2. Click **View**.

<ImagePopup src="/images1/general-settings/plugins_view.png" alt="Plugin details page with Plugin Information and Dependencies sections" />

The page shows:

- **_Plugin Name:_** The name of the plugin.
- **_Version:_** The version number.
- **_Installation Status:_** A tick when installed.
- **_Author:_** Who made the plugin.
- **_License:_** The license of the plugin.
- **_Description:_** What the plugin does.
- **_Required Plugins:_** Plugins that must be installed first, with their status.
- **_Plugins That Depend On This:_** Plugins that need this one, with their status.

## Install a plugin

1. Open the **Plugins** menu.
2. Find the plugin on the **Not Installed** tab.
3. Open the row menu and click **Install**.
4. Read the message. It says the install runs migrations and seeders.
5. Click **Install Plugin**.

<!-- TODO-SCREENSHOT: /images1/general-settings/plugins_install_confirm.png | Install Plugin confirmation window -->

The app shows **Plugin Installed Successfully** when it finishes. The plugin is then marked **Installed** and active. If it fails, the app shows **Installation Failed** with the reason, and no change is kept.

::: info
The install stops after 5 minutes. Wait for the message before you leave the page.
:::

## Uninstall a plugin

1. Open the row menu of an installed plugin.
2. Click **Uninstall**.
3. Read the **Uninstall Confirmation** window.
4. Click **Uninstall Plugin**.

<ImagePopup src="/images1/general-settings/plugins_uninstall_confirm.png" alt="Uninstall Confirmation window with Data Impact table" />

The window shows:

- **Dependent Plugins:** Plugins that need this one, and whether they are installed.
- **Data Impact:** The database tables with data that will be deleted, and the number of records.

::: warning
Uninstalling cannot be undone. It permanently deletes the data of the plugin.
:::

### Dependent plugins

If an installed plugin depends on this one, the window shows **Action Required** and hides the **Uninstall Plugin** button. Uninstall the dependent plugins first. If you try anyway, the app shows **Cannot Uninstall Plugin** and lists them.

## Sync available plugins

Click **Sync Available Plugins** at the top of the page. Then click **Sync Plugins**. The app scans for new plugins and adds them to the list. A message shows how many new plugins it found.

<ImagePopup src="/images1/general-settings/plugins_sync.png" alt="Sync Plugins confirmation window" />

## Actions and statuses

- **Install:** Runs the plugin setup. The status changes to **Installed**.
- **Uninstall:** Removes the plugin data. The status changes to **Not Installed**.
- **View:** Opens the plugin details.
- **Sync Available Plugins:** Registers new plugins.

::: tip
The page has no separate enable or disable button. Installing makes a plugin active. Uninstalling makes it inactive.
:::

## See also

- [Custom fields](./customization/custom-fields.md)
- [Roles](./users/roles.md)
