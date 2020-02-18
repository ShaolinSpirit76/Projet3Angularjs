[Version Française]

# "Au Démon Du Jeu" Application AngularJS

## Description



## Installation

- Ouvrez le terminal et déplacez-vous dans le dossier git que vous venez de télécharger et que vous
aurez dézippé au préalable :

	cd Téléchargements/Projet3Angularjs-master

- Si vous avez déjà installé Node.js sur votre machine, vérifiez seulement que votre version est
au moins supérieure à Node.js v6+ :

	node --version

- Sinon, toujours dans le terminal :

	apt-get install nodejs-legacy npm
	nodejs --version
	npm --version

- Maintenant que vous avez installé Node.js, vous devez installer la commande npm :

	npm install	

- Enfin, pour lancer l'application, il suffit de mettre en route le serveur de développement web :

	npm start

- Votre terminal vous renverra une adresse de type local host, cliquez-dessus pour ouvrir le lien :

	http://localhost:8000/	



## Fonctionnalités de l'application




## Commits 




## Arborescence des fichiers de l'application



## Références











[English version]

# AngularJS Application "Au Démon Du Jeu"

## Overview


## Prerequisites

- Install the tool dependencies: `npm install`

Running the Application during Development

- Run `npm start`.
- Navigate your browser to [http://localhost:8000/](http://localhost:8000/) to see the application
  running.


## Workings of the Application



## Commits 

You can check out any point of the tutorial using:



### step-0 _Bootstrapping_


### step-1 _Static Template_


### step-2 _AngularJS Templates_


### step-3 _Components_


### step-4 _Directory and File Organization_


### step-5 _Filtering Repeaters_


### step-6 _Two-way Data Binding_


### step-7 _XHR & Dependency Injection_


### step-8 _Templating Links & Images_


### step-9 _Routing & Multiple Views_


### step-10 _More Templating_


### step-11 _Custom Filters_


### step-12 _Event Handlers_


### step-13 _REST and Custom Services_


### step-14 _Animations_


## Development with `angular-phonecat`



### Installing Dependencies

The application relies upon various JS libraries, such as AngularJS and jQuery, and Node.js tools,
such as [Karma][karma] and [Protractor][protractor]. You can install these by running:

```
npm install
```

This will also download the AngularJS files needed for the current step of the tutorial and copy
them to `app/lib`.

Most of the scripts described below will run this automatically but it doesn't do any harm to run
it whenever you like.

*Note copying the AngularJS files from `node_modules` to `app/lib` makes it easier to serve the
files by a web server.*




## Application Directory Layout

```
app/                     --> all the source code of the app (along with unit tests)
  lib/...                --> 3rd party JS/CSS libraries, including AngularJS and jQuery (copied over from `node_modules/`)
  core/                  --> all the source code of the core module (stuff used throughout the app)
    checkmark/...        --> files for the `checkmark` filter, including JS source code, specs
    phone/...            --> files for the `core.phone` submodule, including JS source code, specs
    core.module.js       --> the core module
  img/...                --> image files
  phone-detail/...       --> files for the `phoneDetail` module, including JS source code, HTML templates, specs
  phone-list/...         --> files for the `phoneList` module, including JS source code, HTML templates, specs
  phones/...             --> static JSON files with phone data (used to fake a backend API)
  app.animations.css     --> hooks for running CSS animations with `ngAnimate`
  app.animations.js      --> hooks for running JS animations with `ngAnimate`
  app.config.js          --> app-wide configuration of AngularJS services
  app.css                --> default stylesheet
  app.module.js          --> the main app module
  index.html             --> app layout file (the main HTML template file of the app)

e2e-tests/               --> config and source files for e2e tests
  protractor.conf.js     --> config file for running e2e tests with Protractor
  scenarios.js           --> e2e specs

node_modules/...         --> 3rd party libraries and development tools (fetched using `npm`)

scripts/                 --> handy scripts
  private/...            --> private scripts used by the AngularJS Team to maintain this repo
  update-repo.sh         --> script for pulling down the latest version of this repo (!!! DELETES ALL CHANGES YOU HAVE MADE !!!)

karma.conf.js            --> config file for running unit tests with Karma
package.json             --> Node.js specific metadata, including development tools dependencies
package-lock.json        --> Npm specific metadata, including versions of installed development tools dependencies
```

## Contact

For more information on AngularJS, please check out https://angularjs.org/.


[angular-seed]: https://github.com/angular/angular-seed
[git-home]: https://git-scm.com/
[git-setup]: https://help.github.com/articles/set-up-git
[google-phone-gallery]: http://web.archive.org/web/20131215082038/http://www.android.com/devices
[jasmine]: https://jasmine.github.io/
[jdk]: https://wikipedia.org/wiki/Java_Development_Kit
[jdk-download]: http://www.oracle.com/technetwork/java/javase/downloads
[karma]: https://karma-runner.github.io/
[node]: https://nodejs.org/
[protractor]: http://www.protractortest.org/
[selenium]: http://docs.seleniumhq.org/
