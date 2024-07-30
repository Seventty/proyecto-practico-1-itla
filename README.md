
# Proyecto de Gestión de Tareas con Angular

Este proyecto es una aplicación de gestión de tareas desarrollada en Angular. Permite a los usuarios agregar, visualizar y marcar tareas como completadas mediante una interfaz sencilla y eficiente. A continuación, se detalla la estructura y las funcionalidades principales del proyecto.

## Funcionalidades

1. **Lista de Tareas** :

* Muestra una lista de tareas recuperadas de un servicio.
* Cada tarea incluye una descripción y un estado de completado.

1. **Agregar Tareas** :

* Utiliza un modal para ingresar nuevas tareas.
* El modal incluye un formulario para ingresar la descripción de la tarea y establecer su estado de completado.
* Al guardar, la tarea se agrega a la lista y el modal se cierra automáticamente.

1. **Marcar Tareas como Completadas** :

* Permite marcar las tareas como completadas desde la lista.
* Utiliza un servicio para actualizar el estado de las tareas.

## Estructura del Proyecto

* **`ListaTareaComponent`** : Componente principal que muestra la lista de tareas. Incluye un modal para agregar nuevas tareas y maneja la lógica para abrir y cerrar el modal.
* **`TareaComponent`** : Componente para representar una tarea individual en la lista. Permite marcar una tarea como completada.
* **`TareaFormComponent`** : Componente de formulario reactivo para agregar nuevas tareas a través del modal.
* **`ModalComponent`** : Componente reutilizable para la gestión de modales. Permite abrir y cerrar modales con configuraciones específicas.

## Servicios

* **`TareaService`** : Servicio encargado de gestionar las operaciones relacionadas con las tareas, como obtener la lista de tareas y marcar tareas como completadas.

## Configuración y Dependencias

* **Angular** : Utiliza Angular para la estructura del proyecto y la gestión de componentes.
* **RxJS** : Utiliza RxJS para manejar observables y la comunicación entre componentes y servicios.
* **ng-bootstrap** : Utiliza ng-bootstrap para la implementación de modales.
* **Swal2**: Utiliza sweetAlerto2 para gestionar los modales

## Pruebas

Las pruebas unitarias se realizan utilizando Jasmine y Angular Testing Library para asegurar que los componentes y servicios funcionen correctamente.

Para más detalles sobre cómo configurar y ejecutar el proyecto, consulta los archivos de configuración en el repositorio.
