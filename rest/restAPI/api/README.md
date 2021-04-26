# User API

## To register using Postman, create a POST api/v1/auth/register with body of something like this

```json
{
    "username": "bob",
    "password": "123",
    "first_name": "Khoi",
    "last_name": "Le",
    "email": "khoibaka@gmail.com"
}
```

## To login using Postman, create a POST api/v1/auth/login with body of something like this

```json
{
    "username": "bob",
    "password": "123"
}
```
### Sample Response:
{
    "user": {
        "id": 1,
        "username": "bob",
        "email": "bob@bob.bob",
        "full_name": "",
        "phone_number": "",
        "address": "",
        "birthday": "2021-04-26",
        "skill": "no_skill",
        "rating": "0.0",
        "is_provider": false
    },
    "token": "999c7996623bebd79433280f8c552bd4d7f436deea5d498e766607e9c998d260"
}

## To get user from the token, put the token in header "Authorization" and GET /api/v1/auth/user

```json
Headers {
    "Authorization" : "Token <Token here>"
}
```

## To logout using Postman, create a POST api/v1/auth/login with body of something like this

```json
{
    "username": "bob",
    "password": "123"
}
```

## Available URLs (add `/api/v1/` to the left):
- user/ : Lists all users
- user/retrieve : Get the current user (based on request token)
- user/update : Update the current user. Available fields are in the structure below (except id and full_name)

## User JSON response structure example
```json
{
    "id": 1,
    "username": "bob",
    "email": "khoibaka@gmail.com",
    "full_name": "Khoi Le",
    "first_name": "Khoi",
    "last_name": "Le",
    "phone_number": "",
    "address": "",
    "birthday": "2021-04-26",
    "skill": "no_skill",
    "rating": "0.0",
    "is_provider": false
}

```

# Job API

## Sample Job Structure