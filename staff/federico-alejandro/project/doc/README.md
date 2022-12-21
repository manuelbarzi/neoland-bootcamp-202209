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
We have used:
=============
React : To create the base of the project
Tailwind: A CSS framework that prioritises usability over styling. This framework provides a set of classes to give structure and style, and to be able to quickly create custom designs.
Autoprefixer: Allows you to parse standard CSS code and add the necessary CSS vendor prefixes to ensure that the functionality is best suited to older browsers.


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