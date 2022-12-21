# Hello App

## Intro

This App that blah blah blah...

![](https://media.giphy.com/media/l4pTfx2qLszoacZRS/giphy.gif)

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

### Blocks

```
App (client-side)        API (server-side)       DB
[React > logic > xhr] -> [Express > Mongoose] -> [Mongo]
```

### Data Model

**User**
- name (String, required)
- email (String, required, unique)
- password (String, required)

**Post**
- user (ObjectId, required)
- text (String, required)
- visibility (String, required, enum: ['public', 'private])
- date (Date, required)

### Technologies

- JavaScript
- React
- Node
- Express
- Mongo
- Mongoose
- Tailwind
- ...

## Planning

__BACKLOG__

- share post to a user (visibility = friend)
- filter posts by user
- ...

__TODO__

- create unregister user logic
- Test logic in server-side
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
