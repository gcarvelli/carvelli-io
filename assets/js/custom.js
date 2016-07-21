
var app = angular.module('gcarvelliWebsite', [])
    .controller('gcarvelliWebsiteController', function ($scope, $window) {

        // Configuration
        $scope.config = {
            asset_link: "https://assets.carvelli.io/personal"
        }

        $scope.profile = {
            title: "Hello, I'm Gio.",
            image: "https://gravatar.com/avatar/9c5c1a414e20e714b0ea466fa6617940/?s=400",
            intro: "I spent four years as a Software Engineering major at RIT but I plan on graduating Computer Science in May, 2017. ",
            contact: "Want to get in touch? Contact me using one of the methods below!"
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
                image: $scope.config["asset_link"] + "/fulls/01.jpg",
                link: "https://github.com/gcarvelli/house-explorer",
                link_text: "View Source",
                description: "A text-based game engine written in Python."
            },
            {
                name: "Geddit",
                image: $scope.config["asset_link"] + "/fulls/02.jpg",
                link: "https://github.com/gcarvelli/geddit",
                link_text: "View Source",
                description: "Reddit clone written from scratch in Ruby on Rails."
            },
            {
                name: "Which Exchange",
                image: $scope.config["asset_link"] + "/thumbs/03.jpg",
                link: "http://www.kwikthinkers.xyz/whichexchange/",
                link_text: "View Demo",
                description: "Guess which StackExchange site each question comes from! HackNJIT 2015 project."
            },
            {
                name: "Reddit Backgrounds",
                image: $scope.config["asset_link"] + "/thumbs/04.jpg",
                link: "https://github.com/chtinahow/reddit-backgrounds",
                link_text: "View Source",
                description: "Scrapes a list of subreddits for high resolution wallpapers. HackRPI 2015 project."
            },
            {
                name: "Community Care Hub",
                image: $scope.config["asset_link"] + "/thumbs/06.jpg",
                link: "https://github.com/amk5401/CommunityCareHub",
                link_text: "View Source",
                description: "A hastily-put-together HCI prototype for an elderly care home. Created for a Software Usability class."
            },
            {
                name: "KwikThinker",
                image: $scope.config["asset_link"] + "/thumbs/05.jpg",
                link: "https://github.com/KwikThinker/KwikThinker",
                link_text: "View Source",
                description: "Simple Android true/false trivia app. Award-winning HackRPI 2014 project."
            }
        ]
    });
