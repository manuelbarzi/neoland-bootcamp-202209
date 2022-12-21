# Shopping List App

**Index**
1. [Intro](#id1)
2. [Functional Description](#id2)
1. [Technical Description](#id3)
2. [Planning](#id4)

<div id='id1' />

## <span style="color:blue">Intro</span>

This project will be a web App about shopping list or other lists (travel, tasks).
You will be able to check your items and have a budget before payment.  

![](https://media.giphy.com/media/3orieNUAG9hTM0jlx6/giphy.gif)

<div id='id2' />

## <span style="color:blue">Functional Description</span>
- - - -
- The client will be able to use this app with a personal profile so first he/she will have to do a register and login.
- Within the application you can create a folder with a specific name such as Mercadona or Ikea.
- Within the folder you have created, you will de able to create a list of product clicking a button and insterting all the data required, then will be print in the screen.
- If the list has a price, will be a total count.
- You will be able to edit and delete the products.
- You can also click on all the products you have inserted in your shopping cart to see which ones are missing.
- All lists and products can be edited or deleted.
- The client will be able to change his/her email and password, close session and delted his own account.

### __Use Cases__

User
1. Create a user on register
2. Login to get acces to web App
3. Create a list
4. Delete a list
5. Create an item
6. Update an item
    - Change title
    - Sum quantity
    - Rest quantity
    - Sum amount
    - Rest amount
7. Delete an item
8. Change your password
9. Chande your email
10. Close session

<div id='id3' />

## <span style="color:blue">Technical Description</span>
- - - -
### Blocks

```
App (client-side)        API (server-side)       DB
[React > logic > xhr] -> [Express > Mongoose] -> [Mongo]
```

### Data Model

__User__
- name (String, required)
- email (String, required, unique)
- password (String, required)

__List__
- user (ObjectId, required)
- title (String, required)

__Item__
- list (ObjectId, buying list id)
- title (String, required)
- amount (Number)
- quantity (Number)
- status (Boolean)

### Technologies

- <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png" width="25"> Tailwind
- <img src="https://w1.pngwing.com/pngs/136/126/png-transparent-javascript-logo-angularjs-nodejs-computer-programming-web-development-computer-software-jquery-yellow.png" width="25"> JavaScript
- <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" width="25"> React
- <img src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png" width="25"> Node
- <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Status_iucn_EX_icon.svg/480px-Status_iucn_EX_icon.svg.png" width="25"> Express
- <img src="https://img.icons8.com/color/480/mongodb.png" width="25"> Mongo
- <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongoose/mongoose.png" width="25"> Mongoose

<div id='id4' />

## <span style="color:blue">Planning</span>
- - - -
__BACKLOG__
- share list with other user (visibility = friend)
- ...

__TODO__
- create unregister user logic
- Test logic in server-side
- Paint the screens in dark mode
- ...

__DOING__
- ...

__REVIEW__
- ...

__DONE__
Login
- Athenticate user email and password on login.

Register
- Create a new user on register page. (name, email, password)
- Encrypt the password with hash.

App
- Create routes whether logged in or not.

Home
- Create a Header.
- Adding a clickable vertical navigation menu from the Header.
- Create a footer with +Create button
- Render an informative component when no lists exist yet.
- Create list component
- Render lists components
- Delete list component

Menu
- Add navigation buttons in the menu component.
- Close menu by clicking off the screen or on one of the navigation buttons.
- Render navigation pages with links.

MyList
- Render an informative component when no items exist yet.
- Create item component
- Render items components
- Delete item component
- Crete update items component
- update title, quantity and amount of items
- Quantity addition and subtraction button (+1, -1)
- Price addition and subtraction button (0.5€)
- Add checkbox button with status to display the list process.
- Add a total price summation

Profile
- Render avatar image
- Update user's email address
- Update user's password
- Log out 

Settings
- Create toggle switch button to change the theme from light to dark.
- Create selected tagle with language spanish and english