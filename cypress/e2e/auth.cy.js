/// <reference types='Cypress' />
const BodyData = require('../helpers/bodyData')


describe('Auth Tests', () => {
  const newData = new BodyData()
  const adminClientData = newData.getClientAdminUserData()
  const adminBusinessData = newData.getBusinessAdminUserData()
  it('POST Client Auth - Happy path', () => {
    // Make a GET request to the API
    cy.request({
      method: 'POST',
      url: '/api/v1/account/client_auth',
      body: newData.getAuthAdminUser(),
    }).then((response) => {
      // Verify the status code
      expect(response.status).to.eq(200)

      // Verify the response body
      expect(response.body).to.have.property('user')
      expect(response.body).to.have.property('token')
      expect(response.body.user).to.deep.equal(adminClientData)
      expect(response.body.token).to.not.be.empty
      cy.log(response.body)
    })
  })

  it('POST Client Auth - Wrong Login Data', () => {
    // Make a GET request to the API
    cy.request({
      method: 'POST',
      url: '/api/v1/account/client_auth',
      body: newData.getWrongAuthAdminUser(),
    }).then((response) => {
      // Verify the status code
      expect(response.status).to.eq(200)

      // Verify the response body
      expect(response.body).to.not.have.property('user')
      expect(response.body).to.not.have.property('token')
      expect(response.body).to.have.property('message', 'Invalid user or password!')
      cy.log(response.body)
    })
  })

  it('POST Business Auth - Happy path', () => {
    // Make a GET request to the API
    cy.request({
      method: 'POST',
      url: '/api/v1/account/business_auth',
      body: newData.getAuthAdminUser(),
    }).then((response) => {
      // Verify the status code
      expect(response.status).to.eq(200)

      // Verify the response body
      expect(response.body).to.have.property('user')
      expect(response.body).to.have.property('token')
      expect(response.body.user).to.deep.equal(adminBusinessData)
      expect(response.body.token).to.not.be.empty
      cy.log(response.body)
    })
  })

  it('POST Business Auth - Wrong Login Data', () => {
    // Make a GET request to the API
    cy.request({
      method: 'POST',
      url: '/api/v1/account/business_auth',
      body: newData.getWrongAuthAdminUser(),
    }).then((response) => {
      // Verify the status code
      expect(response.status).to.eq(200)

      // Verify the response body
      expect(response.body).to.not.have.property('user')
      expect(response.body).to.not.have.property('token')
      expect(response.body).to.have.property('message', 'Invalid user or password!')
      cy.log(response.body)
    })
  })
})