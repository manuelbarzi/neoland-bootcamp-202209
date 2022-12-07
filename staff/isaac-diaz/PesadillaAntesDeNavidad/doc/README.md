# NFT Need For Tuition

## Intro

This App is for view the state your cars

## Functional Description

### Use Cases

User
- View list of vehicles (brand, model, license, licenseDate)
- View a vehicle (full detail, state, ...)
- Create a vehicle
- Update a vehicle
- Delete a vehicle
- View notifications

## Technical Description

### Data Model

User
- name (String, required)
- email (String, required, unique)
- password (String, required)

Vehicle
- user (ObjectId, required)
- brand (String, required)
- model (String, required)
- type (String, enum: ['car', 'moto'])
- license (String, required)
- licenseDate (Date, required)
- kms (String, required)
- lastInspectionDate (Date)
- chassisNumber (String)
- carriageName (String)


