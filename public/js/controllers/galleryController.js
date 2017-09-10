var inkedin;
(function (inkedin) {
    var controllers;
    (function (controllers) {
        var GalleryController = (function () {
            function GalleryController(artistService, $state) {
                this.artistService = artistService;
                this.$state = $state;
                this.artists = this.artistService.getArtists();
            }
            GalleryController.prototype.getUser = function (id) {
                this.$state.go('dashboard', { id: id });
            };
            GalleryController.$inject = ['artistService', '$state'];
            return GalleryController;
        }());
        controllers.GalleryController = GalleryController;
    })(controllers = inkedin.controllers || (inkedin.controllers = {}));
})(inkedin || (inkedin = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeUNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90cy9jb250cm9sbGVycy9nYWxsZXJ5Q29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLE9BQU8sQ0FlaEI7QUFmRCxXQUFVLE9BQU87SUFBQyxJQUFBLFdBQVcsQ0FlNUI7SUFmaUIsV0FBQSxXQUFXO1FBRTNCO1lBS0UsMkJBQW9CLGFBQWEsRUFBVSxNQUFNO2dCQUE3QixrQkFBYSxHQUFiLGFBQWEsQ0FBQTtnQkFBVSxXQUFNLEdBQU4sTUFBTSxDQUFBO2dCQUMvQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDakQsQ0FBQztZQUNNLG1DQUFPLEdBQWQsVUFBZSxFQUFFO2dCQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsRUFBQyxFQUFFLEVBQUUsRUFBRSxFQUFDLENBQUMsQ0FBQztZQUN4QyxDQUFDO1lBUE8seUJBQU8sR0FBRyxDQUFDLGVBQWUsRUFBRSxRQUFRLENBQUMsQ0FBQztZQVEvQyx3QkFBQztTQUFBLEFBWEQsSUFXQztRQVhZLDZCQUFpQixvQkFXN0IsQ0FBQTtJQUVILENBQUMsRUFmaUIsV0FBVyxHQUFYLG1CQUFXLEtBQVgsbUJBQVcsUUFlNUI7QUFBRCxDQUFDLEVBZlMsT0FBTyxLQUFQLE9BQU8sUUFlaEIiLCJzb3VyY2VzQ29udGVudCI6WyJuYW1lc3BhY2UgaW5rZWRpbi5jb250cm9sbGVycyB7XHJcblxyXG4gIGV4cG9ydCBjbGFzcyBHYWxsZXJ5Q29udHJvbGxlciB7XHJcbiAgICBwdWJsaWMgYXJ0aXN0cztcclxuXHJcbiAgICBzdGF0aWMgJGluamVjdCA9IFsnYXJ0aXN0U2VydmljZScsICckc3RhdGUnXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFydGlzdFNlcnZpY2UsIHByaXZhdGUgJHN0YXRlKSB7XHJcbiAgICAgIHRoaXMuYXJ0aXN0cyA9IHRoaXMuYXJ0aXN0U2VydmljZS5nZXRBcnRpc3RzKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0VXNlcihpZCkge1xyXG4gICAgIHRoaXMuJHN0YXRlLmdvKCdkYXNoYm9hcmQnLCB7aWQ6IGlkfSk7XHJcbiAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ==