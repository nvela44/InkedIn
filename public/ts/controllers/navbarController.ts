class navbarController {
  public isLoggedIn;
  public logOut;

  constructor (private loginService, private $state) {
    this.checkstatus();

  }

  public checkstatus() {
    if (this.loginService.userStatus) {
      this.isLoggedIn = true;
    }else {
      this.isLoggedIn = false;
    }
  }

  public exit() {
    this.loginService.userStatus = false;
    this.$state.go('home')
  }
}

angular.module("inkedin").controller('navbarController', navbarController)
