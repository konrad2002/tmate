# tMate - Team Member Administration Tool

## ToDos

 - [x] Login
 - [ ] User Management
 - [x] Load Table
 - [x] Different Queries
 - [x] Query Builder
 - [ ] Query List
 - [x] Sort Table
 - [ ] Modify Table Structure
 - [x] Add/Modify/Delete Member
 - [x] Search
 - [x] Quick Buttons for Conditions and Queries
 - [ ] Permission System
 - [ ] Bi-Lingual
 - [x] Notifications
 - [ ] History Log
 - [x] Family Features
 - [x] Excel Export
 - [x] Attest Management
 - [ ] Personal Settings
 - [x] In-Table Editing
 - [x] Default Query
 - [ ] Consistency checks
 - [x] E-Mail Features

## Dev-Log

### Feb 21

- use material
- remove fa, add mat-icon
- favicon
- Dockerfile; nginx config
- GitHub Action
- add tests and linter
- load fields from api
- load members from api
- display members in table

### Feb 22

- toolbar service
- toolbar button
- member selection (table service)
- member detail dialog
- implement all field types in both dialog and table

### Feb 23

- load queries from db and execute them
- show queries in toolbar
- keep table state in service
- run queries from client
- update table fields after query
- view member details
- save members after adding/editing
- dialog spinner animations

### Feb 24

- special fields config
- config controller and service
- search feature
- refresh button
- default query

### Feb 25

- save family member when saving member
- family member selection dialog
- show family in table and member details
- make family clearable
- query editor component and dialog
- projection selection
- recursive condition builder
- sorting selection

### Feb 26

- save queries with service (add and update, no filter yet)
- convert ts ui interfaces to bson documents and vice versa
- make query nameable
- query delete function
- query editor save and modify conditions
- table sorting with header buttons
- allow editing when double click
- edit toolbar section
- save all modified members after editing mode
- label dirty fields when editing
- help dialog editing info

### Feb 27

- remove null values from import
- import endpoint
- make date fields receive and produce correct types
- emails to smtp
- setup ste attest mail
- attest templates
- create mails from templates
- query to get members to notify
- go routine once a day for reminders

### Feb 28

- query result to Excel sheet
- send Excel file in request
- client excel export button with download
- email editor dialog

### Mar 1

- email editor subject, sender, receivers
- sender autocomplete
- make multiple table rows selectable
- send email endpoint
- smtp config files
- document parsing for each receiving member 

### Mar 2

- user model; dtos; controller and service
- user creation
- user login endpoint with jwt generation
- simple user list dialog
- permission concept
- permission model

### Mar 5

- setup production env
- fix backend pipeline
- import data to production
- nginx setup for backend

### Mar 15

- query per person
- set query owner
- query management allow custom owner in backend
- refresh query list when necessary
- logged in as
- fix login triggers directives again
- query deletion confirmation prompt
- change password
- set temporary password
- force password change for temp passwords
- login counter
- last login timestamp

### Mar 16

- remove unused buttons
- query editor for admins
- query management permission shows more buttons

### Mar 17

- fix export triggering on every query run
- fix excel export
- improve table style

## Roadmap

### ToDo

- modify table structure
- user creation
- permissions
- history log
- fix query editor cannot load date fields correctly
- email template cannot parse dates correctly (see ChatGPT conv.)
- email add buttons for all fields
- activate emails
- fix mail template date (+1 year)

## Future Ideas

- aggregation functions in queries
- suggest common entries when editing member info (like the city name after typing some letters)
- consistency checks:
  - age too low
  - begin training before joining
  - begin training before being born
  - active but no dsv id
  - dsv id active but not active
  - no email address
  - no phone number
  - no address