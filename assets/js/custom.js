
var app = angular.module('gcarvelliWebsite', [])
    .controller('gcarvelliWebsiteController', function ($scope, $window) {
        $scope.profile = {
            title: "Hello, I'm Gio.",
            image: "https://gravatar.com/avatar/9c5c1a414e20e714b0ea466fa6617940",
            intro: "I spent four years as a Software Engineering major at RIT but I plan on graduating Computer Science in May, 2017. ",
            contact: "Want to get in touch? Send me a message on one of my social networks or use the form below!"
        };

        $scope.profiles = [
            {
                name: "Facebook",
                icon: "fa-facebook",
                link: "https://facebook.com/gcarvelli",
                handle: "gcarvelli",
                contact: true
            },
            {
                name: "Github",
                icon: "fa-github",
                link: "https://github.com/gcarvelli",
                handle: "@gcarvelli",
                contact: false
            },
            {
                name: "LinkedIn",
                icon: "fa-linkedin",
                link: "https://linkedin.com/in/gcarvelli",
                handle: "gcarvelli",
                contact: true
            },
            {
                name: "Email",
                icon: "fa-envelope-o",
                link: "mailto:gio@carvelli.io",
                handle: "gio@carvelli.io",
                contact: true
            }
        ];

        $scope.projects = [
            {
                name: "House Explorer",
                image: "images/fulls/01.jpg",
                link: "https://github.com/gcarvelli/house-explorer",
                description: "A text-based game engine written in Python."
            },
            {
                name: "Geddit",
                image: "images/fulls/02.jpg",
                link: "https://github.com/gcarvelli/geddit",
                description: "Reddit clone written from scratch in Ruby on Rails."
            },
            {
                name: "Which Exchange",
                image: "images/thumbs/03.jpg",
                link: "https://github.com/WhichExchange/WhichExchange",
                description: "Guess which StackExchange site each question comes from!"
            },
            {
                name: "Community Care Hub",
                image: "images/thumbs/04.jpg",
                link: "https://github.com/amk5401/CommunityCareHub",
                description: "A hastily-put-together HCI prototype for an elderly care home. Created for a Software Usability class."
            }
        ]
    });
