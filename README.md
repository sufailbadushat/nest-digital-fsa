# NestDigitalfsa

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.





<nav class="navbar navbar-expand-lg navbar-primary bg-dark rounded-bottom">
    <div class="container-fluid">
        <a class="navbar-brand font-monospace text-light ml-4 fw-bolder ">NestEmployeeApp</a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            

            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item active fw-bold ">
                    <a class="nav-link text-secondary font-monospace" routerLink="/addEmployee">Employee</a>
                </li>
                <li class="nav-item active fw-bold ">
                    <a class="nav-link text-secondary font-monospace" routerLink="/assign">Security</a>
                </li>
                <li class="nav-item active fw-bold ">
                    <a class="nav-link text-secondary font-monospace" routerLink="/Lms">LMS</a>
                </li>
                <li class="nav-item active fw-bold ">
                    <a class="nav-link text-secondary font-monospace" routerLink="/allLog">AllLog</a>
                </li>
                <li class="nav-item active fw-bold ">
                    <a class="nav-link text-secondary font-monospace" routerLink="/searchLog">SearchLog</a>
                </li>
                
            </ul>

            <div class="d-flex">
                <button class="btn btn-danger  btn-sm font-monospace fw-bolder" style="border-radius: 5px;"
                    routerLink="/adminLogin">Log out</button>
            </div>

        </div>

    </div>
</nav>
