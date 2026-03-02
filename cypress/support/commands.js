Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (data = {
    firstName: 'Pitter',
    lastName: 'Parker',
    email: 'teste@teste.com',
    phone: '123456789',
    openTextArea: 'teste'
}) => {

    cy.get('#firstName').type(data.firstName)
    cy.get('#lastName').type(data.lastName)
    cy.get('#email').type(data.email)
    cy.get('#phone').type(data.phone)
    cy.get('#open-text-area').type(data.openTextArea)
    cy.contains('button', 'Enviar').click()
})