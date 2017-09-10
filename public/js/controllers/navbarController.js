var navbarController = (function () {
    function navbarController(loginService, $state) {
        this.loginService = loginService;
        this.$state = $state;
        this.checkstatus();
    }
    navbarController.prototype.checkstatus = function () {
        if (this.loginService.userStatus) {
            this.isLoggedIn = true;
        }
        else {
            this.isLoggedIn = false;
        }
    };
    navbarController.prototype.exit = function () {
        this.loginService.userStatus = false;
        this.$state.go('home');
    };
    return navbarController;
}());
angular.module("inkedin").controller('navbarController', navbarController);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3RzL2NvbnRyb2xsZXJzL25hdmJhckNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFJRSwwQkFBcUIsWUFBWSxFQUFVLE1BQU07UUFBNUIsaUJBQVksR0FBWixZQUFZLENBQUE7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFBO1FBQy9DLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUVyQixDQUFDO0lBRU0sc0NBQVcsR0FBbEI7UUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDekIsQ0FBQztRQUFBLElBQUksQ0FBQyxDQUFDO1lBQ0wsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDMUIsQ0FBQztJQUNILENBQUM7SUFFTSwrQkFBSSxHQUFYO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ3hCLENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUFyQkQsSUFxQkM7QUFFRCxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgbmF2YmFyQ29udHJvbGxlciB7XHJcbiAgcHVibGljIGlzTG9nZ2VkSW47XHJcbiAgcHVibGljIGxvZ091dDtcclxuXHJcbiAgY29uc3RydWN0b3IgKHByaXZhdGUgbG9naW5TZXJ2aWNlLCBwcml2YXRlICRzdGF0ZSkge1xyXG4gICAgdGhpcy5jaGVja3N0YXR1cygpO1xyXG5cclxuICB9XHJcblxyXG4gIHB1YmxpYyBjaGVja3N0YXR1cygpIHtcclxuICAgIGlmICh0aGlzLmxvZ2luU2VydmljZS51c2VyU3RhdHVzKSB7XHJcbiAgICAgIHRoaXMuaXNMb2dnZWRJbiA9IHRydWU7XHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgIHRoaXMuaXNMb2dnZWRJbiA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGV4aXQoKSB7XHJcbiAgICB0aGlzLmxvZ2luU2VydmljZS51c2VyU3RhdHVzID0gZmFsc2U7XHJcbiAgICB0aGlzLiRzdGF0ZS5nbygnaG9tZScpXHJcbiAgfVxyXG59XHJcblxyXG5hbmd1bGFyLm1vZHVsZShcImlua2VkaW5cIikuY29udHJvbGxlcignbmF2YmFyQ29udHJvbGxlcicsIG5hdmJhckNvbnRyb2xsZXIpXHJcbiJdfQ==