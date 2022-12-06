# Hello App

## Intro

This App it's a game, PVP similar to Pokemón 

## Functional Description

### Use Cases

User
- Find Game
- View profile
- Change passwordç
- use cards

Game
- Shoot Atacks
- Shoot Pasives
- Shoot Cards
- Update elo
- Update Stats

Alien
- Update stats
- Shoot Pasives
- Update elo
- Update Stats

Card
- Update Stats
- enable passives

Atack
- Update Stats
- enable passives

## Technical Description

### Data Model

User
- name (String, required)
- email (String, required, unique)
- password (String, required)
- elo(Number, required)

Game
- mode (String, required)
- players ([ObjectId], ref)
- roomId (Number, required, unique)
- status (String, required)
- atacks ([ObjectId, Number, Number, Boolean])
- cards ([ObjectId, Number, Number, Boolean])
- finishGame ([Number, [Object], [Object], [Number]])

Alien
- name (String, required)
- id (Number, required)
- stats ({String, Number}, required)
- type (String, required)
- passives ({String, Boolean})

Cards
- name (String, required)
- player (ObjectId, ref ,required)
- playerObjective (ObjectId, ref, required)
- id(Number, required)
- type(String)
- damage(Number)
- updateStats {{String, Number}}
- passives {{String, Number}}

Atack
- name (String, required)
- id (Number, required)
- player (ObjectId, ref, required)
- playerObjective (ObjectId, ref, required)
- type (String)
- damage (Number)
- updateStats({String, Number})
- passives({String, Boolean})
