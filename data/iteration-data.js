const getIterationData = (testUsers) => {
    return [
        {
            "email": testUsers.user1.email,
            "password": testUsers.user1.password
        }
    ]
}

module.exports = {
    getIterationData
}