import login from "../pages/login";
import dashboard from "../pages/dashboard";

describe('Orange HRM Tests - Login', () => {

  beforeEach(() =>  {
    //Arrange
    login.visitarPagina()
  })

  //cenário de sucesso no login
  it('Login - Sucess', () => {
    //Act
    login.loginSucess()
    dashboard.confirmDashboardPage()
  })

  //cenário de falha no login
  it('Login - fail', () => {
    //Act
    login.loginFail()
  })
})
