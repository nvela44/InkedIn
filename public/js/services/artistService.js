var inkedin;
(function (inkedin) {
    var services;
    (function (services) {
        var ArtistService = (function () {
            function ArtistService($resource) {
                this.$resource = $resource;
                this.ARTIST_RESOURCE = this.$resource('/api/artists/:id', null, {
                    'update': { method: 'PUT' }
                });
            }
            ArtistService.prototype.getArtists = function () {
                return this.ARTIST_RESOURCE.query();
            };
            ArtistService.prototype.getArtistById = function (artistId) {
                return this.ARTIST_RESOURCE.get({ id: artistId });
            };
            ArtistService.prototype.saveArtist = function (newArtist) {
                return this.ARTIST_RESOURCE.save(newArtist).$promise;
            };
            ArtistService.prototype.updateArtist = function (artistId, newArtist) {
                return this.ARTIST_RESOURCE.update({ id: artistId }, newArtist).$promise;
            };
            ArtistService.prototype.removeArtist = function (artistId) {
                return this.ARTIST_RESOURCE.remove({ id: artistId }).$promise;
            };
            ArtistService.$inject = ['$resource'];
            return ArtistService;
        }());
        services.ArtistService = ArtistService;
        angular.module('inkedin').service('artistService', ArtistService);
    })(services = inkedin.services || (inkedin.services = {}));
})(inkedin || (inkedin = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJ0aXN0U2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3RzL3NlcnZpY2VzL2FydGlzdFNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBVSxPQUFPLENBa0NoQjtBQWxDRCxXQUFVLE9BQU87SUFBQyxJQUFBLFFBQVEsQ0FrQ3pCO0lBbENpQixXQUFBLFFBQVE7UUFFeEI7WUFPRSx1QkFBb0IsU0FBUztnQkFBVCxjQUFTLEdBQVQsU0FBUyxDQUFBO2dCQU5yQixvQkFBZSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxFQUFFO29CQUNqRSxRQUFRLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO2lCQUM1QixDQUFDLENBQUM7WUFJNkIsQ0FBQztZQUUxQixrQ0FBVSxHQUFqQjtnQkFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUN0QyxDQUFDO1lBRU0scUNBQWEsR0FBcEIsVUFBcUIsUUFBUTtnQkFDM0IsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7WUFDcEQsQ0FBQztZQUVNLGtDQUFVLEdBQWpCLFVBQWtCLFNBQVM7Z0JBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFDdkQsQ0FBQztZQUVNLG9DQUFZLEdBQW5CLFVBQW9CLFFBQVEsRUFBRSxTQUFTO2dCQUNyQyxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQzNFLENBQUM7WUFFTSxvQ0FBWSxHQUFuQixVQUFvQixRQUFRO2dCQUMxQixNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFDaEUsQ0FBQztZQXRCTSxxQkFBTyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7WUF1QmpDLG9CQUFDO1NBQUEsQUE1QkQsSUE0QkM7UUE1Qlksc0JBQWEsZ0JBNEJ6QixDQUFBO1FBRUQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBRXBFLENBQUMsRUFsQ2lCLFFBQVEsR0FBUixnQkFBUSxLQUFSLGdCQUFRLFFBa0N6QjtBQUFELENBQUMsRUFsQ1MsT0FBTyxLQUFQLE9BQU8sUUFrQ2hCIiwic291cmNlc0NvbnRlbnQiOlsibmFtZXNwYWNlIGlua2VkaW4uc2VydmljZXMge1xyXG5cclxuICBleHBvcnQgY2xhc3MgQXJ0aXN0U2VydmljZSB7XHJcbiAgICBwcml2YXRlIEFSVElTVF9SRVNPVVJDRSA9IHRoaXMuJHJlc291cmNlKCcvYXBpL2FydGlzdHMvOmlkJywgbnVsbCwge1xyXG4gICAgICAndXBkYXRlJzogeyBtZXRob2Q6ICdQVVQnIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHN0YXRpYyAkaW5qZWN0ID0gWyckcmVzb3VyY2UnXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlICRyZXNvdXJjZSkge31cclxuXHJcbiAgICBwdWJsaWMgZ2V0QXJ0aXN0cygpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuQVJUSVNUX1JFU09VUkNFLnF1ZXJ5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEFydGlzdEJ5SWQoYXJ0aXN0SWQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuQVJUSVNUX1JFU09VUkNFLmdldCh7IGlkOiBhcnRpc3RJZCB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2F2ZUFydGlzdChuZXdBcnRpc3QpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuQVJUSVNUX1JFU09VUkNFLnNhdmUobmV3QXJ0aXN0KS4kcHJvbWlzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlQXJ0aXN0KGFydGlzdElkLCBuZXdBcnRpc3QpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuQVJUSVNUX1JFU09VUkNFLnVwZGF0ZSh7IGlkOiBhcnRpc3RJZCB9LCBuZXdBcnRpc3QpLiRwcm9taXNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmVBcnRpc3QoYXJ0aXN0SWQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuQVJUSVNUX1JFU09VUkNFLnJlbW92ZSh7IGlkOiBhcnRpc3RJZCB9KS4kcHJvbWlzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFuZ3VsYXIubW9kdWxlKCdpbmtlZGluJykuc2VydmljZSgnYXJ0aXN0U2VydmljZScsIEFydGlzdFNlcnZpY2UpO1xyXG5cclxufVxyXG4iXX0=