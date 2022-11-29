# Database

## SQL

Users (table)

(columns & rows)

| id | name | email | password |
| -- | ---- | ----- | -------- |
| user-1 | Jaimito | jaimito@io.com | 123123123 |
| user-2 | Jorgito | jorgito@io.com | 123123123 |
| user-3 | Juanito | juanito@io.com | 123123123 |

Post (many-to-one)

| id | user_id | text | visibility | date |
| -- | ------- | ---- | ---------- | ---- |
| post-1 | user-2 | hola mundo  | public | 2022-11-24 |
| post-2 | user-3 | hello world | private | 2022-11-23 |
| post-3 | user-3 | Ciao mondo  | public | 2022-11-20 |

USerUser (many-to-many)

|followed_id| follower_id|
| --------- | ---------- |
| user-1 | user-2 |
| user-1 | user-3 |
| user-3 | user-2 |
| user-2 | user-3 |

## NoSQL

Users (collection)