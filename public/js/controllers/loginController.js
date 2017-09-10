var inkedin;
(function (inkedin) {
    var controllers;
    (function (controllers) {
        var LoginController = (function () {
            function LoginController(artistService, loginService, $state, $stateParams) {
                this.artistService = artistService;
                this.loginService = loginService;
                this.$state = $state;
                this.$stateParams = $stateParams;
                this.artists = this.artistService.getArtists();
            }
            LoginController.prototype.login = function () {
                if (this.artist.username && this.artist.password) {
                    for (var i = 0; i < this.artists.length; i++) {
                        this.artists[i];
                        if (this.artist.username === this.artists[i].username && this.artist.password === this.artists[i].password) {
                            this.loginService.toggleLogin();
                            if (this.loginService.userStatus) {
                                this.$state.go('dashboard', { id: this.artists[i]._id });
                            }
                            break;
                        }
                    }
                }
                else {
                    alert('Invalid username and / or password.');
                }
            };
            LoginController.$inject = ['artistService', 'loginService', '$state', '$stateParams'];
            return LoginController;
        }());
        controllers.LoginController = LoginController;
    })(controllers = inkedin.controllers || (inkedin.controllers = {}));
})(inkedin || (inkedin = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW5Db250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdHMvY29udHJvbGxlcnMvbG9naW5Db250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQVUsT0FBTyxDQThCaEI7QUE5QkQsV0FBVSxPQUFPO0lBQUMsSUFBQSxXQUFXLENBOEI1QjtJQTlCaUIsV0FBQSxXQUFXO1FBRTNCO1lBTUUseUJBQW9CLGFBQWEsRUFBVSxZQUFZLEVBQVUsTUFBTSxFQUFVLFlBQVk7Z0JBQXpFLGtCQUFhLEdBQWIsYUFBYSxDQUFBO2dCQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFBO2dCQUFVLFdBQU0sR0FBTixNQUFNLENBQUE7Z0JBQVUsaUJBQVksR0FBWixZQUFZLENBQUE7Z0JBQzNGLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNqRCxDQUFDO1lBRU0sK0JBQUssR0FBWjtnQkFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7b0JBQ2pELEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQzt3QkFDN0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDaEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDOzRCQUMzRyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDOzRCQUNoQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0NBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7NEJBQzNELENBQUM7NEJBQ0QsS0FBSyxDQUFDO3dCQUNSLENBQUM7b0JBQ0gsQ0FBQztnQkFDSCxDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNOLEtBQUssQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO2dCQUMvQyxDQUFDO1lBQ0gsQ0FBQztZQXJCTSx1QkFBTyxHQUFHLENBQUMsZUFBZSxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsY0FBYyxDQUFDLENBQUM7WUFzQi9FLHNCQUFDO1NBQUEsQUExQkQsSUEwQkM7UUExQlksMkJBQWUsa0JBMEIzQixDQUFBO0lBRUgsQ0FBQyxFQTlCaUIsV0FBVyxHQUFYLG1CQUFXLEtBQVgsbUJBQVcsUUE4QjVCO0FBQUQsQ0FBQyxFQTlCUyxPQUFPLEtBQVAsT0FBTyxRQThCaEIiLCJzb3VyY2VzQ29udGVudCI6WyJuYW1lc3BhY2UgaW5rZWRpbi5jb250cm9sbGVycyB7XHJcblxyXG4gIGV4cG9ydCBjbGFzcyBMb2dpbkNvbnRyb2xsZXIge1xyXG4gICAgcHVibGljIGFydGlzdHM7XHJcbiAgICBwdWJsaWMgYXJ0aXN0O1xyXG5cclxuICAgIHN0YXRpYyAkaW5qZWN0ID0gWydhcnRpc3RTZXJ2aWNlJywgJ2xvZ2luU2VydmljZScsICckc3RhdGUnLCAnJHN0YXRlUGFyYW1zJ107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhcnRpc3RTZXJ2aWNlLCBwcml2YXRlIGxvZ2luU2VydmljZSwgcHJpdmF0ZSAkc3RhdGUsIHByaXZhdGUgJHN0YXRlUGFyYW1zKSB7XHJcbiAgICAgIHRoaXMuYXJ0aXN0cyA9IHRoaXMuYXJ0aXN0U2VydmljZS5nZXRBcnRpc3RzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvZ2luKCkge1xyXG4gICAgICBpZiAodGhpcy5hcnRpc3QudXNlcm5hbWUgJiYgdGhpcy5hcnRpc3QucGFzc3dvcmQpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJ0aXN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgdGhpcy5hcnRpc3RzW2ldO1xyXG4gICAgICAgICAgaWYgKHRoaXMuYXJ0aXN0LnVzZXJuYW1lID09PSB0aGlzLmFydGlzdHNbaV0udXNlcm5hbWUgJiYgdGhpcy5hcnRpc3QucGFzc3dvcmQgPT09IHRoaXMuYXJ0aXN0c1tpXS5wYXNzd29yZCkge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2luU2VydmljZS50b2dnbGVMb2dpbigpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5sb2dpblNlcnZpY2UudXNlclN0YXR1cykge1xyXG4gICAgICAgICAgICAgIHRoaXMuJHN0YXRlLmdvKCdkYXNoYm9hcmQnLCB7IGlkOiB0aGlzLmFydGlzdHNbaV0uX2lkIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhbGVydCgnSW52YWxpZCB1c2VybmFtZSBhbmQgLyBvciBwYXNzd29yZC4nKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIl19