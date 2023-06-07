# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own customIds for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

### CBH-001: As a developer, add field `custom_id` to Agents table

Description: Add a "custom_id" column to the Agents table to store customIds provided by Facilities.

Acceptance Criteria:

- Agents table should have a new column named "custom_id" of type VARCHAR(50).
- The "custom_id" field should allow alphanumeric characters.
- Update the database schema and migration scripts to include the new column.
- Ensure existing functionality remains unaffected.
- Update report generation code to display the customId instead of the internal database ID.

Effort Estimate: 3 story point

Implementation Details:

- Modify the database schema to include the "custom_id" column in the Agents table.
- Update the database migration scripts to apply the schema changes to existing installations.
- Update the data access layer to include the "custom_id" column in the Agents model.
- Update the existing data in the database to populate the value for "custom_id".
- Modify the report generation code to fetch and display the customId instead of the internal database ID.

### CBH-002: As a developer, update Facility interface for custom Agent IDs

Description: Update the Facility interface to allow Facilities to save customIds for Agents.

Acceptance Criteria:

- Add a new input field labeled "customId" on the Facility interface for adding/editing Agents.
- The "customId" field should allow alphanumeric characters with a maximum length of 50.
- Validate the input to ensure it meets the specified criteria.
- Update the database access layer to store the customId in the "custom_id" column of the Agents table.

Effort Estimate: 2 story points

Implementation Details:

- Update the Facility interface component to include the new input field for the "customId" on the Add/Edit Agent form.
- Implement validation logic to ensure the customId meets the specified criteria before saving it.
- Update the data access layer to include the customId field in the database insert/update queries.

### CBH-003: As a developer, update function `generateReport` to use custom Agent IDs

Description: Modify the generateReport function to use custom Agent IDs instead of internal database IDs.

Acceptance Criteria:

- Update the generateReport function to fetch the customId from the Agents table for each Agent associated with Shifts.
- Modify the report generation code to display the customId instead of the internal database ID.
- Verify that the generated reports correctly include the custom Agent IDs.

Effort Estimate: 2 story points

Implementation Details:

- Modify the generateReport function to retrieve the customId from the Agents table using the Agent's internal database ID.
- Update the report generation code to display the customId instead of the internal database ID.
- Test the report generation functionality with various scenarios to ensure the custom Agent IDs are correctly included in the generated reports.
