class BodyData {
    getAuthAdminUser() {
        return {
            email: 'tiago.eugenio.andre@gmail.com',
            password: 'aGZJAjku3OQmljZXAxNzE3N1iNqa7Ysx4'
        }
    }

    getWrongAuthAdminUser() {
        return {
            email: 'tiago.eugenio.andre@gmail.com',
            password: 'wrong'
        }
    }

    getClientAdminUserData() {
        return {
            email: 'tiago.eugenio.andre@gmail.com',
            firstName: 'Tiago',
            lastName: 'Andre',
            dayOfBirth: '2022-10-01T00:00:00'
        }
    }

    getBusinessAdminUserData() {
        return {
            email: 'tiago.eugenio.andre@gmail.com',
            firstName: 'Tiago',
            lastName: 'Business',
            dayOfBirth: '2022-10-01T00:00:00'
        }
    } 
}

module.exports = BodyData
