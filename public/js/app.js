var inkedin;
(function (inkedin) {
    var app = angular.module('inkedin', ['ui.router', 'ngResource']);
    app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
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
})(inkedin || (inkedin = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQVUsT0FBTyxDQTZIaEI7QUE3SEQsV0FBVSxPQUFPO0lBRWYsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxXQUFXLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUVqRSxHQUFHLENBQUMsTUFBTSxDQUFDLFVBQ1QsY0FBYyxFQUNkLGtCQUFrQixFQUNsQixpQkFBaUI7UUFFakIsY0FBYzthQUNiLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDZixHQUFHLEVBQUUsR0FBRztZQUNSLFdBQVcsRUFBRSxrQkFBa0I7WUFDL0IsVUFBVSxFQUFFLE9BQU8sQ0FBQyxXQUFXLENBQUMsY0FBYztZQUM5QyxZQUFZLEVBQUUsWUFBWTtTQUM3QixDQUFDO2FBQ0csS0FBSyxDQUFDLE9BQU8sRUFBRTtZQUNoQixHQUFHLEVBQUUsUUFBUTtZQUNiLFdBQVcsRUFBRSxtQkFBbUI7WUFDaEMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxXQUFXLENBQUMsaUJBQWlCO1lBQ2pELFlBQVksRUFBRSxZQUFZO1NBQzdCLENBQUM7YUFDRyxLQUFLLENBQUMsT0FBTyxFQUFFO1lBQ2hCLEdBQUcsRUFBRSxRQUFRO1lBQ2IsV0FBVyxFQUFFLG1CQUFtQjtTQUNuQyxDQUFDO2FBQ0csS0FBSyxDQUFDLE9BQU8sRUFBRTtZQUNoQixHQUFHLEVBQUUsUUFBUTtZQUNiLFdBQVcsRUFBRSxtQkFBbUI7WUFDaEMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxXQUFXLENBQUMsZUFBZTtZQUMvQyxZQUFZLEVBQUUsWUFBWTtTQUM3QixDQUFDO2FBQ0csS0FBSyxDQUFDLEtBQUssRUFBRTtZQUNkLEdBQUcsRUFBRSxNQUFNO1lBQ1gsV0FBVyxFQUFFLGlCQUFpQjtTQUNqQyxDQUFDO2FBQ0csS0FBSyxDQUFDLFlBQVksRUFBRTtZQUNy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QUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDLENBQUMsQ0FBQztBQUVMLENBQUMsRUE3SFMsT0FBTyxLQUFQLE9BQU8sUUE2SGhCIiwic291cmNlc0NvbnRlbnQiOlsibmFtZXNwYWNlIGlua2VkaW4ge1xyXG5cclxuICBsZXQgYXBwID0gYW5ndWxhci5tb2R1bGUoJ2lua2VkaW4nLCBbJ3VpLnJvdXRlcicsICduZ1Jlc291cmNlJ10pO1xyXG5cclxuICBhcHAuY29uZmlnKChcclxuICAgICRzdGF0ZVByb3ZpZGVyLFxyXG4gICAgJHVybFJvdXRlclByb3ZpZGVyLFxyXG4gICAgJGxvY2F0aW9uUHJvdmlkZXJcclxuICApID0+IHtcclxuICAgICRzdGF0ZVByb3ZpZGVyXHJcbiAgICAuc3RhdGUoJ2hvbWUnLCB7XHJcbiAgICB1cmw6ICcvJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnL3ZpZXdzL2hvbWUuaHRtbCcsXHJcbiAgICBjb250cm9sbGVyOiBpbmtlZGluLmNvbnRyb2xsZXJzLkhvbWVDb250cm9sbGVyLFxyXG4gICAgY29udHJvbGxlckFzOiAnY29udHJvbGxlcidcclxufSlcclxuICAgIC5zdGF0ZSgnc3R5bGUnLCB7XHJcbiAgICB1cmw6ICcvc3R5bGUnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcvdmlld3Mvc3R5bGUuaHRtbCcsXHJcbiAgICBjb250cm9sbGVyOiBpbmtlZGluLmNvbnRyb2xsZXJzLkdhbGxlcnlDb250cm9sbGVyLFxyXG4gICAgY29udHJvbGxlckFzOiAnY29udHJvbGxlcidcclxufSlcclxuICAgIC5zdGF0ZSgnYWJvdXQnLCB7XHJcbiAgICB1cmw6ICcvYWJvdXQnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcvdmlld3MvYWJvdXQuaHRtbCdcclxufSlcclxuICAgIC5zdGF0ZSgnbG9naW4nLCB7XHJcbiAgICB1cmw6ICcvbG9naW4nLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcvdmlld3MvbG9naW4uaHRtbCcsXHJcbiAgICBjb250cm9sbGVyOiBpbmtlZGluLmNvbnRyb2xsZXJzLkxvZ2luQ29udHJvbGxlcixcclxuICAgIGNvbnRyb2xsZXJBczogJ2NvbnRyb2xsZXInXHJcbn0pXHJcbiAgICAuc3RhdGUoJzQwNCcsIHtcclxuICAgIHVybDogJy80MDQnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcvdmlld3MvNDA0Lmh0bWwnXHJcbn0pXHJcbiAgICAuc3RhdGUoJ2JsYWNrLWdyZXknLCB7XHJcbiAgICB1cmw6ICcvc3R5bGUvYmxhY2stZ3JleScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy92aWV3cy9zdHlsZS1saXN0L2JsYWNrJmdyZXkuaHRtbCdcclxufSlcclxuICAgIC5zdGF0ZSgnY2FydG9vbi1hbmltZScsIHtcclxuICAgIHVybDogJy9zdHlsZS9jYXJ0b29uLWFuaW1lJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnL3ZpZXdzL3N0eWxlLWxpc3QvY2FydG9vbi1hbmltZS5odG1sJ1xyXG59KVxyXG4gICAgLnN0YXRlKCdjb3Zlci11cCcsIHtcclxuICAgIHVybDogJy9zdHlsZS9jb3Zlci11cCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy92aWV3cy9zdHlsZS1saXN0L2NvdmVyLXVwLmh0bWwnXHJcbn0pXHJcbiAgICAuc3RhdGUoJ2ZsYXNoLXRhdHRvbycsIHtcclxuICAgIHVybDogJy9zdHlsZS9mbGFzaC10YXR0b28nLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcvdmlld3Mvc3R5bGUtbGlzdC9mbGFzaC10YXR0b28uaHRtbCdcclxufSlcclxuICAgIC5zdGF0ZSgnaWxsdXN0cmF0aXZlJywge1xyXG4gICAgdXJsOiAnL3N0eWxlL2lsbHVzdHJhdGl2ZScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy92aWV3cy9zdHlsZS1saXN0L2lsbHVzdHJhdGl2ZS5odG1sJ1xyXG59KVxyXG4gICAgLnN0YXRlKCdsZXR0ZXJpbmcnLCB7XHJcbiAgICB1cmw6ICcvc3R5bGUvbGV0dGVyaW5nJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnL3ZpZXdzL3N0eWxlLWxpc3QvbGV0dGVyaW5nLmh0bWwnXHJcbn0pXHJcbiAgICAuc3RhdGUoJ25ldy1zY2hvb2wnLCB7XHJcbiAgICB1cmw6ICcvc3R5bGUvbmV3LXNjaG9vbCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy92aWV3cy9zdHlsZS1saXN0L25ldy1zY2hvb2wuaHRtbCdcclxufSlcclxuICAgIC5zdGF0ZSgncG9ydHJhaXQnLCB7XHJcbiAgICB1cmw6ICcvc3R5bGUvcG9ydHJhaXQnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcvdmlld3Mvc3R5bGUtbGlzdC9wb3J0cmFpdC5odG1sJ1xyXG59KVxyXG4gICAgLnN0YXRlKCdyZWFsaXNtJywge1xyXG4gICAgdXJsOiAnL3N0eWxlL3JlYWxpc20nLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcvdmlld3Mvc3R5bGUtbGlzdC9yZWFsaXNtLmh0bWwnXHJcbn0pXHJcbiAgICAuc3RhdGUoJ3NrZXRjaCcsIHtcclxuICAgIHVybDogJy9zdHlsZS9za2V0Y2gnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcvdmlld3Mvc3R5bGUtbGlzdC9za2V0Y2guaHRtbCdcclxufSlcclxuICAgIC5zdGF0ZSgndHJhZC1hbWVyaWNhbicsIHtcclxuICAgIHVybDogJy9zdHlsZS90cmFkLWFtZXJpY2FuJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnL3ZpZXdzL3N0eWxlLWxpc3QvdHJhZC1hbWVyaWNhbi5odG1sJ1xyXG59KVxyXG4gICAgLnN0YXRlKCd0cmFkLWphcGFuZXNlJywge1xyXG4gICAgdXJsOiAnL3N0eWxlL3RyYWQtamFwYW5lc2UnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcvdmlld3Mvc3R5bGUtbGlzdC90cmFkLWphcGFuZXNlLmh0bWwnXHJcbn0pXHJcbiAgICAuc3RhdGUoJ3RyYXNoLXBvbGthJywge1xyXG4gICAgdXJsOiAnL3N0eWxlL3RyYXNoLXBvbGthJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnL3ZpZXdzL3N0eWxlLWxpc3QvdHJhc2gtcG9sa2EuaHRtbCdcclxufSlcclxuICAgIC5zdGF0ZSgndHJpYmFsJywge1xyXG4gICAgdXJsOiAnL3N0eWxlL3RyaWJhbCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy92aWV3cy9zdHlsZS1saXN0L3RyaWJhbC5odG1sJ1xyXG59KVxyXG4gICAgLnN0YXRlKCd3YXRlcmNvbG9yJywge1xyXG4gICAgdXJsOiAnL3N0eWxlL3dhdGVyY29sb3InLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcvdmlld3Mvc3R5bGUtbGlzdC93YXRlcmNvbG9yLmh0bWwnXHJcbn0pXHJcbiAgICAuc3RhdGUoJ3BpbnVwJywge1xyXG4gICAgdXJsOiAnL3N0eWxlL3BpbnVwJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnL3ZpZXdzL3N0eWxlLWxpc3QvcGludXAuaHRtbCdcclxufSlcclxuICAgIC5zdGF0ZSgncmVnaXN0ZXInLCB7XHJcbiAgICB1cmw6ICcvcmVnaXN0ZXInLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcvdmlld3MvYXJ0aXN0KDIpL2NyZWF0ZVVzZXIuaHRtbCcsXHJcbiAgICBjb250cm9sbGVyOiBpbmtlZGluLmNvbnRyb2xsZXJzLlJlZ2lzdGVyQ29udHJvbGxlcixcclxuICAgIGNvbnRyb2xsZXJBczogJ2NvbnRyb2xsZXInXHJcbn0pXHJcbiAgICAuc3RhdGUoJ2VkaXQnLCB7XHJcbiAgdXJsOiAnL2FydGlzdC9wcm9maWxlL2VkaXQvOmlkJyxcclxuICB0ZW1wbGF0ZVVybDogJy92aWV3cy9hcnRpc3QoMikvZWRpdC5odG1sJyxcclxuICBjb250cm9sbGVyOiBpbmtlZGluLmNvbnRyb2xsZXJzLkVkaXRDb250cm9sbGVyLFxyXG4gIGNvbnRyb2xsZXJBczogJ2NvbnRyb2xsZXInXHJcbn0pXHJcbiAgICAuc3RhdGUoJ2Rhc2hib2FyZCcsIHtcclxuICB1cmw6ICcvYXJ0aXN0L2Rhc2hib2FyZC86aWQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnL3ZpZXdzL2FydGlzdCgyKS9wcm9maWxlVmlldy5odG1sJyxcclxuICBjb250cm9sbGVyOiBpbmtlZGluLmNvbnRyb2xsZXJzLkRhc2hib2FyZENvbnRyb2xsZXIsXHJcbiAgY29udHJvbGxlckFzOiAnY29udHJvbGxlcidcclxufSk7XHJcbi8vIEVuZCBvZiBhcnRpc3QgcHJvZmlsZSB2aWV3XHJcblxyXG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLzQwNCcpO1xyXG5cclxuICAgICRsb2NhdGlvblByb3ZpZGVyLmh0bWw1TW9kZSh0cnVlKTtcclxuICB9KTtcclxuXHJcbn1cclxuIl19