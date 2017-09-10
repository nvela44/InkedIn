var inkedin;
(function (inkedin) {
    var controllers;
    (function (controllers) {
        var HomeController = (function () {
            function HomeController($state) {
                this.$state = $state;
            }
            HomeController.prototype.goRegister = function () {
                this.$state.go('register');
            };
            HomeController.prototype.goLogin = function () {
                this.$state.go('login');
            };
            HomeController.prototype.displayGallery = function () {
                this.$state.go('gallery');
            };
            HomeController.$inject = ['$state'];
            return HomeController;
        }());
        controllers.HomeController = HomeController;
    })(controllers = inkedin.controllers || (inkedin.controllers = {}));
})(inkedin || (inkedin = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZUNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90cy9jb250cm9sbGVycy9ob21lQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLE9BQU8sQ0FvQmhCO0FBcEJELFdBQVUsT0FBTztJQUFDLElBQUEsV0FBVyxDQW9CNUI7SUFwQmlCLFdBQUEsV0FBVztRQUUzQjtZQUdFLHdCQUFvQixNQUFNO2dCQUFOLFdBQU0sR0FBTixNQUFNLENBQUE7WUFBRyxDQUFDO1lBRXZCLG1DQUFVLEdBQWpCO2dCQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzdCLENBQUM7WUFFTSxnQ0FBTyxHQUFkO2dCQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzFCLENBQUM7WUFFTSx1Q0FBYyxHQUFyQjtnQkFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM1QixDQUFDO1lBZE0sc0JBQU8sR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBZTlCLHFCQUFDO1NBQUEsQUFoQkQsSUFnQkM7UUFoQlksMEJBQWMsaUJBZ0IxQixDQUFBO0lBRUgsQ0FBQyxFQXBCaUIsV0FBVyxHQUFYLG1CQUFXLEtBQVgsbUJBQVcsUUFvQjVCO0FBQUQsQ0FBQyxFQXBCUyxPQUFPLEtBQVAsT0FBTyxRQW9CaEIiLCJzb3VyY2VzQ29udGVudCI6WyJuYW1lc3BhY2UgaW5rZWRpbi5jb250cm9sbGVycyB7XHJcblxyXG4gIGV4cG9ydCBjbGFzcyBIb21lQ29udHJvbGxlciB7XHJcbiAgICBzdGF0aWMgJGluamVjdCA9IFsnJHN0YXRlJ107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSAkc3RhdGUpIHt9XHJcblxyXG4gICAgcHVibGljIGdvUmVnaXN0ZXIoKSB7XHJcbiAgICAgIHRoaXMuJHN0YXRlLmdvKCdyZWdpc3RlcicpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnb0xvZ2luKCkge1xyXG4gICAgICB0aGlzLiRzdGF0ZS5nbygnbG9naW4nKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGlzcGxheUdhbGxlcnkoKSB7XHJcbiAgICAgIHRoaXMuJHN0YXRlLmdvKCdnYWxsZXJ5Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=