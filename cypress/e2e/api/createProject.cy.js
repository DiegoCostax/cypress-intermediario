import { faker } from '@faker-js/faker'

describe('Create Project', () => {
  beforeEach(() => cy.api_deleteProjects())

  
  it('successfully', () => {
    const project = {
      name: `project-${faker.datatype.uuid()}`,
      description: faker.random.words(5)
    }


    // o comando createProject faz a requisi��o da cria��o
    //ap�s isso vem o then que recebe a fun��o que recebe o response (resposta da requisi��o)
    // ap�s isso validar com o expect as infor do response
    cy.api_createProject(project)
      .then(response => {
        expect(response.status).to.equal(201)
        expect(response.body.name).to.equal(project.name)
        expect(response.body.description).to.equal(project.description)
      })
  })
})
