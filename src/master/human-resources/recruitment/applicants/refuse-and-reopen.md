# Refuse and reopen an applicant

Refusing closes an application and records why. The reason helps you see later why people drop out. If you refused by mistake, or the person comes back, you can restore the applicant and continue.

> **In simple words:** Click **Refuse**, pick a reason, and submit. Click **Restore** to undo it.

Open an applicant from `Recruitments → Applications → Applicants`.

::: info Before you start
Create your [refuse reasons](../setup/refuse-reasons.md). Aureus ships with seven, for example **Does not fit the job requirements**, **Duplicate** and **Refused by applicant: salary**.
:::

## Worked example

Meera Nair applied for **Warehouse Supervisor**. She declined because of the pay. You record that.

1. Open Meera's applicant page. Click **Refuse** in the header.

<ImagePopup src="/images1/recruitment/refuse_button_header.png" alt="Applicant page header for Meera Nair with the Refuse button" />

2. The **Refuse Reason** window opens. It shows the seven reasons as buttons. Click **Refused by applicant: salary**. The button turns blue.

<ImagePopup src="/images1/recruitment/refuse_modal_reasons.png" alt="Refuse Reason window listing the seven refuse reasons with none selected" />

3. After you choose a reason, **Notify** and **Email To** appear. **Notify** is on by default. **Email To** holds the candidate's email address.

<ImagePopup src="/images1/recruitment/refuse_modal_notify.png" alt="Refuse Reason window with Refused by applicant: salary selected, the Notify toggle on and Email To showing meera.nair@example.com" />

- **_Refuse reason:_** Required. Pick one button.
- **_Notify:_** On by default. It controls whether the candidate gets an email about the refusal. The refusal and the reason are recorded either way.
- **_Email To:_** Shows only when **Notify** is on. It starts with the candidate's email address. You can type another address.

4. Turn **Notify** off if you do not want to send a message. **Email To** then disappears. Click **Submit**.

<ImagePopup src="/images1/recruitment/refuse_after_submit.png" alt="Meera Nair applicant page after refusing, with the Refused status and no stage bar" />

## What happens after you refuse

- The **Application status** shows **Refused**.
- The stage bar is hidden.
- The applicant becomes inactive and shows under the **Archived** tab of the [applicant list](applicant-list.md).
- The header now offers **Restore** instead of **Refuse**. **Create Employee** and **Delete** stay.

Each reason has an email template, **Applicant Refuse** or **Applicant Not Interested**. You choose it in [Refuse reasons](../setup/refuse-reasons.md).

## Reopen the applicant

1. Aureus calls reopening **Restore**. Open Meera's applicant page. Click **Restore** in the header.

<ImagePopup src="/images1/recruitment/restore_button_header.png" alt="Refused applicant page header with the Restore button" />

2. A window titled **Reopen Applicant** asks **Are you sure you would like to do this?** Click **Confirm**.

<ImagePopup src="/images1/recruitment/restore_confirm.png" alt="Reopen Applicant window with the Cancel and Confirm buttons" />

Aureus reopens the application. The stage bar comes back and you can click a stage again.

## Actions and statuses

- **Refuse:** closes the application with a reason.
- **Restore:** reopens a refused application.
- **Refused:** status shown on a turned down applicant.
- **Archived:** the list tab that holds inactive applicants.

## See also

- [Process an applicant](process-applicant.md)
- [Applicant list](applicant-list.md)
- [Refuse reasons](../setup/refuse-reasons.md)
