const getIterationData = (testUsers) => {
    return [
        {
            "email": testUsers.staging.user1.email,
            "password": testUsers.staging.user1.password
        },
        {
            "email": testUsers.staging.user2.email,
            "password": testUsers.staging.user2.password
        },
        {
            "email": testUsers.staging.user3.email,
            "password": testUsers.staging.user3.password
        },
        {
            "email": testUsers.staging.user4.email,
            "password": testUsers.staging.user4.password
        },
        {
            "email": testUsers.staging.user5.email,
            "password": testUsers.staging.user5.password
        },
        {
            "email": testUsers.staging.user6.email,
            "password": testUsers.staging.user6.password
        }
    ]
}

module.exports = {
    getIterationData
}