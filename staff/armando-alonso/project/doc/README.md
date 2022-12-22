# SRN (Social Report Neighbour)

# Intro

This application collects the problems about the neighbourhoods. Neighbour can registered and report all the problems that they can see in the street, parks, walls and everything infraestructure the city has.

## Functional Description

### Use Cases

Visitor (non-registered user)
- Create landing page with public posts
- View all public Issues 

User
- Create landing page with public posts
- View all public Issues 
- Create issue
- View all public Issues 
- Update Issue
- View profile
- Change Name
- Change Password


## Technical Description

### Data Model

User
- name (String, required)
- surname (String, required)
- direction (String)
- postalCode (String)
- neighbourhood (String)
- city (String)
- gender (string)
- pet (String)
- vehicle (String)
- email (String, required)
- password (String, required)

Post
- user (ObjectId, required)
- topic (String, required)
- text (String, required)
- visibility (String, required, enum: ['public', 'private'])
- date (Date, required)

