# Databases

## SQL

User (table)

(columns & rows)
| id | name | email | password |
| -- | ---- | ----- | -------- |
| user-1 | Pepito | pepi@to.com | 123123123 |
| user-2 | Felipo | feli@po.com | 123123123 |
| user-3 | Junipo | juni@po.com | 123123123 |

Post (many-to-one)

| id | user_id | text | visibility | date |
| -- | ------- | ---- | ---------- | ---- |
| post-1  | user-2 | hola mundo | public | 2022-11-24 |
| post-2  | user-3 | hello world | private | 2022-11-23 |
| post-3  | user-3 | hola mon | public | 2022-11-20 |

UserUser (many-to-many)

| followed_id | follower_id |
| ----------- | ----------- |
| user-1 | user-2 |
| user-1 | user-3 |
| user-3 | user-2 |
| user-2 | user-3 |

CreditCard

| id | user_id | number | expiration |
| -- | ------- | ------ | ---------- |
| card-1 | user-1 | '1234 1234 1234 1234' | 2025-11 |
| card-2 | user-1 | '1234 1234 1234 1234' | 2025-11 |
| card-3 | user-1 | '1234 1234 1234 1234' | 2025-11 |


SELECT * FROM User
SELECT * FROM Posts WHERE user_id = 'user-2'

## NO-SQL (JSON)

Users (collection)

(document & fields)
```json
[
    {
        "id": "user-1",
        "name": "Peter Pan",
        "email": "peter@pan.com",
        "password": "123123123"
        "creditCards": [
            {
                "id": "card-1",
                "number": "1234 1234 1234 1234",
                "expiration": "2025-11"
            },
            {
                "id": "card-2",
                "number": "1234 1234 1234 1234",
                "expiration": "2025-11"
            },
            {
                "id": "card-3",
                "number": "1234 1234 1234 1234",
                "expiration": "2025-11"
            }
        ]
    },
    {
        "id": "user-2",
        "name": "Wendy Darling",
        "email": "wendy@darling.com",
        "password": "123123123"
    },
    {
        "id": "user-3",
        "name": "Ga Tito",
        "email": "ga@tito.com",
        "password": "123123123"
    }
]
```

Posts

```json
[
    {
        "id": "post-1",
        "user": "user-1",
        "text": "blah blah blah",
        "date": "2022-12-17T12:18:31.429Z",
        "visibility": "public"
    },
    {
        "id": "post-2",
        "user": "user-2",
        "text": "bleh bleh bleh",
        "date": "2022-11-27T12:18:31.429Z",
        "visibility": "private"
    },
    {
        "id": "post-3",
        "user": "user-3",
        "text": "blih blih blih",
        "date": "2022-12-01T12:18:31.429Z",
        "visibility": "public"
    }
]
```

