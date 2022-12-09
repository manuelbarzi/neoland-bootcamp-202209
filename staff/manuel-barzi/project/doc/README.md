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
- user (ObjectId, required)
- text (String, required)
- visibility (String, required, enum: ['public', 'private])
- date (Date, required)

## Planning

__BACKLOG__

- share post to a user (visibility = friend)
- filter posts by user
- ...

__TODO__

- create unregister user logic
- ...

__DOING__

- create post logic
- ...

__REVIEW__

- register user
- authenticate user
- ...

__DONE__

- create post component
- ...
