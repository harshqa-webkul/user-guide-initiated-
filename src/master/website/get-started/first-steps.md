# First steps with Website

This tutorial builds a small site from start to end. You set contact details, edit the Home page and add a page to the header menu. Then you create a category and a tag, write a blog post, publish it and check the public site. Each step links to a deeper page.

> **In simple words:** Fill the footer, shape the pages, post one article, then look at the site as a visitor.

```text
Contacts  →  Home page  →  New page in menu  →  Category + tag  →  Blog post  →  Publish  →  Check
```

The example uses a company site. The page is **Our Team**. The category is **The Knowledge Vault**. The tag is **Learn and Grow**. The post is **Cloud ERP: Why Small Teams Are Switching**.

::: info
Steps 4 and 5 need the **Blogs** plugin.
:::

## Step 1: Set contact details

1. Go to `Website → Settings → Manage Contacts`.
2. Enter **Email** `hello@yourcompany.com` and **Phone** `+1 555 0100`.
3. Type a username in the social fields you use.
4. Click **Save changes**.

<ImagePopup src="/images1/website/first_contacts.png" alt="Manage Contacts filled with email, phone and social usernames" />

The footer now shows these details. See [Manage contacts](../settings/manage-contacts.md).

## Step 2: Edit the Home page

1. Go to `Website → Pages`.
2. Open the page **Home** and click **Edit**.
3. In the **Content** editor, replace the sample text with a welcome message.
4. Click **Save changes**.

<ImagePopup src="/images1/website/first_home_edit.png" alt="Home page edit form with the Content editor showing the welcome text" />

Do not change the **Slug**. The slug `home` makes this page the front page. See [Create a page](../pages/create-a-page.md).

## Step 3: Create a page for the header menu

1. In `Website → Pages`, click **New Page**.
2. Enter **Title** `Our Team`. The **Slug** fills in as `our-team`.
3. Write the **Content**.
4. Open the **Settings** tab. Turn on **Is Visible Header Menu**.
5. Click **Create**.

<ImagePopup src="/images1/website/first_page_create.png" alt="New Page form for Our Team with the Settings tab showing Is Visible Header Menu on" />

The page starts as a draft. Click **Publish** in the header of the page.

<ImagePopup src="/images1/website/first_page_publish.png" alt="Our Team edit page right after Publish with the Page published message" />

You see "Page published". See [Publish and draft](../pages/publish-and-draft.md).

## Step 4: Create a category and a tag

1. Go to `Website → Configurations → Categories` and click **New Category**.
2. Enter **Name** `The Knowledge Vault`. Click **Create**.
3. Go to `Website → Configurations → Tags` and click **New Tag**.
4. Enter **Name** `Learn and Grow`. Pick a **Color**. Click **Create**.

<ImagePopup src="/images1/website/first_category_tag.png" alt="The Knowledge Vault category form and Learn and Grow tag form with colour picked" />

See [Categories and tags](../blog/categories-and-tags.md).

## Step 5: Write and publish a blog post

1. Go to `Website → Blog Posts` and click **New Post**.
2. Enter **Title** `Cloud ERP: Why Small Teams Are Switching`.
3. Add a **Sub Title**, the **Content** and a **Banner** image.
4. Open the **Settings** tab. Choose **Category** `The Knowledge Vault` and **Tags** `Learn and Grow`.
5. Click **Create**, then click **Publish**.

<ImagePopup src="/images1/website/first_post_create.png" alt="New Post form with title, sub title, banner, and Settings tab showing category and tag" />

<ImagePopup src="/images1/website/first_post_published.png" alt="Post edit page after Publish with the Post published message" />

You see "Post published". The author is you. See [Blog posts](../blog/blog-posts.md).

## Step 6: Check the public site

1. Open your site address `/`. Check the welcome text and the footer.
2. Find **Our Team** in the top bar. Click it.
3. Click **Blog**. Find your post. Click its category pill.

<ImagePopup src="/images1/website/first_public_site.png" alt="Public home page showing Our Team in the top bar and the new footer details" />

<ImagePopup src="/images1/website/first_public_blog.png" alt="Public /blog page listing the Cloud ERP post with category pill and tag" />

## Behind the scenes

| You did | The public site changed |
| --- | --- |
| Saved **Manage Contacts** | Footer **Contact Us** and **Follow Us** |
| Edited **Home** | The page at `/` |
| Turned on **Is Visible Header Menu** and published | **Our Team** in the top bar |
| Published a post | New entry on `/blog` |

## What you learned

| Step | Result |
| --- | --- |
| Contacts | Footer filled |
| Home | Front page edited |
| New page | In the header menu |
| Category and tag | Ready for posts |
| Post | Live on `/blog` |

## See also

- [Website overview](website-overview.md)
- [Manage contacts](../settings/manage-contacts.md)
- [Create a page](../pages/create-a-page.md)
- [Publish and draft](../pages/publish-and-draft.md)
- [Blog posts](../blog/blog-posts.md)
- [Customers](../customers/index.md)
