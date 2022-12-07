# Hello App

## Intro

This app is about a mountain club, where we can booking the time to go to the gym, join to the activities, watch the news...

## Functional Description

### Use Cases

Admin User 
- Create news
- Update news
- Delete news 
- ...

Ordinary User
- watch the news
- join to the activities
- booking times


## Technical Description

### Data Model

User
- name (String, required)
- email (String, required, unique)
- password (String, required)
- role (String, required, enum ['ordinary', 'admin'], default 'ordinary')

New
- title(String, required)
- body (String, required)
- date (Date, required)

Event
- title (String, required)
- body (String, required)
- capacity (Number, required)
- date (Date, required)

Booking
- user (ObjectId, user id)
- event (ObjectId, event id)
- name (String, required)
- date (String, required)
