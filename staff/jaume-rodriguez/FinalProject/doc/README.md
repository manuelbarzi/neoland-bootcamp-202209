# World Adventures App

## Intro

The app consists of creating a fidelity with the user based on achievements that will be obtained by interacting with it. For example by participating in daily adventures.

## Functional Description

### Use Cases

App info

- Register / Login

- Shop

  - Free Rewards
    - Dayly
    - Weekly

- Profile

  - Level
  - Achievements
  - Settings

- Home / Guild

  - Main Quests
  - Main Adventures line

- World

  - Community Adventures Line

- Community

  - Posts

User

- Shop

  -- Get dayly rewards (expLevel)
  -- Get weekly rewards (expLevel)

- Profile

  - View Level
  - View Achievements
  - Change Name
  - Change Email
  - Change Password

- Guild

  - Interact with Main Quest
    - +1 progress/day
    - Get expLevel/progress
  - Interact with Main Adventures Line
    - +1 progress/day
    - Get expLevel/progress

- World

  - Create Community Adventure Line (Level "x" need)
    - Get expLevel (for each user has finished your adventure)
  - Delete Community Adventure Line
  - Interact with Community Adventures Line
    - +1 progress/day
    - Get expLevel/progress
    - Like to Community Adventures Line

- Community

  - Create post
  - Edit post
  - Delete post

## Technical Description

### Data Model

User

- name (String, required)
- email (String, required, unique)
- password (String, required)
- level (Number, required)
- questCompleted: [{
  quest: ObjectId, ref,
  timesCompleted: Number
  }]
- adventures: [
  {
  adventure: ObjectId, ref
  stepsCompleted: Array of ObjectId, ref
  isCompleted: Boolean
  }
  ]

(Array of ObjectId)

Quest

- [pk] id: ObjectId
- creator -> User ref
- text (String, required)
- isMainQuest: boolean
- votes (ObjectId array ref Users) / atómico

Adventure

- [pk] id
- creator -> User ref
- title
- isMainAdventure: string
- steps (ObjectId array, ref Quests)
- votes (ObjectId array ref Users)

Post

- user (ObjectId, required)
- text (String, required)
- date (Date, required)
