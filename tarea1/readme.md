# tareas_servidor_O2024

## TAREA1: Middleware de Validacion de Rol
**Esta tarea consiste en el desarrollo de un middleware para validar el acceso a traves del rol del usuario que ejecuta la petición.Para validar la implementación de dicho middleware, deberás "hardcodear" un usuario con un rol que puede ser admin gerente o cliente.cEn la ruta de GET /usuarios, deberás implementar el middleware de la siguiente manera:**
```
router.get('/usuarios', roles(['admin', 'gerente']), controller.listAll);
```
**Si el rol del usuario hardcodeado corresponde con alguno de los especificados en la definición de la ruta, el controlador deberá responder con el texto "lista de usuarios".De lo contrario, el middleware deberá devolver un error 403.**


**Estos son los comandos iniciales para la instlación de paquetes e inciialización de configuración de estilos :**
```
> Intalación de paquetes
npm install

> Run para distribución
npm start

> Run para desarrollo
npm run dev

```

**NOTA: Para cambiar el usuario hardcodeado, ir a src/middlewares y cambiar atributo de rol para validar funcionamiento.**
**Para probar url ingresar en buscador http://localhost:3000/users?key=1234**