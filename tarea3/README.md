# tareas_servidor_O2024

## TAREA2: Autenticacion de usuario

### Actividades
**Carga de archivos**
1. Deberás crear un endpoint que permita subir documentos de PDF a la carpeta "documents" en raiz. 
2. Se debe habilitar el endpoint /uploads que debe permitir la carga de uno o varios documentos de PDF a través del parámetro llamado docs
3. El middleware creado a través de Multer debe validar que el archivo sea PDF.
4. El endpoint, en caso de que el archivo sea cargado satisfactoriamente, deberá responder con los datos del archivo (nombre, tamaño, etc).
5. En caso de que la carga de archivo no sea satisfactoria, el endpoint deberá devolver un error 400 (Bad Request)

**Descarga de Archivo**
1. Crear un endoint llamado /download que debe recibir un parámetro de query llamado file.
2. Parámetro file debe recibir el nombre del archivo. 
3. Si el archivo existe dentro de la carpeta docs, el endpoint debe responder con el archivo PDF. De lo contrario, el controlador deberá devolver un error 404. 

```
> Intalación de paquetes
npm install

> Run para correr proyecto en localhost:3000
npm start
```

