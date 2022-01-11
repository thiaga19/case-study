///<reference types="cypress" />

// Employee Management project.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('https://www.figma.com/proto/PJS5uZNqDxmIRJJXiwHTdx/Case-Study?node-id=1%3A2&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=10%3A7372&hide-ui=1')
  })

  it('Click Username', () => {
	 // cy.visit('https://www.figma.com/proto/PJS5uZNqDxmIRJJXiwHTdx/Case-Study?node-id=10%3A7372&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=10%3A7372&hide-ui=1')
	  cy.wait(10000);
	  cy.get('username').click()
  })
  
  it('Key in username and password',() =>{
	cy.get('username').type('john.smith')
	cy.get('password').type('*******')
	cy.get('btn').click()
  })
  
  it('Add Employee',()=>{
	  cy.contains('ADD NEW EMPLOYEE').click()
	  cy.get('Employee Name').type('Harry')
	  cy.get('Current Position').type('Staff')
	  cy.get('EmployeeID').type('23445')
	  cy.get('Address').select('Avenue Garden')
	  cy.get('Role').type('important')
	  cy.get('SAVE').click()
  })
  
  it('Edit Employee'), =>{
	  cy.get('Employee Name').shuld('have.value', 'Harry').within(() => {
		  get('edit').click()
		  cy.get('Current Position').type('Executive')
		  cy.get('SAVE').click()
	  })
  })
  
  it('Add New Address',()=>{
	  cy.contains('NEW ADDRESS').click()
	  cy.get('Address Name').type('Avenue Garden')
	  cy.get('Unit/Block/Building').type('No 123')
	  cy.get('Street').type('Quay Street')
	  cy.get('Postcode').type('14889')
	  cy.get('Country').type('Malaysia')
	  cy.get('SAVE').click()
  })
  
  it('Filter Address',()=>{
	  cy.get('Filter Address').type('Avenue').shuld('have.value', 'Avenue Garden')
	  
  })
  
  
		  	  
})