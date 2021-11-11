const testData = require('../data/iteration-data')

let args = process.argv.slice(2);

let users = JSON.parse(args[1]);
let iterationData = testData.getIterationData(users);

console.log(iterationData);


//let users = JSON.parse(arguments[0])

//let argu = `{'user1': {'email': 'OUTesting1@email.com', 'password': '12$345'},'user2': {'email': 'OUTesting2@email.com','password': '12\$345'},'user3': { 'email': 'OUTesting3@email.com','password': '12\$345'},'user4': {  'email': 'OUTesting4@email.com','password': '12\$345'}}`


//console.log(argu);

/*let jsonfied = JSON.parse(arguments[0])  ∫
console.log(arguments) 
console.log("Email: " + jsonfied[0].user1.email + " Password: " + jsonfied[0].user1.password);
*/ 
/*
let users = JSON.stringify(arguments[0])

let usersJson = JSON.parse(arguments[0])
console.log()
console.log(" THIS IS THE WHOLE USERS LIST: "+ usersJson)
*/
//console.log(args)

//console.log(JSON.parse(JSON.stringify(arguments[0]))) 
/*
let newValue = JSON.parse(args[0]);

console.log(newValue.user1.email)
console.log(newValue.user1.password)
*/
//console.log(users);    

//console.log(users[0]['OUTesting1@email.com']);

/*
let mixedData = [
    {
        'email': 'OUTesting1@email.com',
        'password': users[0]['OUTesting1@email.com'],
        'testData1' : 'testdata', 
        'testData2' : 'testdata', 
        'testData3' : 'testdata',
        'testData4' : 'testdata',
    }, 
    {
        'email': 'OUTesting3@email.com',
        'password': users[2]['OUTesting3@email.com'],
        'testData1' : 'testdata',
        'testData2' : 'testdata',
        'testData3' : 'testdata',
        'testData4' : 'testdata',
    }
]*/

//console.log()
//console.log(mixedData)
//console.log(Object.keys(mixedData[0]))

 
//console.log(arguments);     