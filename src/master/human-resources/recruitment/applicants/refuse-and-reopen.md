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

<ImagePopup src="/images1/recruitment/refuse_button_header.png" alt="Applicant page for Meera Nair with the Refuse button in the header" />

2. The **Refuse Reason** window opens. It shows the reasons as buttons. Choose **Refused by applicant: salary**.

<ImagePopup src="/images1/recruitment/refuse_modal_reasons.png" alt="Refuse Reason window listing the refuse reasons with none selected" />

3. After you choose a reason, two fields appear. **Notify** is on by default. **Email To** holds the candidate's email address.

<ImagePopup src="/images1/recruitment/refuse_modal_notify.png" alt="Refuse Reason window with Refused by applicant: salary selected, the Notify toggle on and Email To showing Meera's email" />

- **_Refuse reason:_** Required. Pick one button. **Submit** does nothing until you pick one.
- **_Notify:_** On by default. When it is on, Aureus sends the candidate an email based on the reason's template.
- **_Email To:_** Shows only when **Notify** is on. It starts with the candidate's email address. You can change it.

4. Turn **Notify** off if you do not want to send a message. Click **Submit**.

<ImagePopup src="/images1/recruitment/refuse_after_submit.png" alt="Meera Nair applicant page after refusing, with the Refused status and the stage bar hidden" />

## What happens after you refuse

- The **Application status** shows **Refused**.
- The stage bar is hidden.
- The applicant becomes inactive and shows under the **Archived** tab of the [applicant list](applicant-list.md).
- The header now offers **Restore** instead of **Refuse**.

Each reason uses one of two email templates, **Applicant Refuse** or **Applicant Not Interested**. You choose the template in [Refuse reasons](../setup/refuse-reasons.md).

## Reopen the applicant

5. Open Meera's applicant page. Click **Restore** in the header.

<ImagePopup src="/images1/recruitment/restore_button_header.png" alt="Refused applicant page with the Restore button in the header" />

6. Confirm in the window that opens.

<ImagePopup src="/images1/recruitment/restore_confirm.png" alt="Restore confirmation window for Meera Nair" />

Aureus reopens the application. Meera is back in the process and you can click a stage again.

::: tip
The button is called **Restore**. It is the way to reopen a refused application.
:::

## Actions and statuses

- **Refuse:** closes the application with a reason.
- **Restore:** reopens a refused application.
- **Refused:** status shown on a turned down applicant.
- **Archived:** the list tab that holds inactive applicants.

## See also

- [Process an applicant](process-applicant.md)
- [Applicant list](applicant-list.md)
- [Refuse reasons](../setup/refuse-reasons.md)
