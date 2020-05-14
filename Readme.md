# Angular

- [Angular](#angular)
  - [Requisitos](#requisitos)
  - [Instalación](#instalaci%c3%b3n)
  - [Fundamentos de TypeScript](#fundamentos-de-typescript)
    - [Módulos](#m%c3%b3dulos)
  - [Instalar Angular](#instalar-angular)
    - [Crear un nuevo proyecto](#crear-un-nuevo-proyecto)
  - [Crear componentes con CLI](#crear-componentes-con-cli)
  - [Directiva nglf](#directiva-nglf)
  - [Directiva nglf class](#directiva-nglf-class)
    - [NgClass condicional](#ngclass-condicional)
    - [Directiva ngFor](#directiva-ngfor)
    - [Rutas en Angular](#rutas-en-angular)
    - [Crear un Navbar](#crear-un-navbar)
  - [Servicios](#servicios)
    - [Rutas dinámicas](#rutas-din%c3%a1micas)

## Requisitos
* Explorador Web
* Editor - Visual Studio Code
* Node.js

## Instalación

1. Abrir Windows PowerShell
2. Instalar TypeScript.

```console
npm install -g typescript
```

3. Comprobar la versión de TypeScript.

```console
npm install -g typescript
```

4. Instalar Angular, según su [sitio oficial](https://angular.io/guide/setup-local)

```console
npm install -g @angular/cli
```

## Fundamentos de TypeScript

En el proyecto se crea un archivo  _TypeScript_, extensión _ts_.

Luego en la terminal ejecutar el _watch_ (_opción -w_) que genera un archivo _JavaScript_ que contiene la traducción del archivo en _TypeScript_ y lo va actualizando cada vez que se generen cambios en este.

```console
tsc app1.ts -w
```

En caso de crear otro archivo de  _TypeScript_ en la terminal parar el _watch_ (Ctrl+C), ejecutar el siguiente comando que inicia un proyecto de  _TypeScript_, además, genera un archivo de configuración.

```console
tsc -init
```
Luego, ejecutamos un _watch_ en la carpeta.

```console
tsc -w
```

### Módulos

1. Instalar __systemjs__, que nos permite trabajar con módulos. En la [web oficial](https://cdnjs.com/libraries/systemjs) se puede descargar o copiar el enlace. Necesitamos el system.js.
```
https://cdnjs.cloudflare.com/ajax/libs/systemjs/6.3.1/system.js
```
2. Colocar dentro de la etiqueta __head__ como se observa.

```html

<head> 
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/6.3.1/system.js"></script>
</head>

```

3. Ejecutar dentro del proyecto _tsc -w_

4. Crear un archivo _main.ts_ que llamará a todos los archivos de javaScript.

5. Dentro de la etiqueta __body__ colocar el siguiente script.

```html
<body>
        
    <script>
         SystemJS.config({
        packages: {
            "js": {
                "main": "main",
                "defaultExtension": "js"
            }
        }
    });
    System.import("js");
    </script>

</body>

```

Esto hace uso de _SystemJS_ para que detecte la carpeta _"js"_ donde el archivo principal se llama _main_ y todas las extensiones serán _js_. Finalmente, importa todos los archivos de _javaScript_.

6. Instalar un servidor local __http-server__. En su [web oficial](https://www.npmjs.com/package/http-server) se puede consultar el comando para instalar.

```console
npm install --global http-server
```

7. Para iniciar el servidor usamos.

```console
http-server
```

8. Abrir el servidor en el navegador con la dirección que muestra como respuesta luego de iniciar el servidor, por lo general suele ser http://localhost:8080/

9. Abrir otra consola en Visual Studio Code, seleccionar powershell.
10. Ejecutamos un _watch_ en la carpeta del proyecto.

```console
tsc -w
```
11. En cada clase de los archivos de _TypeScript_ colocar __export__ antes de _class_

12. Dentro del _main.ts_ importar los archivos.


## Instalar Angular

1. Ir al [sitio oficial de Angular](npm install -g @angular/cli), obtendremos la documentación de Angular CLI y los pasos para su instalación.

<p align="center">
<img src="images/Angular_CLI_instalacion.PNG">
</p>

2. Instalar Angular con el comando:

```console
npm install -g @angular/cli
```

### Crear un nuevo proyecto

1. Ejecutar el comando, donde _my-app_ es el nombre de la aplicación.

```console
ng new my-app
```
2. Ingresar a la carpeta del proyecto.

```console
cd my-app
```

3. Ejecutar el servidor.

```console
ng serve --open
```
La opción _--open_ abrirá automáticamente un servidor local en la dirección: _localhost:4200_

## Crear componentes con CLI

1. Con un comando podemos generar un componente, este comando se ejecuta dentro del directorio del proyecto.

```console
ng g component components/prueba
```

2. Volver a iniciar el servidor
```console
ng serve --open
```
3. Llamar al componente dentro del archivo principal _app.component.html_

```html
<prueba></prueba>
```

En el archivo TypeScript se cambió el nombre del componente de _app-prueba_ a _prueba_.

Se ha creado una carpeta con 4 archivos que corresponden al componente creado. Además, dento de _app.modules.ts_ se ha importado el mismo y se encuentra listo para su uso.

## Directiva nglf

1. Usaremos _Bootstrap_ como framework de _CSS_.
2. Ir a la [documentación de Bootstrap](https://getbootstrap.com/)
3. Copiar el CDN y pegar dentro de la etiqueta _head_ del _index.html_
```html
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

```
Nglf nos permite ocultar o mostrar elementos. La usamos al colocar como atributo en una etiqueta **ngIf="false"**, donde _false_ hará que se oculte el conteido de la etiqueta.

4. Dentro del _app.component.ts_ crear la variable booleana.

```Typescript
export class AppComponent {
  show:boolean = true;
}
```
5. Usar el valor de la variable _show_ para mostrar u ocultar el párrafo-

```html
<button class="btn btn-warning" (click)="show = !show">Acción</button>
    <p class="text-info" *ngIf="show">Párrafo</p>
```
6. También se puede hacer uso del condicional _else_ para interactuar entre otros elementos. Por ejemplo, si la variable _show_ es verdadera muestra el primer párrafo, caso contrario muestra la etiqueta que corresponde a la variable _showDos_, en esta ocasión el segundo párrafo. Es importante colocar el segundo párrafo dentro de la etiqueta _ng-template_.
```html
<button class="btn btn-warning" (click)="show = !show">Acción</button>
    <p class="text-info" *ngIf="show; else showDos">Párrafo 1</p>

    <ng-template #showDos>
        <p>Párrafo 2</p>
    </ng-template>
```
Se puede observar el html completo en el archivo __ngIf_else.html__ dentro de la carpeta _ejemplos_html_.

## Directiva nglf class
Esta directiva nos sirve para colocar clases directamente en nuestro código html, pero de una forma más dinámica.

1. Crear la variable _fondo_ que usaremos como ejemplo dentro del archivo de _Typescript_.

```Typescript
export class AppComponent {
  fondo:string = "";
}
```

2. Usamos dos botones que crean una clase dinámicamente en el párrafo al modificar el valor de la variable fondo.

```html
<button class="btn btn-dark mb-3" (click)="fondo='bg-dark'">Primero</button>
    <button class="btn btn-danger mb-3" (click)="fondo='bg-danger'">Segundo</button>
    
    <p class="text-info" [ngClass]="fondo">
        Una directiva estructural que incluye condicionalmente una plantilla basada en el valor de una expresión forzada a booleana. Cuando la expresión se evalúa como verdadera, Angular representa la plantilla proporcionada en una thencláusula, y cuando es falsa o nula, Angular representa la plantilla proporcionada en una elsecláusula opcional . La plantilla predeterminada para la elsecláusula está en blanco. 
    </p>
```
Primero se observa la página inicial.
<p align="center">
<img src="images/Angular_ngClass1.PNG">
</p>
</br>
El resultado al presional el botón _Primero_:
<p align="center">
<img src="images/Angular_ngClass2.PNG">
</p>
</br>
El resultado al presional el botón _Segundo_:
<p align="center">
<img src="images/Angular_ngClass3.PNG">
</p>
</br>

Se puede observar el html completo en el archivo __ngClass_fondo.html__ dentro de la carpeta _ejemplos_html_.

### NgClass condicional

Se puede usar como un filtro, ejemplo:

```html
 <button class="btn btn-dark mb-3" (click)="activo='primero'">Primero</button>
    <button class="btn btn-danger mb-3" (click)="activo='segundo'">Segundo</button>
    
    <p class="text-info d-none" [ngClass]="{'d-block':activo=='primero'}">
       Párrafo 1 
    </p>
    
    <p class="text-danger d-none" [ngClass]="{'d-block':activo=='segundo'}">
       Párrafo 2
    </p>
```

### Directiva ngFor

Se puede iterar un array con el uso de _ngFor_.

```html
<ul>
    <li *ngFor="let curso of cursos">{{curso}}</li>
</ul>
```
Esto creará listas de cada elemento perteneciente al arreglo _cursos_.

También se puede crear un arreglo con objetos dentro del componente.

```Typescript
export class AppComponent {
  
  animales:Array<any> = [
    {tipo:'Perro', nombre:'Boby', edad:10},
    {tipo:'Gato', nombre:'Brote', edad:2},
    {tipo:'Pato', nombre:'Rafa', edad:7}
  ]

}
```
Luego crear una tabla que recorra el arreglo usando __ngFor__.

```html
<table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">TIPO</th>
                <th scope="col">NOMBRE</th>
                <th scope="col">EDAD</th>
            </tr>
        </thead>
        <tbody>
            <tr *ngFor="let animal of animales; index as i">
                <th scope="row">{{i+1}}</th>
                <td>{{animal.tipo}}</td>
                <td>{{animal.nombre}}</td>
                <td>{{animal.edad}}</td>
            </tr>

        </tbody>
    </table>
```

<p align="center">
<img src="images/Angular_ngFor.PNG">
</p>

Se puede observar el html completo en el archivo __ngFor.html__ dentro de la carpeta _ejemplos_html_.

### Rutas en Angular

Se han generado componentes de _cabecera_, _footer_ que serán estáticos y _cuerpo_, _contacto_ que serán dinámicos.

En el archivo _app-routing.module.ts_ tenemos la constante _routes:Routes_, dentro de este arreglo colocamos como objeto las rutas de los componentes que serán dinámicos.

```Typescript
const routes: Routes = [
    { path: 'contacto', component: ContactoComponent }
];
```

Antes de todo esto en la parte superior del mismo archivo se deberá importar el componente a utilizar.

```Typescript
import { ContactoComponent } from './contacto/contacto.component';
```

Finalmente, en el _app.component.html_ colocamos el elemento _<router-outlet></router-outlet>_
Se puede observar el correcto funcionamiento en el navegador con la dirección: _http://localhost:4200/contacto_

<p align="center">
<img src="images/Angular_Routes1.PNG">
</p>

Para generar otras rutas se han generado otros componentes _inicio_ y _nosotros_

```console
ng g component inicio
ng g component nosotros
```

Actualizamos el archivo _app-routing.module.ts_ agregando las siguientes líneas.

```Typescript
import { ContactoComponent } from './contacto/contacto.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { InicioComponent } from './inicio/inicio.component';


const routes: Routes = [
  { path: 'contacto', component: ContactoComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'inicio', component: InicioComponent }
];
```
Para redirigir a una página de inicio usamos _redirecTo_. Entonces, modificaríamos el _path_ de inicio como se observa.

```Typescript
{ path: '', component: InicioComponent , pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
```

### Crear un Navbar

Creamos un componente para la cabecera y dentro de ese pegamos el _Navbar_ de ejemplo que nos da _Bootstrap_ en su [web oficial](https://getbootstrap.com/docs/4.0/components/navbar/)
Además, modificamos con nuestros componentes, quedándonos algo similar a lo siguiente.

```html
<nav class="navbar navbar-expand-lg navbar navbar-dark bg-primary">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Inicio <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Nosotros</a>
        </li>        
        <li class="nav-item">
          <a class="nav-link" href="#">Contacto</a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
```

Sin embargo, no haremos uso de _href_ sino de _routerLink_ para poder solamente actualizar los componentes sin cargar toda la página. Entonces, remplazamos cada _href_ por _routerLink_.
 Además, hacemos uso de la directiva de Angular _RouterLinkActive_

```html
    <ul class="navbar-nav mr-auto">
        <li class="nav-item"  routerLinkActive="active">
          <a class="nav-link" routerLink="/">Inicio <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item" routerLinkActive="active">
          <a class="nav-link" routerLink="/nosotros">Nosotros</a>
        </li>        
        <li class="nav-item" routerLinkActive="active">
          <a class="nav-link" routerLink="/contacto">Contacto</a>
        </li>
    </ul>
```

Por último, para que el _Navbar_ se expanda al ser más pequeña la pantalla dentro del _index.html_ importar jquery, popper y JavaScript de Bootstrap, se recomienda colocal dentro de la etiqueta _body_ antes del cierre del mismo.

```html

<!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

```
## Servicios

En la terminal crear un servicio con el siguiente comando, donde _equipo_ será el nombre del Servicio.
```console
ng g s equipo
```
Dentro de _app.module.ts_ importar el servicio.

```Typescript
import { ServicioService } from './servicio.service';

 providers: [
    ServicioService
  ],
```

Vamos a usar dentro del componente _nosotros_, entonces, importamos dentro del archivo _nosotros.component.ts_

```Typescript
import { ServicioService } from './../servicio.service';

//crear una variable _servicio
constructor(private _servicio:ServicioService) {     
  }
```
Para probar que funciona dentro del constructor de _servicio.service.ts_ agregamos un console.log para verificar que funciona.

```Typescript
export class ServicioService {

  constructor() {
    console.log('Funcionando servicio');
   }
}
```
<p align="center">
<img src="images/Angular_servicio.PNG">
</p>

Dentro de _servicio.service.ts_ creamos un arreglo de objetos y la clase que retornará el mismo.

```Typescript
servicio:any[] = [
    {
      nombre: 'Diego',
      especialidad: 'HTML',
      descipcion: 'Service is a broad category encompassing any value, function, or feature that an app needs. A service is typically a class with a narrow, well-defined purpose. It should do something specific and do it well.'
    },
    {
      nombre: 'David',
      especialidad: 'Javascript',
      descipcion: 'Service is a broad category encompassing any value, function, or feature that an app needs. A service is typically a class with a narrow, well-defined purpose. It should do something specific and do it well.'
    },
  ]

  constructor() {
    console.log('Funcionando servicio');
   }

   obtenerServicio(){
     return this.servicio;
   }
```

Dentro de _nosotros.component.ts_ hacemos uso de ese arreglo.

```Typescript
servicio:any[] = []; 

  constructor(private _servicio:ServicioService) { 
    this.servicio = _servicio.obtenerServicio();
  } 
```
Finalmente, en _nosotros.component.html_ visualizamos los elementos del arreglo.

```html
<ul class="list-group">
        <li class="list-group-item" *ngFor="let item of servicio">
            <h6>Nombre: {{item.nombre}}</h6>
            <h6>Especialidad: {{item.especialidad}}</h6>
            <a href="#">Leer más...</a>
        </li>
       
</ul>
```

<p align="center">
<img src="images/Angular_servicio_lista.PNG">
</p>

### Rutas dinámicas

Creamos el componente para el servicio, lo llamaremos _equipo_.

```console
ng g c equipo
```

Agregamos a la _routes_ e importamos dentro del archivo _app-routing.module.ts_

```Typescript
import { EquipoComponent } from './equipo/equipo.component';

const routes: Routes = [
  { path: 'equipo', component: EquipoComponent },
  //...
```
Ahora lo importante es generar el _id_. Esto se hace modificando la siguiente línea.

```Typescript
const routes: Routes = [
  { path: 'contacto', component: ContactoComponent },
  { path: 'equipo/:id', component: EquipoComponent },
```

Nos dirigimos a _nosotros.component.html_ y hacemos uso de _index as i_, dentro del _ngFor_. Además, usamos el _routerLink_ para el enlace. Esto es con la modificación de las siguientes líneas.

```html
<ul class="list-group">
        <li class="list-group-item" *ngFor="let item of servicio; index as i">
            <h6>Nombre: {{item.nombre}}</h6>
            <h6>Especialidad: {{item.especialidad}}</h6>
            <a [routerLink]="['/equipo',i]">Leer más...</a>
        </li>       
    </ul>
```
<p align="center">
<img src="images/Angular_servicio_elemento.PNG">
</p>

Para poder leer una ruta tenemos que importar _ActiveRoute_ en el archivo _equipo.component.ts_

```Typescript
import {ActivatedRoute} from '@angular/router';
```
Además, crear una variable en el costructor y hacer uso de esta variable de tipo _ActivatedRoute_, y leer los parámetros.

```Typescript
constructor(
    private ruta:ActivatedRoute
  ) { 
    this.ruta.params.subscribe(params=>{
      console.log(params['id'])
    })
  }
```

<p align="center">
<img src="images/Angular_parametro1.PNG">
</p>

Dentro de _servicio.service.ts_ creamos un método que retorne solamente un elemento del arreglo.

```Typescript
obtenerUno(i){
     return this.servicio[i];
   }
```
Luego importamos el servicio al componente _equipo.component.ts_ y hacemos uso del método para obtener los parámetros correspondientes al id.

```Typescript
import { ServicioService } from './../servicio.service';
//
export class EquipoComponent implements OnInit {

  equipo:any = [];

  constructor(
    private ruta:ActivatedRoute,
    private _servicio: ServicioService
  ) { 
    this.ruta.params.subscribe(params=>{
      console.log(params['id']);
      this.equipo = this._servicio.obtenerUno(params['id']);
    })
  }
    //
  ```

Finalmente dentro de _equipo.component.html_ visualizamos los datos del elemento.

```html
<div class="mt-5">
    <h3>Nombre: {{equipo.nombre}}</h3>
    <p>Especialidad: {{equipo.especialidad}}</p>
    <p>Descripción: {{equipo.descripcion}}</p>
</div>
```

<p align="center">
<img src="images/Angular_ruta_dinamica
.PNG">
</p>






