# Categories and tags

Categories and tags organise your blog. A category is the main topic of a post, and each post has exactly one. Tags are small extra labels, and a post can have many.

> **In simple words:** A category is the shelf. A tag is the sticker.

::: info
Categories and Tags need the **Blogs** plugin.
:::

Open `Website → Configurations`. The sidebar group **Blog** holds **Categories** and **Tags**.

## Categories

Open `Website → Configurations → Categories`.

<!-- TODO-SCREENSHOT: /images1/website/cat_list.png | Categories list with The Knowledge Vault, The Flavor Journal, Beyond Borders Travel, tabs All and Archived, New Category button -->

- **Tabs:** **All**, **Archived**.
- **Columns:** name and **Created At**.
- **Row actions:** **Edit**, **Delete**. The **Archived** tab offers **Restore** and **Force Delete**.

### Create a category

1. Click **New Category**.
2. Fill in the form.

- **_Name:_** Required. For example `The Knowledge Vault`.
- **_Slug:_** Built from the name. Locked after saving. It appears in the address `/blog/{category}`.
- **_Sub Title:_** A short description.

<!-- TODO-SCREENSHOT: /images1/website/cat_form.png | New Category form filled with The Knowledge Vault, slug and sub title -->

3. Click **Create**. **Create & create another** keeps the form open.

### Delete a category

Click **Delete** on the row. The category moves to **Archived**. Use **Restore** to bring it back.

If posts use the category, Aureus refuses. It shows **Cannot delete category** with the text "You cannot delete this category as it is associated with some posts."

<!-- TODO-SCREENSHOT: /images1/website/cat_delete_guard.png | The Cannot delete category message after deleting a category that has posts -->

::: tip
Move the posts to another category first, then delete.
:::

## Tags

Open `Website → Configurations → Tags`.

<!-- TODO-SCREENSHOT: /images1/website/tag_list.png | Tags list with Learn and Grow, Travel With Ease, Tech Savy Blogs showing Name and Color columns -->

- **Tabs:** **All**, **Archived**.
- **Columns:** **Name**, **Color**.

### Create a tag

1. Click **New Tag**.
2. Fill in the form.

- **_Name:_** Required. Must be unique, for example `Learn and Grow`.
- **_Color:_** Pick a colour with the colour picker.

<!-- TODO-SCREENSHOT: /images1/website/tag_form.png | New Tag form with Name Travel With Ease and a colour chosen -->

3. Click **Create**.

You can also create tags inside a post. See [Blog posts](blog-posts.md).

## What the visitor sees

On `/blog` categories show as pills in a row: **All** plus every category. Click a pill to see only that category. The tag filter lists your tags. Pick one to narrow the posts.

<!-- TODO-SCREENSHOT: /images1/website/cat_public_pills.png | Public /blog page showing category pills and the tag filter -->

## See also

- [Blog posts](blog-posts.md)
- [Blog overview](index.md)
- [Website pages](../pages/index.md)
