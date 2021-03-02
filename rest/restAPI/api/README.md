# To register using Postman, create a POST api/auth/register with body of something like this

```json
{
    "username": "bob",
    "password": "123",
    "first_name": "Khoi",
    "last_name": "Le",
    "email": "khoibaka@gmail.com"
}
```

# To login using Postman, create a POST api/auth/login with body of something like this

```json
{
    "username": "bob",
    "password": "123"
}
```


# To get user from the token, put the token in header "Authorization" and GET /api/auth/user

```json
Headers {
    "Authorization" : "Token <Token here>"
}
```

# To logout using Postman, create a POST api/auth/login with body of something like this

```json
{
    "username": "bob",
    "password": "123"
}
```