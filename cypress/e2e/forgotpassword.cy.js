describe('Forgot Password Feature', () => {
    it('Move to Forgot Password Feature Page', () => {
        //Visit URL
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        //Verify Element
        //cy.get('[class="orangehrm-login-branding"]')

        //hit button
        cy.get('[class="oxd-text oxd-text--p orangehrm-login-forgot-header"]').click()

        //Verify
        cy.get('[class="oxd-text oxd-text--h6 orangehrm-forgot-password-title"]').should('be.visible') //Verify Element
        cy.url().should('include', '/auth/requestPasswordResetCode') //Verify URL
    })

    it('Input correct credential', () => {
        //Visit URL
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

         //hit button
        cy.get('[class="oxd-text oxd-text--p orangehrm-login-forgot-header"]').click()
 
         //Verify
        cy.get('[class="oxd-text oxd-text--h6 orangehrm-forgot-password-title"]').should('be.visible') //Verify Element
        cy.url().should('include', '/auth/requestPasswordResetCode') //Verify URL

        //input username
        cy.get('[class="oxd-input oxd-input--active"]').type('Admin')

        //hit reset password button
        cy.get('[class="oxd-button oxd-button--large oxd-button--secondary orangehrm-forgot-password-button orangehrm-forgot-password-button--reset"]').click()

        //verify reset password success
        cy.get('[class="oxd-text oxd-text--h6 orangehrm-forgot-password-title"]').should('be.visible')
    })

    it('Input empty data', () => {
        //Visit URL
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

         //hit button
        cy.get('[class="oxd-text oxd-text--p orangehrm-login-forgot-header"]').click()
 
         //Verify
        cy.get('[class="oxd-text oxd-text--h6 orangehrm-forgot-password-title"]').should('be.visible') //Verify Element
        cy.url().should('include', '/auth/requestPasswordResetCode') //Verify URL

        //hit reset password button
        cy.get('[class="oxd-button oxd-button--large oxd-button--secondary orangehrm-forgot-password-button orangehrm-forgot-password-button--reset"]').click()

        //verify error message
        cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').should('be.visible')
    })

    it('Input incorrect credential', () => {
        //Visit URL
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

         //hit button
        cy.get('[class="oxd-text oxd-text--p orangehrm-login-forgot-header"]').click()
 
         //Verify
        cy.get('[class="oxd-text oxd-text--h6 orangehrm-forgot-password-title"]').should('be.visible') //Verify Element
        cy.url().should('include', '/auth/requestPasswordResetCode') //Verify URL

        //input username
        cy.get('[class="oxd-input oxd-input--active"]').type('Amin')

        //hit reset password button
        cy.get('[class="oxd-button oxd-button--large oxd-button--secondary orangehrm-forgot-password-button orangehrm-forgot-password-button--reset"]').click()

        //verify error message
        cy.get('[class="error-code"]').should('be.visible')
    })

})