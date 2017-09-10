var inkedin;
(function (inkedin) {
    var controllers;
    (function (controllers) {
        var DashboardController = (function () {
            function DashboardController(artistService, loginService, $state, $stateParams) {
                this.artistService = artistService;
                this.loginService = loginService;
                this.$state = $state;
                this.$stateParams = $stateParams;
                var artistId = this.$stateParams['id'];
                this.artist = this.artistService.getArtistById(artistId);
                this.fsEmail = this.artist.email;
            }
            DashboardController.prototype.editProfile = function () {
                this.$state.go('edit', { id: this.$stateParams['id'] });
            };
            DashboardController.prototype.addStyle = function () {
                if (this.newStyle) {
                    var styleToAdd = this.newStyle;
                    this.artist.styles.push(styleToAdd);
                    this.artistService.updateArtist(this.$stateParams['id'], this.artist);
                    this.newStyle = '';
                }
                else {
                    alert('Invalid input.');
                }
            };
            DashboardController.prototype.removeStyle = function (index) {
                this.artist.styles.splice(index, 1);
                this.artistService.updateArtist(this.$stateParams['id'], this.artist);
            };
            DashboardController.prototype.uploadPhoto = function () {
                var newImage = sessionStorage.getItem('imageUrl');
                this.artist.portfolio.push(newImage);
                this.artistService.updateArtist(this.$stateParams['id'], this.artist).then(function () {
                    sessionStorage.removeItem('imageUrl');
                });
            };
            DashboardController.$inject = ['artistService', 'loginService', '$state', '$stateParams'];
            return DashboardController;
        }());
        controllers.DashboardController = DashboardController;
    })(controllers = inkedin.controllers || (inkedin.controllers = {}));
})(inkedin || (inkedin = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3RzL2NvbnRyb2xsZXJzL2Rhc2hib2FyZENvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBVSxPQUFPLENBK0NoQjtBQS9DRCxXQUFVLE9BQU87SUFBQyxJQUFBLFdBQVcsQ0ErQzVCO0lBL0NpQixXQUFBLFdBQVc7UUFFM0I7WUFVRSw2QkFBb0IsYUFBYSxFQUFVLFlBQVksRUFBVSxNQUFNLEVBQVUsWUFBWTtnQkFBekUsa0JBQWEsR0FBYixhQUFhLENBQUE7Z0JBQVUsaUJBQVksR0FBWixZQUFZLENBQUE7Z0JBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBQTtnQkFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBQTtnQkFDM0YsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDekQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUNuQyxDQUFDO1lBRU0seUNBQVcsR0FBbEI7Z0JBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzFELENBQUM7WUFFTSxzQ0FBUSxHQUFmO2dCQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUNsQixJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO29CQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQ3BDLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0RSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztnQkFDckIsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFDMUIsQ0FBQztZQUNILENBQUM7WUFFTSx5Q0FBVyxHQUFsQixVQUFtQixLQUFLO2dCQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNwQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN4RSxDQUFDO1lBRU0seUNBQVcsR0FBbEI7Z0JBQ0UsSUFBSSxRQUFRLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNyQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQ3pFLGNBQWMsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3hDLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztZQWxDTSwyQkFBTyxHQUFHLENBQUMsZUFBZSxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsY0FBYyxDQUFDLENBQUM7WUFtQy9FLDBCQUFDO1NBQUEsQUEzQ0QsSUEyQ0M7UUEzQ1ksK0JBQW1CLHNCQTJDL0IsQ0FBQTtJQUVILENBQUMsRUEvQ2lCLFdBQVcsR0FBWCxtQkFBVyxLQUFYLG1CQUFXLFFBK0M1QjtBQUFELENBQUMsRUEvQ1MsT0FBTyxLQUFQLE9BQU8sUUErQ2hCIiwic291cmNlc0NvbnRlbnQiOlsibmFtZXNwYWNlIGlua2VkaW4uY29udHJvbGxlcnMge1xyXG5cclxuICBleHBvcnQgY2xhc3MgRGFzaGJvYXJkQ29udHJvbGxlciB7XHJcbiAgICBwdWJsaWMgYXJ0aXN0O1xyXG4gICAgcHVibGljIG5ld1N0eWxlO1xyXG4gICAgcHVibGljIGZzRW1haWw7XHJcbiAgICBwdWJsaWMgdGVtcFBob3RvO1xyXG4gICAgcHVibGljIGlzTG9nZ2VkSW47XHJcbiAgICBwdWJsaWMgbG9nT3V0O1xyXG5cclxuICAgIHN0YXRpYyAkaW5qZWN0ID0gWydhcnRpc3RTZXJ2aWNlJywgJ2xvZ2luU2VydmljZScsICckc3RhdGUnLCAnJHN0YXRlUGFyYW1zJ107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhcnRpc3RTZXJ2aWNlLCBwcml2YXRlIGxvZ2luU2VydmljZSwgcHJpdmF0ZSAkc3RhdGUsIHByaXZhdGUgJHN0YXRlUGFyYW1zKSB7XHJcbiAgICAgIGxldCBhcnRpc3RJZCA9IHRoaXMuJHN0YXRlUGFyYW1zWydpZCddO1xyXG4gICAgICB0aGlzLmFydGlzdCA9IHRoaXMuYXJ0aXN0U2VydmljZS5nZXRBcnRpc3RCeUlkKGFydGlzdElkKTtcclxuICAgICAgdGhpcy5mc0VtYWlsID0gdGhpcy5hcnRpc3QuZW1haWw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVkaXRQcm9maWxlKCkge1xyXG4gICAgICB0aGlzLiRzdGF0ZS5nbygnZWRpdCcsIHsgaWQ6IHRoaXMuJHN0YXRlUGFyYW1zWydpZCddIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRTdHlsZSgpIHtcclxuICAgICAgaWYgKHRoaXMubmV3U3R5bGUpIHtcclxuICAgICAgICBsZXQgc3R5bGVUb0FkZCA9IHRoaXMubmV3U3R5bGU7XHJcbiAgICAgICAgdGhpcy5hcnRpc3Quc3R5bGVzLnB1c2goc3R5bGVUb0FkZCk7XHJcbiAgICAgICAgdGhpcy5hcnRpc3RTZXJ2aWNlLnVwZGF0ZUFydGlzdCh0aGlzLiRzdGF0ZVBhcmFtc1snaWQnXSwgdGhpcy5hcnRpc3QpO1xyXG4gICAgICAgIHRoaXMubmV3U3R5bGUgPSAnJztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhbGVydCgnSW52YWxpZCBpbnB1dC4nKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmVTdHlsZShpbmRleCkge1xyXG4gICAgICB0aGlzLmFydGlzdC5zdHlsZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgdGhpcy5hcnRpc3RTZXJ2aWNlLnVwZGF0ZUFydGlzdCh0aGlzLiRzdGF0ZVBhcmFtc1snaWQnXSwgdGhpcy5hcnRpc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGxvYWRQaG90bygpIHtcclxuICAgICAgbGV0IG5ld0ltYWdlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnaW1hZ2VVcmwnKTtcclxuICAgICAgdGhpcy5hcnRpc3QucG9ydGZvbGlvLnB1c2gobmV3SW1hZ2UpO1xyXG4gICAgICB0aGlzLmFydGlzdFNlcnZpY2UudXBkYXRlQXJ0aXN0KHRoaXMuJHN0YXRlUGFyYW1zWydpZCddLCB0aGlzLmFydGlzdCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgnaW1hZ2VVcmwnKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=