# Hello App

## Intro

It is a basic website for senior citizens where they can keep track of their expenses and appointments as well as links of interest.
Es una web básica para personas mayores donde podrán  llevar  control de sus gastos y citas además de enlaces de interés

## Functional Description


### Use Cases

User
- Create a note
- Create a expenditure
- Update a note
- Updte a expenditure
- Delete a note
- Delete a expenditure
- View profile


## Technical Description
We have used: 
============
React : To create the base of the project
Tailwind: A CSS framework that prioritises usability over styling. This framework provides a set of classes to give structure and style, and to be able to quickly create custom designs.
Autoprefixer: Allows you to parse standard CSS code and add the necessary CSS vendor prefixes to ensure that the functionality is best suited to older browsers.

Hemos usado: 
===========
React : Para crear la base del proyecto
Tailwind: Es un framework CSS que da prioridad a la utilidad sobre el propio estilo. Este framework  proporciona un conjunto de clases para  dar estructura y estilos, y poder crear rápidamente diseños personalizados
Autoprefixer: Permite analizar código CSS estándar y añadir los vendor prefixes de CSS necesarios para garantizar que la funcionalidad se adapte lo mejor posible a navegadores antiguos

### Data Model

User
- name (String, required)
- email (String, required, unique)
- password (String, required)

Note - Appointment
- user (ObjectId, required)
- text (String, required)
- visibility (String, required)
- date (Date, required)
- hour ( hour, required)



Expenditure - 
- user (ObjectId, required)
- text (String, required)
- expenditure ( String, required)
- visibility (String, required)
- date (Date, required)

