# Myportfolioangular

Proyecto generado con Angular version 14.1.3. y con la version 1.75.0 de Visual Studio Code.  

## Aclaracion
-El Readme, Los Tags,commits,merge de ramas y demas comandos/funcionalidades de Git y Github no estan del todo claros en muchos casos. No queria dejar pasar la oportunidad de mencionar que durante todo este curso me he capacitado y aprendido mas sobre estas funcionalidades para mejorar en un futuro en su implementacion.Debido a eso en el proyecto se puede encontrar algunos errores o malas practicas en los anteriores mencionados.Para mejorar y corregir algunas funcionalidades ya era tarde debido a que el proyecto ya tenia un progreso avanzado y no se habian realizado las buenas practicas a tiempo. Desde ya muchas gracias por tomarse el tiempo de leer.

## Componentes Explicacion

    INDEX

Primero que nada en mi index tengo todos los componentes correspondientes a lo que quiero mostrar que son: 
-Perfil
-Educacion
-Experiencia
-Proyectos
-Habilidades

En estos componentes traigo de mi base de datos MYSQL los datos correspondientes que quiero mostrar en mi pagina principal.

    DASHBOARD
    
   En el componente "BODYDASHBOARD" lo que trate de realizar es dividir en paneles cada seccion correspondiente para poder agregar,eliminar, editar  lo que queramos.
   El cual tome la decisión tambien que desde este mismo componente de "BODYDASHBOARD" insertar los botones para agregar, eliminar y editar lo que queramos.
   En el boton eliminar lo tenemos con una funcion llamada (click)="borrarLorem(borrarLorem.id)" para que llame a la funcion del archivo TS y me borre el elemento       correspondiente.
   En el boton Agregar y Eliminar llamamos al modal correspondiente para poder llenar el formulario reactivo que tenemos para cargar o borrar una educacion , un       proyecto, una experiencia, o lo que queramos cargar. 
  
  --ACLARACION IMPORTANTE: Despues de mucho insistir sigo sin poder que desde el Dashboard poder editar correctamente mis diferentes componentes de cada seccion. Desde el Backend lo pude hacer con exito al metodo UPDATE , pero desde el front end insisti muchisimo pero no pude lograr que me edite correctamente. Me costo mucho realizar el proyecto al haber empezado el curso con 0 conocimiento en el mundo IT. Agradezco la compresion.
   

## Name
Portafolio Web Nicolás Angeletti

- Los manuales pueden no estar del todo claros, pero se aprecia bien el subneteo. Están pendientes los importantes.

## Development server

Ejecute `ng serve` para un servidor de desarrollo. Navegue a `http://localhost:4200/`. La aplicación se recargará automáticamente si cambia cualquiera de los archivos de origen.


## Facility
En mi interfaz utilizo la versión 14.1 de angular y 1.75.0 de código de estudio visual.
Con Extensiones en Visual Studio Code descargado:
-esquemas angulares v5.2.9
-Servicio de lenguaje angular v15.0.1
-angular 10 fragmentos- mecanografiado, html, material angular, ngRx, RxJS y Flex.
-Prettier-formateador de código v0.10.4
A través de los comandos "ng g c nombrecomponente" realizar la creación
de los diferentes componentes que forman parte de mi proyecto.
También la creación de servicios para conectar mi front con mi backend
a través del comando "ng g service nameservice"
Ejecute `ng generar componente nombre-componente` para generar un nuevo componente. También puede usar `ng generar directiva|p ipe|servicio|clase|guardia|interfaz|enum|módulo`.

## RoadMap

En un futuro próximo quiero incorporar más funciones interactivas a mi sitio web
más secciones de página A medida que realiza proyectos personales, haga una página de
proyectos mucho más interesantes, para mostrar mi desempeño con cada tecnología.
También me gustaría hacer modificaciones en la sección de "habilidades" para lograr un
diseño más fluido e interactivo. Todo esto requerirá un tiempo que no podré alcanzar el día de la fecha de entrega.
realizar.

## Contributing

Abierto a contribuciones de todo tipo. teniendo en cuenta que es un proyecto realizado solo por mi.
Teniendo en cuenta que es mi primera experiencia con la planificación, elaboración y desarrollo de un proyecto real de desarrollo web
y es posible que tenga cosas que mejorar en su código y funciones.
 
## Build

Ejecute `ng build` para compilar el proyecto. Los artefactos de compilación se almacenarán en el directorio `dist/`.

## Running unit tests

Ejecute `ng test` para ejecutar las pruebas unitarias a través de [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Ejecute `ng e2e` para ejecutar las pruebas de extremo a extremo a través de una plataforma de su elección. Para usar este comando, primero debe agregar un paquete que implemente capacidades de prueba de un extremo a otro.

## Further help

Para obtener más ayuda sobre Angular CLI, use `ng help` o consulte la página [Descripción general y referencia de comandos de Angular CLI] (https://angular.io/cli).

 
