* Steps to init server
  - pip install pipenv
  - pipenv install
  - pipenv shell
  - cd restAPI
  - python manage.py runserver

* May need remove `Pipfile.lock` when encounter platform issues during `pipenv install` and re-run the command.
  
* Step to install new package
  - pipenv install [package-name]

* Tasks to test:
  - Management Commands:
    - createsuperuser
  - UserAPI:
    - UserRegister
    - UserLogin
    - UserList
    - UserRetrieve
    - UserUpdate
    - UserSkillList
    - UserSkillCreate
  - Category API (Tags)
    - CategoryCreate
    - CategoryList
    - CategoryUpdate
    - CategoryDelete