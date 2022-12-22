# Hello App

## Intro

This app is about a mountain club, where we can join to the activities, watch the news... 
There are two kind of users, one of them is the 'user' who just can read the notices, see and join to the events..., the other one is 'admin' who can create, update and delete events, notices... they can also change the role of the other users
 

![](https://media.giphy.com/media/3o7TKoLSUWybe97uWA/giphy.gif)


## Functional Description

### Use Cases

Admin User 
- Create notices
- Update notices
- Delete notices 
- Create events
- Update events
- Delete events
- Change role users

Ordinary User
- Watch the notices
- Join to the events


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
- role (String, required, enum ['user', 'admin'], default 'ordinary')

**Notice**
- title(String, required)
- body (String, required)
- date (Date, required)

**Event**
- title (String, required)
- body (String, required)
- requirement (String, required)
- capacity (Number, required)
- date (Date, required)
- incription (String, required, enum ['close', 'open'], default 'close')
- image: (String)
- participants: (Array)

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

- create a key user
- apply for the federation card
- send climbing shoes to repair
- get club clothes
- chat with others users to made plans
- user finder


__TODO__

- booking timetable to use gym
- update profile user
- typify errors
- testing

__DOING__

- update profile user
- ...

__DONE__

- create, update and delete events
- create, update and delete notices
- change role user to admin