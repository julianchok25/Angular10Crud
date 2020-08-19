# Frontend-side application made on Angular 10 to connect Test_BBogota Backend node.js App

Client-side Application that manages three components consuming an API Restful with its end-points

- Components and End-points:
  - **add-person** --> POST http://localhost:3000/persons
  - **person-list** --> GET http://localhost:3000/persons
  - **person-details** --> GET, DELETE, PUT http://localhost:3000/persons/:id

## Installation

Download and install **node.js** runtime with LTS stable current version and Angular 10.
Also, you can use any text editor like **Visual Studio code** (recommended) because is easy to manage plugins, javascript snippets and linters. Lastly, install **git** to clone this project and run the code. Links below:

[node.js] || [Angular] || [VsCode] || [git]

1. Clone this repository and acces to the project.

```sh
$ git clone https://github.com/julianchok25/Angular10Crud.git
$ cd Angular10Crud
```

2. Open your text editor and install node dependencies in the local node_modules folder.

- Using a terminal, either bash shell, zsh for linux or powershell for windows, type:

```sh
$ npm install
```

- Now, you'll see the next structure:

![angular_structure](https://i.imgur.com/wWTdUOU.jpg)

## Deploy and Development

Type `npm run start` to launch the App. Navigate to `http://localhost:4200/`. The app will automatically redirect to the route **/persons** and reload if you change any of the source files.

![app_log](https://i.imgur.com/ldIAWMM.jpg)

- **person-list**
  ![person_list](https://i.imgur.com/BlT4JnY.jpg)

When you select an item, this will be highlighted in blue and details of the person appear at right side of the screen.

![person_details](https://i.imgur.com/7lwPUdM.jpg)

If you want to edit the basic person data, click on **edit** button at bottom of details section.

![person_edit](https://i.imgur.com/MCixxWI.jpg)

- Here, you could delete the record or change input data in **Full Name** and **Birth Date** fields. After that, you can return to main page an view the person list again.

![person_main_page](https://i.imgur.com/vkjgp8o.jpg)

And finally, create a person and submit form to save on database.

![person_create](https://i.imgur.com/9ZvfwsY.jpg)
![person_create-message](https://i.imgur.com/mI4b1mm.jpg)

The table list person is updated with new record.

![person_list-updated](https://i.imgur.com/zDHseUZ.jpg)

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Bugs

No known bugs at this time.

## License

Public Domain. No copy write protection.

[//]: # "These are reference links used in the body of this note"
[node.js]: https://nodejs.org/en/
[angular]: https://angular.io/guide/setup-local
[vscode]: https://code.visualstudio.com/
[git]: https://git-scm.com/
