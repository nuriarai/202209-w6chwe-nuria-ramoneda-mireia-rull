# ROBOTS API

## Resource Lists Example

```
{
"name": "Johnny 5",
"image": "https://cdn.thecoolist.com/wp-content/uploads/2016/06/Johnny-5-famous-robot.jpg",
"features": {
"speed": 2,
"endurance": 6,
"creationDate": 19970619
},
"_id": "6368279c527687215ac16f84",
"__v": 0
}
```

## Available endpoints

[GET] /robots -> returns an array with all the robots from the DB

[GET] /robots/:idRobot -> returns one robot from the DB

[POST*] /robots/create -> creates a robot (without id) and recevies the created robot

[DELETE*] /robots/delete/:idRobot -> deletes one robot and returns its id
