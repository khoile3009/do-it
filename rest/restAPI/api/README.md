# To register using Postman, create a POST api/v1/auth/register with body of something like this

```json
{
    "username": "bob",
    "password": "123",
    "first_name": "Khoi",
    "last_name": "Le",
    "email": "khoibaka@gmail.com",
    "phone_number": "123456789",
}
```

# To login using Postman, create a POST api/v1/auth/login with body of something like this

```json
{
    "username": "bob",
    "password": "123"
}
```


# To get user from the token, put the token in header "Authorization" and GET /api/v1/user/retrieve

```json
Headers {
    "Authorization" : "Token <Token here>"
}
```

# To logout using Postman, create a POST api/v1/auth/logout with body of something like this

```json
Headers {
	"Authorization" : "Token <Token here>"
}
```