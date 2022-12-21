# ⛵️ Fullstack project: Boating-app ⚓️

## 🔎 Intro

It's the final fullstack project where the main objective is to apply everything learnt during the last three months by developing a web app of our choice, in my case, an app were sailors can book their stays in different ports.

### 🌊 Why Boating-app?

The main idea was to mix technology with a field/subject I am really passionate about: the sea.  While thinking about this, I asked myself, if in Internet you can book in different sites the accomodation in-land, what about an app to book stays in port when sailing? And that is how Boating-app was born.

## Functional Description

- [X] User Login
- [X] Register User
- [X] CRUD of user's boats
- [X] CRUD of port bookings
- [X] User settings
- [X] View main port info
- [X] View the weather on each port


## Technical Description

### Components

- Navbar
- Home
- Login
- Register Form
- Ports
- User's settings
- User's bookings
- Booking Form
- User's boats
- Boat Form

### Data Model

All data storage is done in MongoDB by using Mongoose.

User

- id: '',
- name: '',
- surname: '',
- birth date: date
- passport: '',
- email: '',
- contact: '+34 123456789',
- address:

Boat

- id: '',
- owner (ObjectId, user id)
- name: '',
- flag: '',
- regNumber: '',
- sail: true
- length: number
- beam: number
- draft: number

Port

- id (ObjectId, required),
- name (String, requried),
- coordinates ([Number], required),
- address (String, required)
- berths (Number, required)
- vhf (Number, required)
- phone (String, required)
- facilities ([String], required, enum ['wc', 'restaurant', 'laundry', 'swim', 'parking', 'gas', 'gym', 'travel'])

Booking

- startDate (Date, required)
- endDate (Date, required)
- port (ObjectId, port id, required)
- boat (ObjectId, boat id, required)

### Technologies

- JavaScript
- React
- React Router
- Axios
- Node
- Express
- Mongoose
- JWT
- Tailwind
- Font awesome

### 🎨 Design

Both Login and Register pages are divided, on the left hand side the form is set. On the right hand, I have used an aerial image of two boats.

#### Color Palette

I have chosen a combination of 4 colours: navy, mid-grey, turqoise and white bone. I think these tones are the perfect match for the theme of the app.

## 🔜 Next version

- [ ] Mobile version
- [ ] Add prices to each port
- [ ] Port facilities icons
- [ ] Port rating and opinions
- [ ] User documents such as lisense and boat documents
- [ ] Port geolocation using Maps and GPS