# Blog posts

A blog post is a dated article with a title, a banner picture, a category and optional tags. You use posts to share news, tips and stories. Visitors read them on your website and filter them by category or tag.

> **In simple words:** Write the article, pick a category, click **Create**, then click **Publish** to make it live.

::: info
Blog Posts need the **Blogs** plugin. Create categories first. See [Categories and tags](categories-and-tags.md).
:::

Open `Website → Blog Posts`.

## Overview

<!-- TODO-SCREENSHOT: /images1/website/post_list.png | Blog Posts list on Default tab showing several posts with Author and Is Published columns, tabs and New Post button -->

- **Button:** **New Post**.
- **Tabs:** **Default**, **My Posts** and **Archived**. **My Posts** shows what you wrote.
- **Columns:** **Title**, **Slug**, **Author**, **Is Published**, **Created At**.
- **Hidden columns:** **Category**, **Created By**, **Updated At**.
- **Group by:** **Category**, **Author**, **Created At**.
- **Filters:** **Is Published**, **Author**, **Created By**, **Category**, **Tags**.

<!-- TODO-SCREENSHOT: /images1/website/post_filters.png | Blog Posts list with the filter panel open showing Author, Category and Tags filters -->

## Create a blog post

Scenario: write **Cloud ERP: Why Small Teams Are Switching** in the category **The Knowledge Vault** with the tag **Tech Savy Blogs**.

1. Open `Website → Blog Posts` and click **New Post**.

<!-- TODO-SCREENSHOT: /images1/website/post_new_button.png | Blog Posts list with New Post button highlighted -->

### General

2. Fill in the **General** section.

- **_Title:_** Required. The headline, for example `Cloud ERP: Why Small Teams Are Switching`.
- **_Slug:_** Built from the title. Aureus locks it after you save. It becomes the post address.
- **_Sub Title:_** A short line that explains the post.
- **_Content:_** Required. The article body. Use the editor for headings, lists and links.
- **_Banner:_** The main picture. Upload an image file.

<!-- TODO-SCREENSHOT: /images1/website/post_form_general.png | General section filled with title, subtitle, content text and an uploaded banner image -->

### SEO

3. Open **SEO** and fill the optional fields.

- **_Meta Title:_** A short headline for search results.
- **_Meta Keywords:_** Comma separated words, for example `ERP, cloud, small business`.
- **_Meta Description:_** A one or two sentence summary.

<!-- TODO-SCREENSHOT: /images1/website/post_form_seo.png | SEO section filled with meta title, keywords and description -->

### Settings

4. Open **Settings**.

- **_Category:_** Required. Pick one, for example **The Knowledge Vault**.
- **_Tags:_** Pick one or more, for example **Tech Savy Blogs**. Type to search.

<!-- TODO-SCREENSHOT: /images1/website/post_form_settings.png | Settings section with Category The Knowledge Vault and tag Tech Savy Blogs selected -->

You do not choose the author. Aureus uses the user who is logged in.

### Create a tag on the spot

If the tag does not exist, add it without leaving the form.

1. In **Tags**, use the create option in the field.
2. Enter a **Name**. Pick a **Color**.
3. Save the small form. The new tag is now selected.

<!-- TODO-SCREENSHOT: /images1/website/post_inline_tag.png | Inline create tag modal with Name and Color fields filled -->

5. Click **Create**. **Create & create another** saves and opens a blank form. **Cancel** leaves without saving.

Aureus shows **Post created**. The post is a draft.

## Actions and statuses

On the edit page, the header shows these buttons.

| Button | What happens | Message |
| --- | --- | --- |
| **Publish** | Post goes live. Shown while the post is a draft. | **Post published** |
| **Set as Draft** | Post is hidden again. Shown while published. | **Post set as draft** |
| **Delete** | Post moves to **Archived**. | **Post deleted** |

Saving edits shows **Post updated**.

```text
Create → Draft → Publish → Published → Set as Draft → Draft
```

<!-- TODO-SCREENSHOT: /images1/website/post_publish.png | Edit page of the Cloud ERP post with Publish button and the Post published message -->

::: warning
A new post is not on the site until you click **Publish**.
:::

## What the visitor sees

Published posts appear on `/blog` under **Our Latest Posts**. Each card sits in its category. Newest posts come first, nine to a page. Clicking a card opens the post page. It shows the banner, the content, the tags, the author, the date and the reading time.

<!-- TODO-SCREENSHOT: /images1/website/post_public_list.png | Public /blog page showing Our Latest Posts with category pills and post cards -->

<!-- TODO-SCREENSHOT: /images1/website/post_public_detail.png | Public post page for Cloud ERP with banner, tags, author, date and reading time -->

## See also

- [Categories and tags](categories-and-tags.md)
- [Blog overview](index.md)
- [Create a page](../pages/create-a-page.md)
