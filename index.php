<!DOCTYPE HTML>
<html>
    <head>
        <title>Giovanni Carvelli, Computer Science Major</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <!--[if lte IE 8]><script src="assets/js/ie/html5shiv.js"></script><![endif]-->
        <link rel="stylesheet" href="assets/css/main.css" />
        <link rel="stylesheet" href="assets/css/custom.css" />
        <!--[if lte IE 8]><link rel="stylesheet" href="assets/css/ie8.css" /><![endif]-->
        <meta name="keywords" content="gio, giovanni, carvelli, giovannicarvelli, gcarvelli, rit, rochester institute of technology, rsa, rochester software associates, datto, datto inc., microsoft" />
        <meta name="description" content="I'm Giovanni, a Computer Science major at RIT">
    </head>
    <body id="top" ng-app="gcarvelliWebsite" ng-controller="gcarvelliWebsiteController">

        <?php //include_once("analytics.php") ?>

        <!-- Header -->
            <header id="header">
                <div class="image avatar"><img class="zoom-on-hover" ng-src="{{ profile.image }}" alt="" /></div>
                <h1><strong>I am Gio</strong>, a fifth year <br /> Computer Science Major at RIT.</h1>
            </header>

            <div id="main">

                <section id="intro">
                    <header class="major">
                        <h2>{{ profile.title }}</h2>
                    </header>
                    <p>
                        {{ profile.intro }}
                    </p>
                </section>

                <section id="experience">
                    <h2>Experience</h2>
                    <div class="row" ng-repeat="job in jobs">
                        <article class="12u 12u$(xsmall)">
                            <div class="employer-header job-image">
                                <img ng-src="{{ job.image }}" />
                            </div>
                            <div class="employer-body">
                                <h3>{{ job.company }}</h3>
                                <h4>{{ job.title }}, {{ job.dates }}</h4>
                                <p>{{ job.description }}</p>
                            </div>
                        </article>
                    </div>
                    <ul class="actions">
                        <li><a href="{{ profiles[2].link }}" class="button">
                            <i class="fa fa-linkedin" aria-hidden="true"></i> gcarvelli on LinkedIn
                        </a></li>
                    </ul>
                </section>

                <section id="projects">
                    <h2>Projects</h2>
                    <div class="row">
                        <article class="6u 12u$(xsmall) work-item" ng-repeat="project in projects">
                            <a href="{{ project.link }}"><div href="{{ project.link }}" class="image fit thumb zoom-on-hover" data-after="{{ project.link_text }}"><img class="project-image" ng-src="{{ project.image }}" alt="" /></div>
                            <h3>{{ project.name }}</h3></a>
                            <p>{{ project.description }}</p>
                        </article>
                    </div>
                    <ul class="actions">
                        <li><a href="{{ profiles[1].link }}" class="button">
                            <i class="fa fa-github" aria-hidden="true"></i> @gcarvelli on Github
                        </a></li>
                    </ul>
                </section>

                <section id="contact">
                    <h2>Get In Touch</h2>
                    <p>{{ profile.contact }}</p>
                    <ul class="actions">
                        <li ng-repeat="p in profiles" ng-if="p.contact">
                            <a href="{{ p.link }}" class="button">
                                <i class="fa {{ p.icon }}" aria-hidden="true"></i> {{ p.handle }}
                            </a>
                        </li>
                    </ul>
                </section>
            </div>

            <footer id="footer">
                <ul class="icons" >
                    <li ng-repeat="p in profiles">
                        <a href={{p.link}} class="icon {{ p.icon }}"><span class="label">{{ p.name }}</span></a>
                    </li>
                </ul>
                <ul class="copyright">
                    <li><a href="https://github.com/gcarvelli/carvelli-io">Source on Github</a></li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                </ul>
            </footer>

            <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular.min.js"></script>
            <script src="//code.jquery.com/jquery-2.2.3.min.js"></script>
            <script src="//cdnjs.cloudflare.com/ajax/libs/jquery.poptrox/2.5.1/jquery.poptrox.js"></script>
            <script src="assets/js/skel.min.js"></script>
            <script src="assets/js/util.js"></script>
            <!--[if lte IE 8]><script src="assets/js/ie/respond.min.js"></script><![endif]-->
            <script src="assets/js/main.js"></script>
            <script src="assets/js/custom.js"></script>

    </body>
</html>
