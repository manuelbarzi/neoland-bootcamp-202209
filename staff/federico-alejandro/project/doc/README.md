# Hello App

## Intro

This App that blah blah blah...

## Functional Description

### Use Cases

User
- Create a post
- View all public posts
- Update a post
- Delete a post
- View profile
- Change password
- ...

## Technical Description

### Data Model

User
- name (String, required)
- email (String, required, unique)
- password (String, required)

Post
- user (ObjectId, required, ref: "User")
- title (String, required)
- text (String, required)
- image (String)
- visibility (String, required, enum: ['public', 'private])
- date (Date, required)
- comments [Comment]

Comment
- user (ObjectId, required, ref: "User")
- text (String, required)
- date (Date, required)
- answers [Comments]