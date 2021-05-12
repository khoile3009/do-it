# User API

## To register using Postman, create a POST api/v1/auth/register with body of something like this

```json
{
	"username": "bob",
	"password": "123",
	"first_name": "Khoi",
	"last_name": "Le",
	"email": "khoibaka@gmail.com",
	"phone_number": "123456789"
}
```

## To login using Postman, create a POST api/v1/auth/login with body of something like this

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

## To list out all User, send a GET request to /api/v1/user/

-   User list is paginated at 20 at a time

# Job API

## To create a Job, POST a json following this example:

```json
{
	"title": "job10",
	"description": "Cool Job"
}
```

### Sample response:

```json
{
	"pk": 10,
	"customer": {
		"id": 1,
		"username": "bob",
		"email": "khoibaka@gmail.com",
		"full_name": "Khoi Le",
		"phone_number": "123456789",
		"address": "",
		"birthday": "2021-05-05",
		"skill": "no_skill",
		"rating": "0.0",
		"is_provider": false
	},
	"title": "job10",
	"description": "Cool Job",
	"is_finished": false,
	"is_cancelled": false
}
```

## To list out all the existing job, GET request to /api/v1/job/

-   Job list is paginated at 10 a time.
-   The 'next' key in the response is the API link for the next page of Jobs. GET it to forward a page.
-   Likewise, the 'previous' key is the API link for the previous page of Jobs. GET it to go back a page.

### Sample response

```json
{
	"count": 11,
	"next": "http://localhost:8000/api/v1/job/?limit=10&offset=10",
	"previous": null,
	"results": [
		{
			"pk": 1,
			"customer": {
				"id": 1,
				"username": "bob",
				"email": "khoibaka@gmail.com",
				"full_name": "Khoi Le",
				"phone_number": "123456789",
				"address": "",
				"birthday": "2021-05-05",
				"skill": "no_skill",
				"rating": "0.0",
				"is_provider": false
			},
			"title": "job",
			"description": "Cool Job",
			"is_finished": false,
			"is_cancelled": false
		},
		{
			"pk": 2,
			"customer": {
				"id": 1,
				"username": "bob",
				"email": "khoibaka@gmail.com",
				"full_name": "Khoi Le",
				"phone_number": "123456789",
				"address": "",
				"birthday": "2021-05-05",
				"skill": "no_skill",
				"rating": "0.0",
				"is_provider": false
			},
			"title": "job2",
			"description": "Cool Job",
			"is_finished": false,
			"is_cancelled": false
		},
		{
			"pk": 3,
			"customer": {
				"id": 1,
				"username": "bob",
				"email": "khoibaka@gmail.com",
				"full_name": "Khoi Le",
				"phone_number": "123456789",
				"address": "",
				"birthday": "2021-05-05",
				"skill": "no_skill",
				"rating": "0.0",
				"is_provider": false
			},
			"title": "job3",
			"description": "Cool Job",
			"is_finished": false,
			"is_cancelled": false
		},
		{
			"pk": 4,
			"customer": {
				"id": 1,
				"username": "bob",
				"email": "khoibaka@gmail.com",
				"full_name": "Khoi Le",
				"phone_number": "123456789",
				"address": "",
				"birthday": "2021-05-05",
				"skill": "no_skill",
				"rating": "0.0",
				"is_provider": false
			},
			"title": "job4",
			"description": "Cool Job",
			"is_finished": false,
			"is_cancelled": false
		},
		{
			"pk": 5,
			"customer": {
				"id": 1,
				"username": "bob",
				"email": "khoibaka@gmail.com",
				"full_name": "Khoi Le",
				"phone_number": "123456789",
				"address": "",
				"birthday": "2021-05-05",
				"skill": "no_skill",
				"rating": "0.0",
				"is_provider": false
			},
			"title": "job5",
			"description": "Cool Job",
			"is_finished": false,
			"is_cancelled": false
		},
		{
			"pk": 6,
			"customer": {
				"id": 1,
				"username": "bob",
				"email": "khoibaka@gmail.com",
				"full_name": "Khoi Le",
				"phone_number": "123456789",
				"address": "",
				"birthday": "2021-05-05",
				"skill": "no_skill",
				"rating": "0.0",
				"is_provider": false
			},
			"title": "job6",
			"description": "Cool Job",
			"is_finished": false,
			"is_cancelled": false
		},
		{
			"pk": 7,
			"customer": {
				"id": 1,
				"username": "bob",
				"email": "khoibaka@gmail.com",
				"full_name": "Khoi Le",
				"phone_number": "123456789",
				"address": "",
				"birthday": "2021-05-05",
				"skill": "no_skill",
				"rating": "0.0",
				"is_provider": false
			},
			"title": "job7",
			"description": "Cool Job",
			"is_finished": false,
			"is_cancelled": false
		},
		{
			"pk": 8,
			"customer": {
				"id": 1,
				"username": "bob",
				"email": "khoibaka@gmail.com",
				"full_name": "Khoi Le",
				"phone_number": "123456789",
				"address": "",
				"birthday": "2021-05-05",
				"skill": "no_skill",
				"rating": "0.0",
				"is_provider": false
			},
			"title": "job8",
			"description": "Cool Job",
			"is_finished": false,
			"is_cancelled": false
		},
		{
			"pk": 9,
			"customer": {
				"id": 1,
				"username": "bob",
				"email": "khoibaka@gmail.com",
				"full_name": "Khoi Le",
				"phone_number": "123456789",
				"address": "",
				"birthday": "2021-05-05",
				"skill": "no_skill",
				"rating": "0.0",
				"is_provider": false
			},
			"title": "job9",
			"description": "Cool Job",
			"is_finished": false,
			"is_cancelled": false
		},
		{
			"pk": 10,
			"customer": {
				"id": 1,
				"username": "bob",
				"email": "khoibaka@gmail.com",
				"full_name": "Khoi Le",
				"phone_number": "123456789",
				"address": "",
				"birthday": "2021-05-05",
				"skill": "no_skill",
				"rating": "0.0",
				"is_provider": false
			},
			"title": "job10",
			"description": "Cool Job",
			"is_finished": false,
			"is_cancelled": false
		}
	]
}
```

## To filter Job with keyword in title, GET request to /api/v1/job/?title=keyword

### Sample response from /api/v1/job/?title=job1

```json
{
	"count": 2,
	"next": null,
	"previous": null,
	"results": [
		{
			"pk": 10,
			"customer": {
				"id": 1,
				"username": "bob",
				"email": "khoibaka@gmail.com",
				"full_name": "Khoi Le",
				"phone_number": "123456789",
				"address": "",
				"birthday": "2021-05-05",
				"skill": "no_skill",
				"rating": "0.0",
				"is_provider": false
			},
			"title": "job10",
			"description": "Cool Job",
			"is_finished": false,
			"is_cancelled": false
		},
		{
			"pk": 11,
			"customer": {
				"id": 1,
				"username": "bob",
				"email": "khoibaka@gmail.com",
				"full_name": "Khoi Le",
				"phone_number": "123456789",
				"address": "",
				"birthday": "2021-05-05",
				"skill": "no_skill",
				"rating": "0.0",
				"is_provider": false
			},
			"title": "job11",
			"description": "Cool Job",
			"is_finished": false,
			"is_cancelled": false
		}
	]
}
```

## To filter Job with keyword in description, GET request to /api/v1/job/?description=keyword

## To create a category, POST request to /api/v1/category/create with json using an admin token
```json
{
    "name":"yard cleaning123",
	"parent": <parent_id>
}
```

### Sample response from /api/v1/category/create
```json
{
    "pk": 2,
    "name": "yard cleaning123",
    "parent": null
}
```

## To update a category, PATCH request to /api/v1/category/\<pk>/update with json using an admin token
```json
{
    "name":"yard cleaning123",
	"parent": <parent_id>
}
```

### Sample response from /api/v1/category/create
```json
{
    "pk": 2,
    "name": "yard cleaning123",
    "parent": null
}
```

## To delete a category, DELETE request to /api/v1/category/\<pk>/delete  using an admin token

## To query for a list of category, GET request to  /api/v1/category

## To query for a category using name or id, GET request to /api/v1/category/?name=\<name>&?id=\<id>