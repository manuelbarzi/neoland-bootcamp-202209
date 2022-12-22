# Hello App

## Intro

This App it's a game, PVP similar to Pokemón 

## Functional Description

### Use Cases

User
- View Games
- Create Game
- Join Game
- Exit Game
- View profile
- Change password
- Use card to attack

### Functional entities

Game
- Update elo
- Update Stats

Alien
- Update stats
- Shoot Pasives
- Update elo
- Update Stats
- Shoot Atacks
- Shoot Pasives
- Shoot Cards

Card
- Update Stats
- Enable passives

Attack
- Update Stats
- enable passives

## Technical Description

### Data Model

Player
- name (String, required)
- email (String, required, unique)
- password (String, required)
- elo(Number, required)

Game
- players ([ObjectId], ref Player)
- turn (Number, required, ref)
- hasTurn (Bolean, required)
- gameData ([Array], ref GameDataType) 
- status (String, required)
- aliensPlayerOne ([Alien])
- aliensPlayerTwo ([Alien])
- alienAtakcs ([AlienAttack], ref AlienAtack)

AlienAttack
- damage (Number)
- playerName (String, required)
- passives ([String], ref PassiveType)
- date (Date, required)

AlienType
- name (String, required)
- type (String, required)
- atack1: (String, required)
- atack2: (String, required)
- atack3: (String, required)
- atack4: (String, required)

Alien
- alienType (ObjectId, ref AlienType, required)
- player (ObjectId, ref Player)
- healthPoints: (Number, required)
- especialDefense: (Number, required)
- fisicDefense: (Number, required)
- especialAtack: (Number, required)
- fisicAtack: (Number, required)
- psiquicalAtack: (Number, required)
- speed: (Number, required)
- healing: (Number, required)
- repeat: (Number, required)
- pasivesType: ([Strings])

PassiveType
- name (String, required)

Aliens
- alienType (ObjectId, ref AlienType, required)
- player (ObjectId, ref Player)
- healthPoints: (Number, required)
- especialDefense: (Number, required)
- fisicDefense: (Number, required)
- especialAtack: (Number, required)
- fisicAtack: (Number, required)
- psiquicalAtack: (Number, required)
- speed: (Number, required)
- healing: (Number, required)
- repeat: (Number, required)
- pasivesType: ([Strings])