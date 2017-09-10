var inkedin;
(function (inkedin) {
    var services;
    (function (services) {
        var LoginService = (function () {
            function LoginService() {
                this.userStatus = false;
            }
            LoginService.prototype.toggleLogin = function () {
                this.userStatus = !this.userStatus;
            };
            ;
            return LoginService;
        }());
        services.LoginService = LoginService;
        angular.module('inkedin').service('loginService', LoginService);
    })(services = inkedin.services || (inkedin.services = {}));
})(inkedin || (inkedin = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW5TZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdHMvc2VydmljZXMvbG9naW5TZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQVUsT0FBTyxDQWdCaEI7QUFoQkQsV0FBVSxPQUFPO0lBQUMsSUFBQSxRQUFRLENBZ0J6QjtJQWhCaUIsV0FBQSxRQUFRO1FBRXhCO1lBR0U7Z0JBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDMUIsQ0FBQztZQUVNLGtDQUFXLEdBQWxCO2dCQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ3JDLENBQUM7WUFBQSxDQUFDO1lBQ0osbUJBQUM7UUFBRCxDQUFDLEFBVkQsSUFVQztRQVZZLHFCQUFZLGVBVXhCLENBQUE7UUFFRCxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFFbEUsQ0FBQyxFQWhCaUIsUUFBUSxHQUFSLGdCQUFRLEtBQVIsZ0JBQVEsUUFnQnpCO0FBQUQsQ0FBQyxFQWhCUyxPQUFPLEtBQVAsT0FBTyxRQWdCaEIiLCJzb3VyY2VzQ29udGVudCI6WyJuYW1lc3BhY2UgaW5rZWRpbi5zZXJ2aWNlcyB7XHJcblxyXG4gIGV4cG9ydCBjbGFzcyBMb2dpblNlcnZpY2Uge1xyXG4gICAgcHVibGljIHVzZXJTdGF0dXM6IGJvb2xlYW47XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgIHRoaXMudXNlclN0YXR1cyA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b2dnbGVMb2dpbigpIHtcclxuICAgICAgdGhpcy51c2VyU3RhdHVzID0gIXRoaXMudXNlclN0YXR1cztcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBhbmd1bGFyLm1vZHVsZSgnaW5rZWRpbicpLnNlcnZpY2UoJ2xvZ2luU2VydmljZScsIExvZ2luU2VydmljZSk7XHJcblxyXG59XHJcbiJdfQ==