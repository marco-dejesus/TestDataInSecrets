let arguments = process.argv.slice(2);

let users = JSON.parse(arguments[0])

console.log(arguments);


//console.log(users);   

//console.log(users[0]["OUTesting1@email.com"]);

let mixedData = [
    {
        "email": "OUTesting1@email.com",
        "password": users[0]["OUTesting1@email.com"],
        "testData1" : "testdata",
        "testData2" : "testdata",
        "testData3" : "testdata",
        "testData4" : "testdata",
    },
    {
        "email": "OUTesting3@email.com",
        "password": users[2]["OUTesting3@email.com"],
        "testData1" : "testdata",
        "testData2" : "testdata",
        "testData3" : "testdata",
        "testData4" : "testdata",
    }
]

//console.log()
console.log(mixedData)
//console.log(Object.keys(mixedData[0]))


console.log(arguments);   