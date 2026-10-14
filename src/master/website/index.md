# Website

The Website app builds and runs your public site from inside Aureus ERP. You write pages, publish blog posts, show your contact details and let customers sign in. Visitors see the result at your site address, without any code or extra tools.

> **In simple words:** Fill in your details, write pages and posts, publish them, and visitors see them at once.

```text
Set contacts  →  Build pages  →  Write blog posts  →  Publish  →  Customers sign in
  (footer)        (header menu)     (category, tags)    (live)       (accounts)
```

## What a visitor sees

Your site is served at the address of Aureus without `/admin`, with the home page at `/`. Open it in a new browser tab.

| Public address | What the visitor sees |
| --- | --- |
| `/` | The Home page, built from the page with the slug `home` |
| `/pages/{slug}` | Any published page, such as `/pages/about-us` |
| `/blog` | The list of published posts, with category pills, tags and search |
| `/login` and `/register` | Sign in and create account forms for customers |

Every public page shares a site header and a footer. The site header shows Home, the pages you marked for the header menu, and Blog. The footer shows Useful Links, your contact details and Follow Us icons. See the [Website overview](get-started/website-overview.md) for a full map of what each admin option controls.

::: info
**Blog Posts** and **Configurations** (Categories and Tags) need the **Blogs** plugin. Customer portal actions come with the **Website** plugin. If **Blog Posts** is missing from the menu, the Blogs plugin is not installed. Install it from [Plugins](../general-settings/plugins.md). Without the Blogs plugin you still manage pages, contacts and customers.
:::

## Where to go next

**Get started**

- [Get started](get-started/index.md): the group overview.
- [Website overview](get-started/website-overview.md): every menu, the dashboard and a map of admin options to public site.
- [First steps](get-started/first-steps.md): one tutorial from contact details to a published post.

**Settings**

- [Settings](settings/index.md): the group overview.
- [Manage contacts](settings/manage-contacts.md): email, phone and social links shown in the footer.

**Pages**

- [Pages](pages/index.md): the group overview.
- [Create a page](pages/create-a-page.md): content, SEO and the header and footer menu.
- [Publish and draft](pages/publish-and-draft.md): control what is live.

**Blog**

- [Blog](blog/index.md): the group overview.
- [Blog posts](blog/blog-posts.md): write, set a banner, pick a category and tags, publish.
- [Categories and tags](blog/categories-and-tags.md): organise your posts.

**Customers**

- [Customers](customers/index.md): the group overview.
- [Customers](customers/customers.md): the customer list and records.
- [Portal and sign in](customers/portal-and-sign-in.md): how visitors register, sign in and reset a password.

## See also

- [Contacts](../getting-started/contacts/contacts.md)
- [Portal access](../general-settings/users/portal-access.md)
