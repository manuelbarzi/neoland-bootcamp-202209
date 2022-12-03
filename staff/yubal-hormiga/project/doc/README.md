# Hello App

## Intro

It is a basic website for senior citizens where they can keep track of their expenses and appointments as well as links of interest.
Es una web básica para personas mayores donde podrán  llevar  control de sus gastos y citas además de enlaces de interés

## Functional Description

### Use Cases

User
- Create a note
- Create a expenditure
- Update a note
- Updte a expenditure
- Delete a note
- Delete a expenditure
- View profile
- Change password
- ...

## Technical Description

### Data Model

User
- name (String, required)
- email (String, required, unique)
- password (String, required)

Note - Appointment
- user (ObjectId, required)
- text (String, required)
- visibility (String, required)
- date (Date, required)


Expenditure - 
- user (ObjectId, required)
- text (String, required)
- expenditure ( String, required)
- visibility (String, required)
- date (Date, required)

