# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.9.

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

## NOVI PROJEKT
-------------------
1) SETUP
-------------------
Instalirajte NodeJs, obavezno LTS sa https://nodejs.org/en/download/

[KORAK 0 - OPCIONALNO] 
ng -v

Ako niste sigurni koja verzija angular-cli je instalirana na Vašem računalu, deinstalirajte.
npm uninstall -g @angular/cli

Zatim pokrenite (možda će biti potrebno dodati flag: --force)
npm cache clean

ili, ako koristite verziju npm > 5.
npm cache verify

ili, možda
npm update -all

[KORAK 1] 
Instalirajte specifičnu angular-cli verziju
npm install -g @angular/cli@ovdje.željena.verzija

[KORAK 2]
Kreirajte projekt
ng new you-app-name

Kao rezultat dobiti ćete skeletron app sa željenom angular verzijom,
te pritom promijenite path kako bi putanja bila u istom direktoriju kao i package.json datoteka.

---------------------------------------
2) GENERIRANJE MODULA, KOMPONENTI, PIPE ...
---------------------------------------
Opis svih komandi sa pripadajućim flag-ovima možete provjeriti na stranici:
https://angular.io/cli/generate

i prethodno zbog route-a provjerite lazy loading:
https://angular.io/guide/lazy-loading-ngmodules

[KORAK - 0]
Generiranje novog projekta sa routing modulom
ng new customer-app --routing

[KORAK - 1]
Kreiranje customers feature modula sa routing-om
ng generate module customers --routing

[KORAK - 2]
Dodavanje component-e customers feature modulu
ng generate component customers/customer-list

[KORAK - 3]
Dodavanje novog orders feature modula sa komponentom
ng generate module orders --routing
ng generate component orders/order-list

i home feature modula sa start komponentom
ng generate module home --routing
ng generate component home/start

[KORAK - 4]
Otvoriti datoteku:
src/app/app.component.html

te dodati slijedeće:

<h1>
  {{title}}
</h1>

<button routerLink="/customers">Customers</button>
<button routerLink="/orders">Orders</button>
<button routerLink="">Home</button>

<router-outlet></router-outlet>

[KORAK - 5]
Otvoriti datoteku:
app-routing.module.ts

i dodati slijedeći kod:
...
...
...
const routes: Routes = [
  
    {path : '', component: StartComponent},

    {path : 'customers', component : CustomerListComponent},

    {path : 'orders', component : OrderListComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
...
...
...

[KORAK - 6]
otvoriti datoteku:
app.module.ts

i dodati gore generirane module:
...
...
...
@NgModule({
  
    declarations: [
 AppComponent
 ],

    imports: [

         BrowserModule,

         AppRoutingModule,

         CustomersModule,

         OrdersModule,

         HomeModule,

         HttpClientModule
  
    ],
  
    providers: [],
...
...
...

[KORAK - 7]
ng serve

otvoriti browser i upisati adresu:
http://localhost:4200


-----------------------
3) PACKAGE VERSION SIGN
-----------------------
U datoteci package.json možete pronaći specifične "modifiere" a njihovo značenje je:

(caret) ^
-------
Ažurira se samo tekuća "major" verzija, npr.:
^4.3.0
npm-om će se učitati 4.x.x release, a nikako 5.x.x

(tilde) ~
-------
Ažurira se samo tekuća "minor" verzija po drugom broju u nizu, npr.:
~4.3.0
npm-om će se učitati 4.3.x release, a nikako 4.4.x