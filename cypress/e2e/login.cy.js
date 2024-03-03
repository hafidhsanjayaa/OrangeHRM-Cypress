describe('Login', () => {

  it('Success Login with correct credential', () => {
      //Visit URL
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //Verify Element
    cy.get('[class="orangehrm-login-branding"]')

    //Input Username and Password
    cy.get('[name="username"]').type('Admin')
    cy.get('[name="username"]').should('have.value', 'Admin') //verify input data
    cy.get('[name="password"]').type('admin123')
    cy.get('[name="password"]').should('have.value', 'admin123') //verify input data

    //hit button
    cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click()
    cy.get('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]').should('be.visible') //Verify Element

    //verify URL
    cy.url().should('include', '/dashboard/index')

  })

  it('Failed Login with both empty username and password', () => {
    //Visit URL
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //Verify Element
    cy.get('[class="orangehrm-login-branding"]')

    //hit button
    cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click()

    cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').should('be.visible') //Verify Element
    cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').should('be.visible') //Verify Element

  })

  it('Failed Login with empty username', () => {
    //Visit URL
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //Verify Element
    cy.get('[class="orangehrm-login-branding"]')

    //Input password
    cy.get('[name="password"]').type('admin123')
    cy.get('[name="password"]').should('have.value', 'admin123') //verify input data

    //hit button
    cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click()

    cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').should('be.visible') //Verify Element Error Message

  })

  it('Failed Login with empty password', () => {
    //Visit URL
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //Verify Element
    cy.get('[class="orangehrm-login-branding"]')

    //Input password
    cy.get('[name="username"]').type('Admin')
    cy.get('[name="username"]').should('have.value', 'Admin') //verify input data

    //hit button
    cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click()

    cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').should('be.visible') //Verify Element Error Message

  })

  it('Failed Login with wrong username', () => {
    //Visit URL
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //Verify Element
    cy.get('[class="orangehrm-login-branding"]')

    //Input password
    cy.get('[name="username"]').type('Amin')
    cy.get('[name="username"]').should('have.value', 'Amin') //verify input data
    cy.get('[name="password"]').type('admin123')
    cy.get('[name="password"]').should('have.value', 'admin123') //verify input data

    //hit button
    cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click()

    cy.get('[class="oxd-alert-content oxd-alert-content--error"]').should('be.visible') //Verify Element Error Message

  })

  it('Failed Login with wrong password', () => {
    //Visit URL
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //Verify Element
    cy.get('[class="orangehrm-login-branding"]')

    //Input password
    cy.get('[name="username"]').type('Admin')
    cy.get('[name="username"]').should('have.value', 'Admin') //verify input data
    cy.get('[name="password"]').type('admin12345')
    cy.get('[name="password"]').should('have.value', 'admin12345') //verify input data

    //hit button
    cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click()

    cy.get('[class="oxd-alert-content oxd-alert-content--error"]').should('be.visible') //Verify Element Error Message

  })

  it('Failed Login with wrong credential', () => {
    //Visit URL
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //Verify Element
    cy.get('[class="orangehrm-login-branding"]')

    //Input password
    cy.get('[name="username"]').type('Amin')
    cy.get('[name="username"]').should('have.value', 'Amin') //verify input data
    cy.get('[name="password"]').type('admin12345')
    cy.get('[name="password"]').should('have.value', 'admin12345') //verify input data

    //hit button
    cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click()

    cy.get('[class="oxd-alert-content oxd-alert-content--error"]').should('be.visible') //Verify Element Error Message

  })

})