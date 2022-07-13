# Server Base - Proyecto ONG


## Envinroment setup

1) Create database
2) Copy .env.example to .env and fill with database credentials.

To install dependencies, run
``` bash
npm install
```

3) Migrations:
``` bash
npx sequelize-cli db:migrate
```

4) Seeders:
``` bash
npx sequelize-cli db:seed:all
```

## Start local server

``` bash
npm start
```

## User test (all have the same password):

password = password123;

## Admin (roleId = 1)
"email1": "user1@test.com"
"email3": "user3@test.com"
"email5": "user5@test.com"
"email7": "user7@test.com"
"email9": "user9@test.com"
"email11": "user11@test.com"
"email13": "user13@test.com"
"email15": "user15@test.com"
"email17": "user17@test.com"
"email19": "user19@test.com"

## Standard (roleId = 2){
"email2": "user2@test.com"
"email4": "user4@test.com"
"email6": "user6@test.com"
"email8": "user8@test.com"
"email10": "user10@test.com"
"email12": "user12@test.com"
"email14": "user14@test.com"
"email16": "user16@test.com"
"email18": "user18@test.com"
"email20": "user20@test.com"
}