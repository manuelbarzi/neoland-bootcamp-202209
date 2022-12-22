# SRN (Social Report Neighbour)

# Intro

The application in its first phase will be to establish a web portal where unregistered users will be able to access and then a part of the web where only registered users will be able to access. In this site will be able to publish news the users that are registered and that will be visible without being registered or not.

## Functional Description

### Use Cases

Visitor (non-registered user)
- [X] Create landing page with public posts
- [X] View all public Issues 

User
- [X] Create landing page with public posts Registered
- [X] View all public Issues 
- [X] Create post
- [X] View all public post
- [X] Update post
- [X] View profile
- [ ] Change Name
- [ ] Change Password


## Technical Description

### Data Model

User
- name (String, required)
- surname (String, required)
- direction (String)
- postalCode (String)
- neighbourhood (String)
- city (String)
- email (String, required)
- password (String, required)

Post
- user (ObjectId, required)
- topic (String, required)
- text (String, required)
- visibility (String, required, enum: ['public', 'private'])
- date (Date, required)

### Technologies

- Tailwind
- Tailwind Elements (Library)
- Tailwind FlowBite (Library)d
- Node
- Express
- React
- React Router
