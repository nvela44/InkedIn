var inkedin;
(function (inkedin) {
    var controllers;
    (function (controllers) {
        var RegisterController = (function () {
            function RegisterController(artistService, $state, $stateParams) {
                this.artistService = artistService;
                this.$state = $state;
                this.$stateParams = $stateParams;
            }
            RegisterController.prototype.createUser = function () {
                var _this = this;
                if (this.artist.password === this.artist.verifyPassword) {
                    var newArtist = {
                        firstName: this.artist.firstName,
                        lastName: this.artist.lastName,
                        email: this.artist.email,
                        username: this.artist.username,
                        password: this.artist.password
                    };
                    this.artistService.saveArtist(newArtist).then(function () {
                        _this.resetUserData();
                        _this.$state.go('login');
                    }).catch(function () {
                        alert('Oops! Your account could not be created. Try again later!');
                    });
                }
                else {
                    alert('Passwords do not match.');
                }
            };
            RegisterController.prototype.resetUserData = function () {
                this.artist.firstName = '';
                this.artist.lastName = '';
                this.artist.email = '';
                this.artist.username = '';
                this.artist.password = '';
                this.artist.verifyPassword = '';
            };
            RegisterController.$inject = ['artistService', '$state', '$stateParams'];
            return RegisterController;
        }());
        controllers.RegisterController = RegisterController;
    })(controllers = inkedin.controllers || (inkedin.controllers = {}));
})(inkedin || (inkedin = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXJDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdHMvY29udHJvbGxlcnMvcmVnaXN0ZXJDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQVUsT0FBTyxDQXdDaEI7QUF4Q0QsV0FBVSxPQUFPO0lBQUMsSUFBQSxXQUFXLENBd0M1QjtJQXhDaUIsV0FBQSxXQUFXO1FBRTNCO1lBS0UsNEJBQW9CLGFBQWEsRUFBVSxNQUFNLEVBQVUsWUFBWTtnQkFBbkQsa0JBQWEsR0FBYixhQUFhLENBQUE7Z0JBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBQTtnQkFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBQTtZQUFHLENBQUM7WUFFcEUsdUNBQVUsR0FBakI7Z0JBQUEsaUJBbUJDO2dCQWxCQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7b0JBQ3hELElBQUksU0FBUyxHQUFHO3dCQUNkLFNBQVMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVM7d0JBQ2hDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVE7d0JBQzlCLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7d0JBQ3hCLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVE7d0JBQzlCLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVE7cUJBQy9CLENBQUM7b0JBRUYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDO3dCQUM1QyxLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7d0JBQ3JCLEtBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUMxQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7d0JBQ1AsS0FBSyxDQUFDLDJEQUEyRCxDQUFDLENBQUM7b0JBQ3JFLENBQUMsQ0FBQyxDQUFDO2dCQUNMLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ04sS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7Z0JBQ25DLENBQUM7WUFDSCxDQUFDO1lBRU0sMENBQWEsR0FBcEI7Z0JBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO2dCQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztnQkFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO2dCQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztZQUNsQyxDQUFDO1lBaENNLDBCQUFPLEdBQUcsQ0FBQyxlQUFlLEVBQUUsUUFBUSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1lBaUMvRCx5QkFBQztTQUFBLEFBcENELElBb0NDO1FBcENZLDhCQUFrQixxQkFvQzlCLENBQUE7SUFFSCxDQUFDLEVBeENpQixXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQXdDNUI7QUFBRCxDQUFDLEVBeENTLE9BQU8sS0FBUCxPQUFPLFFBd0NoQiIsInNvdXJjZXNDb250ZW50IjpbIm5hbWVzcGFjZSBpbmtlZGluLmNvbnRyb2xsZXJzIHtcclxuXHJcbiAgZXhwb3J0IGNsYXNzIFJlZ2lzdGVyQ29udHJvbGxlciB7XHJcbiAgICBwdWJsaWMgYXJ0aXN0O1xyXG5cclxuICAgIHN0YXRpYyAkaW5qZWN0ID0gWydhcnRpc3RTZXJ2aWNlJywgJyRzdGF0ZScsICckc3RhdGVQYXJhbXMnXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFydGlzdFNlcnZpY2UsIHByaXZhdGUgJHN0YXRlLCBwcml2YXRlICRzdGF0ZVBhcmFtcykge31cclxuXHJcbiAgICBwdWJsaWMgY3JlYXRlVXNlcigpIHtcclxuICAgICAgaWYgKHRoaXMuYXJ0aXN0LnBhc3N3b3JkID09PSB0aGlzLmFydGlzdC52ZXJpZnlQYXNzd29yZCkge1xyXG4gICAgICAgIGxldCBuZXdBcnRpc3QgPSB7XHJcbiAgICAgICAgICBmaXJzdE5hbWU6IHRoaXMuYXJ0aXN0LmZpcnN0TmFtZSxcclxuICAgICAgICAgIGxhc3ROYW1lOiB0aGlzLmFydGlzdC5sYXN0TmFtZSxcclxuICAgICAgICAgIGVtYWlsOiB0aGlzLmFydGlzdC5lbWFpbCxcclxuICAgICAgICAgIHVzZXJuYW1lOiB0aGlzLmFydGlzdC51c2VybmFtZSxcclxuICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLmFydGlzdC5wYXNzd29yZFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuYXJ0aXN0U2VydmljZS5zYXZlQXJ0aXN0KG5ld0FydGlzdCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnJlc2V0VXNlckRhdGEoKTtcclxuICAgICAgICAgIHRoaXMuJHN0YXRlLmdvKCdsb2dpbicpO1xyXG4gICAgICAgIH0pLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgIGFsZXJ0KCdPb3BzISBZb3VyIGFjY291bnQgY291bGQgbm90IGJlIGNyZWF0ZWQuIFRyeSBhZ2FpbiBsYXRlciEnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhbGVydCgnUGFzc3dvcmRzIGRvIG5vdCBtYXRjaC4nKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZXNldFVzZXJEYXRhKCkge1xyXG4gICAgICB0aGlzLmFydGlzdC5maXJzdE5hbWUgPSAnJztcclxuICAgICAgdGhpcy5hcnRpc3QubGFzdE5hbWUgPSAnJztcclxuICAgICAgdGhpcy5hcnRpc3QuZW1haWwgPSAnJztcclxuICAgICAgdGhpcy5hcnRpc3QudXNlcm5hbWUgPSAnJztcclxuICAgICAgdGhpcy5hcnRpc3QucGFzc3dvcmQgPSAnJztcclxuICAgICAgdGhpcy5hcnRpc3QudmVyaWZ5UGFzc3dvcmQgPSAnJztcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ==