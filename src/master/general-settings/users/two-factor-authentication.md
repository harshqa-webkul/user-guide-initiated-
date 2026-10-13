# Two-factor authentication

**Two-factor authentication** adds a second step to your sign-in. After your password, you enter a 6-digit code from an authenticator app on your phone. Even if someone learns your password, they cannot sign in without your phone.

> **In simple words:** To sign in you need two things: your password and your phone.

## Before you start

Install an authenticator app on your phone. Any app that makes 6-digit time-based codes works.

## Turn on two-factor authentication

1. Open your [profile](./profile.md).
2. In the **Authenticator app** section, click **Set up**. The status shows **Disabled** until you finish.
3. Scan the QR code with your authenticator app. If you cannot scan it, enter the code shown under the picture by hand.
4. Enter the 6-digit code that the app shows.
5. Click **Enable authenticator app**.
6. Save your **recovery codes** in a safe place. Aureus shows them only once.

The status changes to **Enabled**.

<ImagePopup src="/images1/general-settings/two_factor_section.png" alt="Authenticator app section on the profile page, status Disabled with the Set up button" />

<ImagePopup src="/images1/general-settings/two_factor_setup_modal.png" alt="Set up authenticator app window with QR code and 6-digit code field" />

<!-- TODO-SCREENSHOT: /images1/general-settings/two_factor_recovery_codes.png | recovery codes shown after enabling -->

::: warning
Recovery codes are your way back in if you lose your phone. Store them somewhere safe. Aureus shows them only once.
:::

## Sign in with a code

1. Enter your email and password as usual.
2. When Aureus asks, enter the 6-digit code from your authenticator app.

If you cannot use your phone, click **Use a recovery code instead** and enter one of your recovery codes.

<!-- TODO-SCREENSHOT: /images1/general-settings/two_factor_login.png | Sign-in step asking for the 6-digit code with the recovery code link -->

## Get new recovery codes

1. Open your [profile](./profile.md).
2. In the **Authenticator app** section, click **Regenerate recovery codes**.
3. Enter the 6-digit code from your app, or your current password.
4. Click **Regenerate recovery codes**.
5. Save the new codes. The old codes stop working at once.

## Turn off two-factor authentication

1. Open your [profile](./profile.md).
2. In the **Authenticator app** section, click **Turn off**.
3. Enter the 6-digit code from your app, or click **Use a recovery code instead**.
4. Click **Disable authenticator app**.

::: info
Turning it off removes the extra layer of security from your account. Keep it on unless you have a reason to turn it off.
:::

## See also

- [Your profile](./profile.md)
- [Users](./users.md)
