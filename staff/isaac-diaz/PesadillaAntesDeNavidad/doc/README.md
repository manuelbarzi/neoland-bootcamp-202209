# NFT Need For Tuition

## Intro

This App is for view the state of your cars

## Functional Description

### Use Cases

User
- View list of vehicles (brand, model, license, licenseDate, kms)
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



Problems

-Api:

-update, vehicleId no llega(no se si lo borro por el camino(no deberia) o no lo referencio bien)

App:

-Fuck Hooks, setState y varios, alaracion de rutas y llamadas en onClicks. Intencion de que aparezca el formulario, rellenarlo y enviar a myProfile pero que en Home te quede tu tarjeta de vehiculo con la info basica y boton de editar y borrar.

No se si he de hacer para el tema de revisiones e itv componentes. 
