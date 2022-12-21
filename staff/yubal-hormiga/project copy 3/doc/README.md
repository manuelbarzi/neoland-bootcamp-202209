# Hello App

## Intro

It is an application where on the one hand you can add appointments and on the other hand you can keep track of your expenses, both in chronological order.

## Functional Description


### Use Cases

User
- Create a appoiment
- Create a spent
- Update a appoimment
- Update a spent
- Delete a appoiment
- Delete a spent
- View profile


## Technical Description
We have used: 
============
React : To create the base of the project
Tailwind: A CSS framework that prioritises usability over styling. This framework provides a set of classes to give structure and style, and to be able to quickly create custom designs.
Autoprefixer: Allows you to parse standard CSS code and add the necessary CSS vendor prefixes to ensure that the functionality is best suited to older browsers.

Hemos usado: 
===========

*Express:Express is a minimal and flexible Node.js web application infrastructure that provides a robust set of features for web and mobile applications.

*JSON Web Token (JWT): is a standard for securely transmitting information over the internet by means of JSON files, which is a type of plain text file with which parameters can be created and assigned a value. This system is used for user authentication in applications and its main function is to validate the identity of the person accessing the page.

*Mongoose: is a library for Node.js that allows us to write queries for a MongooDB database, with features like validations, query construction, middlewares, type conversion and some others, that enrich the database functionality.

*React: React helps you create interactive user interfaces easily. Design simple views for each state in your application, and React will take care of efficiently updating and rendering the correct components when data changes.

*Tailwind: A CSS framework that prioritises usability over styling. This framework provides a set of classes to give structure and style, and to be able to quickly create custom designs.

*Autoprefixer: Permite analizar código CSS estándar y añadir los vendor prefixes de CSS necesarios para garantizar que la funcionalidad se adapte lo mejor posible a navegadores antiguos
........

### Data Model

User
- name (String, required)
- email (String, required, unique)
- password (String, required)

Appointment
- user (ObjectId, required)
- title (String)
- body (String, required)
- date (Date, required)
s
Flow
- user (ObjectId, required)
- type (String, required, enum ['income', 'expense'])
- kind (String, required, enum ['pension', 'gift', 'donation', 'food', 'supply', 'medicine', 'services', 'other'])
- description (String,required)
- amount (Number, required)
- date (Date, required)

