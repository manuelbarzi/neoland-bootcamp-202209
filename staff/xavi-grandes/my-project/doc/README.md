# Xavi Grandes

# Hello Shopping List App

## Intro

This project will be an App about shopping list or other lists. 

## Functional Description

- The client will be able to use this app with a personal profile so first he/she will have to do a register and login.
- Within the application you can create a folder with a specific name such as Mercadona or Ikea.
- Within the folder you have created, you will de able to create a list of product clicking a button and insterting all the data required, then will be print in the screen.
- If the list has a price, will be a total count.
- You will be able to edit and delete the products.
- You can also click on all the products you have inserted in your shopping cart to see which ones are missing.
- All folders and products can be edited or deleted.
- The client will be able to change his/her email and password, close session and delted his own account.

### Use Cases

__User__
- Create a user
- Create a folder
- Update a folder
    - Change text
- Delete a folder
- Create a product or task
- Update a product or task
    - Change text
    - Sum quantity
    - Rest quantity
- Delete a product or task
- View profile
- Change password
- Chande email
- Close session
- Delete account

## Technical Description

### Data Model

__User__
- name (String, required)
- email (String, required, unique)
- password (String, required)

__Product__
- user (ObjectId, required, user id)
- title (String, required)
- description (String)

__List__
- user (ObjectId, required)
- title (String, required)

__Item__
- list (ObjectId, buying list id)
- product (ObjectId, required, product id)
- price (Number)
- quantity (Number, required)