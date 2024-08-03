# Task Manager Application

## Requisitos

- JDK 8
- Maven
- MySQL

## Configuración de la Base de Datos

1. Crear la base de datos:
    ```sql
    CREATE DATABASE taskmanagerdb;
    ```

2. Configurar las credenciales en el archivo `application.properties`:
    ```properties
    spring.datasource.url=jdbc:mysql://localhost:3306/taskmanagerdb
    spring.datasource.username=root
    spring.datasource.password=12345678
    spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
    spring.sql.init.mode=always
    spring.sql.init.schema-locations=classpath:schema.sql
    spring.sql.init.data-locations=classpath:data.sql
    ```

## Iniciar la Aplicación

1. Clonar el repositorio:
    ```bash
    git clone https://github.com/MauroTapia/TaskManager.git
    cd TaskManager
    ```

2. Compilar y ejecutar la aplicación:
    ```bash
    mvn clean install
    mvn spring-boot:run
    ```

3. Acceder a la aplicación en el navegador:
    ```
    http://localhost:8084
    ```

## Funcionalidades

- **Pantalla de Inicio**: Bienvenida y botón para registrar una tarea.
- **Pantalla de Registro de Tarea**: Formulario para registrar Nombre, Descripción y Fecha de inicio de una tarea.
- **Listado de Tareas**: Muestra las tareas registradas.

## Estructura del Proyecto

El proyecto sigue la estructura MVC y usa MyBatis para ORM. La conexión a datos está separada en una dependencia, lo que facilita el mantenimiento y la escalabilidad.
