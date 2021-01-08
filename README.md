# Use pipenv:
- pip install pipenv
- pipenv install
- pipenv shell
## Install pipenv package
- pipenv install [package-name]


# Running backend server
- cd backend
- npm install
- node server.js
- Go to http://localhost:4000/graphql
- try this query:
query{
  jobs{
    title,
    description,
    hourly,
    pay_amount,
    creator{
      email
    }
  }
}