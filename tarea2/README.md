# tareas_servidor_O2024

## TAREA2: Autenticacion de usuario

### Actividades
**Registro**
1. Se debe crear el flujo para dar de alta un usuario (nombre, correo, rol, contraseña, status)
2. Se debe validar que el usuario no se encuentre repetido
3. Se debe almacenar el usuario en la base de datos
4. La contraseña NO se debe almacenar en texto plano
 

**Login**
1. Se debe crear la ruta que permita recibir el correo y la contraseña
2. Se debe validar en la base de datos (coincidan usuario y contraseña y usuario no eliminado o bloqueado)
 

**Token**
1. En caso de que se encuentre el usuario (con base en el correo y la contraseña de login) se debe generar el token del usuario
2. El token se genera mediante JTW
3. Utilizar un secret key almacenado en el .env
4. Este token será la respuesta al endpoint de login


```
> Intalación de paquetes
npm install

> Run para distribución
npm start

> Run para desarrollo
npm run dev

```

**NOTA: Para probar función de registro y login, probar las siguientes rutas con los campos definidos en src/model/user.ts en formato json para el body**
```
> Registro: localhost:3000/users/sigin
> Loguear: localhost:3000/users/login
```