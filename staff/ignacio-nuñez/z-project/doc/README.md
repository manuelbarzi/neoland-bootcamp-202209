# Z App

## Intro

this app is for people who is searching job, and Companies that are searching workers. it's simplify the way for both to find the best job/candidate in the minor posible time.

## Functional Description

### Use Cases

Company
- Create a work offer
- View curriculums of candidates that fit with his offer
- Update an offer
- Delete an offer
- View workers profiles
- Change password

Worker
- Create a curriculum
- View work offers that fit with his curriculum
- Update a curriculum
- Delete a curriculum
- View companies profiles
- Change password

## Technical Description

### Data Model

User
- name (String, required)
- email (String, required, unique)
- password (String, required)
- role: (String, enum)

Offer
- user (ObjectId, required)
- title (String, required)
- description (String, required)
- photo (String)
- createDate (Date, required)
- languages: [Language]
- studies: [ofStudy]
- experiences: [ofExperience]
- knowledge: [knowledge]

knowledge
- title: (String)
- level: (String, enum)

ofStudy
- title: (String, required),
- years: (String)

ofExperience
- position: (String, required)
- industry: (String, enum, required)
- years: (String)

Curriculum
- user (ObjectId, required)
- title (String, required)
- description (String, required)
- photo (String)
- dateOfBirth (Date, required)
- genre (String, enum)
- createDate (Date, required)
- languages: [Language]
- studies: [cvStudy]
- experiences: [cvExperience]

cvStudy
- title: (String, required),
- description: (String, required)
- institution. (String, required)
- from: (Date, required)
- to: (Date)

cvExperience
- position: (String, required)
- description: (String, required)
- company: (String, required)
- industry: (String, enum, required)
- from: (Date, required)
- to: (Date)

Language
- language: (String, enum)
- level: (String, enum)