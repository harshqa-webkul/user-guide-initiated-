# Stages

**Stages** show how far a record has moved through a process. A maintenance request moves from new to repaired. A job application moves from first contact to hired. A task moves from to do to done. Stages are the same idea in every module, so you learn them once.

> **In simple words:** A stage is a step on the way to finished. You decide the steps, and you move each record from one step to the next.

## Where stages are used

| Module | Stages for | Menu path |
| --- | --- | --- |
| Maintenance | Maintenance requests | `Maintenance → Configurations → Stages` |
| Recruitment | Job applications | `Recruitment → Configuration → Stages` |
| Project | Projects | `Project → Configurations → Project Stages` |
| Project | Tasks | `Project → Configurations → Task Stages` |

::: info
Project stages are off by default. Turn them on before you use them. See [Turn on project stages](#turn-on-project-stages).
:::

## Change stages

Every stage page works the same way:

1. Open the menu path from the table above.
2. Click **New** to add a stage, or click **Edit** on a row to change one.
3. Fill in the fields and save.

The list shows the stages in the order they appear in the process. To change the order, use the drag handle on a row and drop it in its new place. Click **Delete** to remove a stage.

::: warning
A stage that is still used by records cannot always be deleted. Move those records to another stage first.
:::

## Fields by module

### Maintenance stages

- **_Name:_** The name of the stage, for example `New Request` or `In Progress`.
- **_Done:_** Turn on for the last step. A request in a done stage counts as finished.

<ImagePopup src="/images1/maintenance/set_stage_form.png" alt="New Stage window with the Name and Done fields" />

See [Maintenance requests](../supply-chain/maintenance/requests/process-request.md) for how requests move between stages.

### Recruitment stages

- **_Stage Name:_** The name of the stage, for example `Interview`.
- **_Sequence Order:_** The position of the stage in the list.
- **_Requirements:_** Notes on what must be done before a candidate leaves this stage.
- **_Gray Label, Red Label, Green Label:_** Your own text for the three status marks on an application in this stage.
- **_Job Positions:_** Limit the stage to chosen jobs. Leave it empty to use the stage for all jobs.
- **_Folded:_** Collapse this stage on the board.
- **_Hired Stage:_** Mark the stage that means the candidate is hired.
- **_Default Stage:_** Use this stage for every new application.

<ImagePopup src="/images1/recruitment/stages_general.png" alt="Recruitment stage form, General Information section" />

### Project and task stages

- **_Name:_** The name of the stage, for example `Planning` or `In Review`.
- **_Project:_** Tasks stages only. The project the stage belongs to. This field is required.

<ImagePopup src="/images1/project/task_stage_1.png" alt="Task stage form with Name and Project" />

#### Turn on project stages

1. Go to `Project → Settings → Manage Tasks`.
2. Turn on **Enable Project Stages**.
3. Save the changes.

The **Project Stages** page then appears under **Configurations**.

## See also

- [Project configurations](../services/project/configuration/index.md)
- [Recruitment configuration](../human-resources/recruitment/setup/stages.md)
