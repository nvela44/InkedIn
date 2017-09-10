namespace inkedin {

  let app = angular.module('inkedin', ['ui.router', 'ngResource']);

  app.config((
    $stateProvider,
    $urlRouterProvider,
    $locationProvider
  ) => {
    $stateProvider
    .state('home', {
    url: '/',
    templateUrl: '/views/home.html',
    controller: inkedin.controllers.HomeController,
    controllerAs: 'controller'
})
    .state('style', {
    url: '/style',
    templateUrl: '/views/style.html',
    controller: inkedin.controllers.GalleryController,
    controllerAs: 'controller'
})
    .state('about', {
    url: '/about',
    templateUrl: '/views/about.html'
})
    .state('login', {
    url: '/login',
    templateUrl: '/views/login.html',
    controller: inkedin.controllers.LoginController,
    controllerAs: 'controller'
})
    .state('404', {
    url: '/404',
    templateUrl: '/views/404.html'
})
    .state('black-grey', {
    url: '/style/black-grey',
    templateUrl: '/views/style-list/black&grey.html'
})
    .state('cartoon-anime', {
    url: '/style/cartoon-anime',
    templateUrl: '/views/style-list/cartoon-anime.html'
})
    .state('cover-up', {
    url: '/style/cover-up',
    templateUrl: '/views/style-list/cover-up.html'
})
    .state('flash-tattoo', {
    url: '/style/flash-tattoo',
    templateUrl: '/views/style-list/flash-tattoo.html'
})
    .state('illustrative', {
    url: '/style/illustrative',
    templateUrl: '/views/style-list/illustrative.html'
})
    .state('lettering', {
    url: '/style/lettering',
    templateUrl: '/views/style-list/lettering.html'
})
    .state('new-school', {
    url: '/style/new-school',
    templateUrl: '/views/style-list/new-school.html'
})
    .state('portrait', {
    url: '/style/portrait',
    templateUrl: '/views/style-list/portrait.html'
})
    .state('realism', {
    url: '/style/realism',
    templateUrl: '/views/style-list/realism.html'
})
    .state('sketch', {
    url: '/style/sketch',
    templateUrl: '/views/style-list/sketch.html'
})
    .state('trad-american', {
    url: '/style/trad-american',
    templateUrl: '/views/style-list/trad-american.html'
})
    .state('trad-japanese', {
    url: '/style/trad-japanese',
    templateUrl: '/views/style-list/trad-japanese.html'
})
    .state('trash-polka', {
    url: '/style/trash-polka',
    templateUrl: '/views/style-list/trash-polka.html'
})
    .state('tribal', {
    url: '/style/tribal',
    templateUrl: '/views/style-list/tribal.html'
})
    .state('watercolor', {
    url: '/style/watercolor',
    templateUrl: '/views/style-list/watercolor.html'
})
    .state('pinup', {
    url: '/style/pinup',
    templateUrl: '/views/style-list/pinup.html'
})
    .state('register', {
    url: '/register',
    templateUrl: '/views/artist(2)/createUser.html',
    controller: inkedin.controllers.RegisterController,
    controllerAs: 'controller'
})
    .state('edit', {
  url: '/artist/profile/edit/:id',
  templateUrl: '/views/artist(2)/edit.html',
  controller: inkedin.controllers.EditController,
  controllerAs: 'controller'
})
    .state('dashboard', {
  url: '/artist/dashboard/:id',
  templateUrl: '/views/artist(2)/profileView.html',
  controller: inkedin.controllers.DashboardController,
  controllerAs: 'controller'
});
// End of artist profile view

    $urlRouterProvider.otherwise('/404');

    $locationProvider.html5Mode(true);
  });

}
