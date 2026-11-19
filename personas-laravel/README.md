<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework. You can also check out [Laravel Learn](https://laravel.com/learn), where you will be guided through building a modern Laravel application.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains thousands of video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## Laravel Sponsors

We would like to extend our thanks to the following sponsors for funding Laravel development. If you are interested in becoming a sponsor, please visit the [Laravel Partners program](https://partners.laravel.com).

### Premium Partners

- **[Vehikl](https://vehikl.com)**
- **[Tighten Co.](https://tighten.co)**
- **[Kirschbaum Development Group](https://kirschbaumdevelopment.com)**
- **[64 Robots](https://64robots.com)**
- **[Curotec](https://www.curotec.com/services/technologies/laravel)**
- **[DevSquad](https://devsquad.com/hire-laravel-developers)**
- **[Redberry](https://redberry.international/laravel-development)**
- **[Active Logic](https://activelogic.com)**

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

## Guía 4: Editar y actualizar personas

En esta práctica se implementó la funcionalidad para editar y actualizar los datos de una persona registrada en MySQL, conservando su identificador (id).

### Archivos utilizados

**1. routes/web.php**

Recibe las peticiones HTTP y las dirige al controlador correspondiente. Se utilizaron las rutas GET para mostrar el formulario de edición y PUT para procesar la actualización.

**2. app/Http/Controllers/PersonaController.php**

Contiene los métodos `edit()` y `update()`. El primero busca la persona y muestra sus datos; el segundo valida la información ingresada y guarda los cambios utilizando `save()`.

**3. app/Models/Persona.php**

Es el modelo Eloquent que permite consultar y modificar los registros de la tabla `personas` en MySQL.

**4. resources/views/personas/edit.blade.php**

Genera el formulario HTML de edición, mostrando los datos actuales de la persona y permitiendo modificarlos.

**5. resources/views/personas/index.blade.php**

Muestra el listado de personas registradas y contiene el enlace Editar para seleccionar un registro.

### Conceptos aprendidos

- **findOrFail():** busca un registro por su id y genera un error 404 si no existe.
- **PUT:** permite enviar una petición para actualizar un registro existente.
- **old():** recupera los valores ingresados cuando ocurre un error de validación.
- **ignore():** permite conservar el DNI de la persona editada sin considerarlo duplicado.

### Resultado

Se logró editar los datos de las personas existentes, validando la información antes de guardarla y manteniendo el mismo identificador sin crear registros adicionales.



**Migración:** Permite crear la tabla `personas` en MySQL con sus respectivos campos.

**Seeder:** Permite insertar registros iniciales para realizar pruebas.

**Factory:** Genera datos ficticios de personas automáticamente.

**Modelo:** `Persona.php` representa la tabla `personas` y permite realizar operaciones mediante Eloquent.

**Blade:** Permite generar las vistas HTML del sistema, como el listado y los formularios de personas.

**Sesión:** Mantiene al usuario autenticado para acceder al CRUD.

**CSRF:** Protege los formularios mediante el token `@csrf`.

**Métodos HTTP:**
- GET `/personas`: muestra las personas registradas.
- POST `/personas`: guarda una nueva persona.
- PUT `/personas/{id}`: actualiza una persona.
- DELETE `/personas/{id}`: elimina una persona.

## Funcionamiento de los archivos

**¿Qué archivo recibe la petición?**

`routes/web.php` recibe y dirige las solicitudes al controlador correspondiente.

**¿Qué archivo consulta o modifica los datos?**

`PersonaController.php` procesa las solicitudes y utiliza el modelo `Persona.php` para consultar o modificar los datos en MySQL.

**¿Qué archivo genera el HTML?**

Los archivos Blade ubicados en `resources/views/personas/` generan las páginas HTML que se muestran al usuario.

## Verificación del CRUD

Se verifica el funcionamiento de las operaciones de creación, consulta, actualización y eliminación de personas. La eliminación solicita confirmación y utiliza el método DELETE. Las rutas están protegidas mediante autenticación.
