var inkedin;
(function (inkedin) {
    var controllers;
    (function (controllers) {
        var EditController = (function () {
            function EditController(artistService, loginService, $state, $stateParams) {
                this.artistService = artistService;
                this.loginService = loginService;
                this.$state = $state;
                this.$stateParams = $stateParams;
                var artistId = this.$stateParams['id'];
                this.artist = this.artistService.getArtistById(artistId);
            }
            EditController.prototype.viewDashboard = function () {
                this.$state.go('dashboard', { id: this.$stateParams['id'] });
            };
            EditController.prototype.updateProfile = function () {
                var _this = this;
                this.artistService.updateArtist(this.$stateParams['id'], this.artist).then(function () {
                    _this.$state.go('dashboard', { id: _this.$stateParams['id'] });
                });
            };
            EditController.prototype.deleteProfile = function () {
                this.artistService.removeArtist(this.$stateParams['id']);
                this.$state.go('home');
            };
            EditController.$inject = ['artistService', 'loginService', '$state', '$stateParams'];
            return EditController;
        }());
        controllers.EditController = EditController;
    })(controllers = inkedin.controllers || (inkedin.controllers = {}));
})(inkedin || (inkedin = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdENvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90cy9jb250cm9sbGVycy9lZGl0Q29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLE9BQU8sQ0E0QmhCO0FBNUJELFdBQVUsT0FBTztJQUFDLElBQUEsV0FBVyxDQTRCNUI7SUE1QmlCLFdBQUEsV0FBVztRQUUzQjtZQUtFLHdCQUFvQixhQUFhLEVBQVUsWUFBWSxFQUFVLE1BQU0sRUFBVSxZQUFZO2dCQUF6RSxrQkFBYSxHQUFiLGFBQWEsQ0FBQTtnQkFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBQTtnQkFBVSxXQUFNLEdBQU4sTUFBTSxDQUFBO2dCQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFBO2dCQUMzRixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN2QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzNELENBQUM7WUFFTSxzQ0FBYSxHQUFwQjtnQkFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDL0QsQ0FBQztZQUVNLHNDQUFhLEdBQXBCO2dCQUFBLGlCQUlDO2dCQUhDLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDekUsS0FBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUMvRCxDQUFDLENBQUMsQ0FBQztZQUNMLENBQUM7WUFFTSxzQ0FBYSxHQUFwQjtnQkFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ3pELElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3pCLENBQUM7WUFwQk0sc0JBQU8sR0FBRyxDQUFDLGVBQWUsRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1lBcUIvRSxxQkFBQztTQUFBLEFBeEJELElBd0JDO1FBeEJZLDBCQUFjLGlCQXdCMUIsQ0FBQTtJQUVILENBQUMsRUE1QmlCLFdBQVcsR0FBWCxtQkFBVyxLQUFYLG1CQUFXLFFBNEI1QjtBQUFELENBQUMsRUE1QlMsT0FBTyxLQUFQLE9BQU8sUUE0QmhCIiwic291cmNlc0NvbnRlbnQiOlsibmFtZXNwYWNlIGlua2VkaW4uY29udHJvbGxlcnMge1xyXG5cclxuICBleHBvcnQgY2xhc3MgRWRpdENvbnRyb2xsZXIge1xyXG4gICAgcHVibGljIGFydGlzdDtcclxuXHJcbiAgICBzdGF0aWMgJGluamVjdCA9IFsnYXJ0aXN0U2VydmljZScsICdsb2dpblNlcnZpY2UnLCAnJHN0YXRlJywgJyRzdGF0ZVBhcmFtcyddO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXJ0aXN0U2VydmljZSwgcHJpdmF0ZSBsb2dpblNlcnZpY2UsIHByaXZhdGUgJHN0YXRlLCBwcml2YXRlICRzdGF0ZVBhcmFtcykge1xyXG4gICAgICBsZXQgYXJ0aXN0SWQgPSB0aGlzLiRzdGF0ZVBhcmFtc1snaWQnXTtcclxuICAgICAgdGhpcy5hcnRpc3QgPSB0aGlzLmFydGlzdFNlcnZpY2UuZ2V0QXJ0aXN0QnlJZChhcnRpc3RJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZpZXdEYXNoYm9hcmQoKSB7XHJcbiAgICAgIHRoaXMuJHN0YXRlLmdvKCdkYXNoYm9hcmQnLCB7IGlkOiB0aGlzLiRzdGF0ZVBhcmFtc1snaWQnXSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlUHJvZmlsZSgpIHtcclxuICAgICAgdGhpcy5hcnRpc3RTZXJ2aWNlLnVwZGF0ZUFydGlzdCh0aGlzLiRzdGF0ZVBhcmFtc1snaWQnXSwgdGhpcy5hcnRpc3QpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuJHN0YXRlLmdvKCdkYXNoYm9hcmQnLCB7IGlkOiB0aGlzLiRzdGF0ZVBhcmFtc1snaWQnXSB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlbGV0ZVByb2ZpbGUoKSB7XHJcbiAgICAgIHRoaXMuYXJ0aXN0U2VydmljZS5yZW1vdmVBcnRpc3QodGhpcy4kc3RhdGVQYXJhbXNbJ2lkJ10pO1xyXG4gICAgICB0aGlzLiRzdGF0ZS5nbygnaG9tZScpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIl19