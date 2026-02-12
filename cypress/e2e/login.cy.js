import login from "../pages/login";

describe('Orange HRM Tests', () => {

  beforeEach(() =>  {
    //Arrange
    login.visitarPagina()
  })

  //cenário de sucesso
  it('Login - Sucess', () => {
    login.loginSucess()
  })

  //cenário de falha
  it('Login - fail', () => {
    login.loginFail()
  })
})  