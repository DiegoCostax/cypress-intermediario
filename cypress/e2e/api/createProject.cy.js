import { faker } from '@faker-js/faker'

describe('Create Project', () => {
  beforeEach(() => cy.api_deleteProjects())

  
  it('successfully', () => {
    const project = {
      name: `project-${faker.datatype.uuid()}`,
      description: faker.random.words(5)
    }


    // o comando createProject faz a requisição da criação
    //após isso vem o then que recebe a função que recebe o response (resposta da requisição)
    // após isso validar com o expect as infor do response
    cy.api_createProject(project)
      .then(response => {
        expect(response.status).to.equal(201)
        expect(response.body.name).to.equal(project.name)
        expect(response.body.description).to.equal(project.description)
      })
  })
})
