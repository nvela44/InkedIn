namespace inkedin.controllers {

  export class GalleryController {
    public artists;

    static $inject = ['artistService', '$state'];

    constructor(private artistService, private $state) {
      this.artists = this.artistService.getArtists();
    }
    public getUser(id) {
     this.$state.go('dashboard', {id: id});
   }
  }

}
