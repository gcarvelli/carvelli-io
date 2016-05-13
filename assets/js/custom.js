
var app = angular.module('gcarvelliWebsite', [])
    .controller('gcarvelliWebsiteController', function ($scope, $window) {
        $scope.profile = {
            title: "Hello, I'm Gio.",
            image: "http://gravatar.com/avatar/9c5c1a414e20e714b0ea466fa6617940",
            intro: "I spent four years as a Software Engineering major at RIT but I plan on graduating Computer Science in May, 2017. "
        };

        $scope.icons = [
            {
                name: "Facebook",
                icon: "fa-facebook",
                link: "https://facebook.com/gcarvelli"
            },
            {
                name: "Github",
                icon: "fa-github",
                link: "https://github.com/gcarvelli"
            },
            {
                name: "Email",
                icon: "fa-envelope-o",
                link: "mailto:gio@carvelli.io"
            }
        ]
    });
