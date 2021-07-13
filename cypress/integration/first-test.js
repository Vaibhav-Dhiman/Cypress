/// <reference types="cypress" />

it('search test', function() {
    cy.visit('https://www.cowin.gov.in/')
    cy.get('#mat-input-0').type('110032{enter}')
    cy.get(':nth-child(1) > .agefilterblock > :nth-child(1) > .accessibility-plugin-ac').click()
    cy.get(':nth-child(2) > .agefilterblock > :nth-child(2) > .accessibility-plugin-ac').click()
    cy.get('li.ng-star-inserted > .agefilterblock > :nth-child(1) > .accessibility-plugin-ac').click()
    cy.get('li.ng-star-inserted > .agefilterblock > :nth-child(1) > .accessibility-plugin-ac').click()
    cy.get(':nth-child(2) > .agefilterblock > :nth-child(2) > .accessibility-plugin-ac').click()
    cy.get(':nth-child(1) > .agefilterblock > :nth-child(1) > .accessibility-plugin-ac').click()
    

    //18-44
    cy.get(':nth-child(1) > .agefilterblock > :nth-child(2) > .accessibility-plugin-ac').click()
    cy.get(':nth-child(1) > .agefilterblock > :nth-child(1) > .accessibility-plugin-ac').click()
    cy.get(':nth-child(2) > .agefilterblock > :nth-child(2) > .accessibility-plugin-ac').click()
    cy.get('li.ng-star-inserted > .agefilterblock > :nth-child(1) > .accessibility-plugin-ac').click()
    
    cy.get('li.ng-star-inserted > .agefilterblock > :nth-child(1) > .accessibility-plugin-ac').click()
    cy.get(':nth-child(2) > .agefilterblock > :nth-child(2) > .accessibility-plugin-ac').click()
    cy.get(':nth-child(1) > .agefilterblock > :nth-child(1) > .accessibility-plugin-ac').click()
    cy.get(':nth-child(1) > .agefilterblock > :nth-child(2) > .accessibility-plugin-ac').click()

// 45 +
cy.get(':nth-child(3) > .agefilterblock > :nth-child(3) > .accessibility-plugin-ac')
cy.get(':nth-child(3) > .agefilterblock > :nth-child(3) > .accessibility-plugin-ac')
    //cy.get('#mat-tab-label-0-1 > .mat-tab-label-content').click()
})
