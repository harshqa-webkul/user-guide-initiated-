# Publish and draft

Every page is either a draft or published. A draft is visible only to you in the admin. A published page is visible to everyone on your website. This lets you write and review without showing unfinished work.

> **In simple words:** Draft means hidden. Published means live. **Publish** and **Set as Draft** switch between the two.

Open `Website → Pages`.

## Draft versus published

| | Draft | Published |
| --- | --- | --- |
| **Is Published** column | Off | On |
| Visitor opens `/pages/{slug}` | Gets a "page not found" result (404) | Sees the page |
| Link in header or footer menu | Not shown | Shown if the switch is on |
| Edit button on the page | **Publish** | **Set as Draft** |

```text
Create → Draft → Publish → Published → Set as Draft → Draft
```

::: warning
A new page always starts as a draft. Creating it does not put it on the website.
:::

## Publish a page

Scenario: make the new **Our Team** page live.

1. Open `Website → Pages`.
2. Click **Edit** on the **Our Team** row.

<ImagePopup src="/images1/website/page_edit_draft.png" alt="Edit page for Our Team in draft state with the Publish button in the header" />

3. Click **Publish** in the top right. Aureus shows **Page published**. It also records the publish date.

<ImagePopup src="/images1/website/page_published_message.png" alt="Edit page right after clicking Publish with the Page published message visible" />

4. Go back to the list. **Is Published** is on for that row.

## Set a page back to draft

Use this to take a page off the site, for example while you rewrite it.

1. Click **Edit** on a published page.
2. Click **Set as Draft**. Aureus shows **Page set as draft**.

<ImagePopup src="/images1/website/page_set_draft.png" alt="Edit page for a published page with Set as Draft button and the Page set as draft message" />

The link leaves the menus and `/pages/{slug}` stops working at once.

## Archive, restore and delete

In Aureus, **Delete** on a page moves it to the **Archived** tab. It is not gone.

1. Click **Delete** on the row, or on the edit page. Aureus shows **Page deleted**.
2. Open the **Archived** tab to find the page.
3. Click **Restore** to bring it back. Aureus shows **Page restored**.
4. Click **Force Delete** to remove it for good.

<ImagePopup src="/images1/website/page_archived_tab.png" alt="Pages list on the Archived tab with one archived page and Restore and Force Delete actions visible" />

::: warning
**Force Delete** cannot be undone.
:::

## Translate a page

Every list and form has a **Locale** switcher. It offers English, Arabic, Spanish, Portuguese (Brazil) and French.

1. Choose a language in the **Locale** switcher.
2. Enter the **Title**, **Content** and SEO fields in that language.
3. Click **Save**.

<ImagePopup src="/images1/website/page_locale_switcher.png" alt="Page edit header with the Locale switcher at the top right" />

Use the same switcher later to review or change each translation.

## Pages that come with the site

Aureus ships with **Home**, **About Us**, **Privacy Policy**, **Terms & Conditions**, **News & Announcements**, **Our Services**, **Contact Us**, **Careers** and **FAQ**. The page with the slug `home` is the home page. It opens at `/`, not at `/pages/home`.

::: tip
Do not set the **Home** page back to draft on a live site. Your front door would be empty.
:::

## What the visitor sees

Only published pages appear. A visitor who types the address of a draft page sees a not found page. Menu links appear and disappear with the publish state.

## See also

- [Create a page](create-a-page.md)
- [Pages overview](index.md)
- [Blog posts](../blog/blog-posts.md)
