Autor: Erick Villarroel

Pantalla de GiHub
![image](https://github.com/user-attachments/assets/a9b21f36-173b-46cf-bb1a-9b7ffd21a7a7)


Pantalla de Biografia
![image](https://github.com/user-attachments/assets/5d63e394-97b2-4e97-868b-4ec55654b128)


Pantalla de Calculadora de raices
![image](https://github.com/user-attachments/assets/3d0406a3-6d2d-4f56-9e22-1cd096577fb0)


Pantalla de Guardar Texto
![image](https://github.com/user-attachments/assets/b5cfe0b6-dc0c-42de-bc4c-692105a99de9)


Pantalla de Fechas
![image](https://github.com/user-attachments/assets/b8a9e813-0e3e-4195-ac1e-879d682385b3)


Configuración del Proyecto:
Empecé creando un proyecto en Ionic con Angular.
Instalé e importé los módulos necesarios, como Filesystem de Capacitor para interactuar con el sistema de archivos y jsPDF para generar archivos PDF.
Diseño de la Interfaz de Usuario:

En el HTML, creé un formulario con un ion-textarea para que el usuario pueda escribir el texto que quiere guardar.
Agregué un botón "Guardar Texto" que solo se habilita si hay texto ingresado.
Configuré un ion-toast para mostrar mensajes de éxito o error cuando el usuario guarda el texto.
Lógica en TypeScript:

En el componente Tab4Page, desarrollé la lógica que:
Verifica que el campo texto no esté vacío antes de intentar guardarlo.
Genera un archivo PDF con el texto del usuario usando jsPDF.
Convierte el PDF en formato base64 para poder guardarlo en el sistema de archivos del dispositivo.
Guarda el archivo en el directorio de documentos usando Filesystem de Capacitor.
Muestra un mensaje de éxito o error a través de un ion-toast.
Manejo de Errores y Mensajes:

Configuré el toast para notificar si hay algún error al guardar o si el guardado fue exitoso.
También añadí una verificación para alertar al usuario si intenta guardar sin haber ingresado texto.
Pruebas en Dispositivos:

Primero verifiqué que todo funcionara bien en la PC y luego generé una APK para probar en el celular.
Ajusté la lógica de guardado para asegurar que el archivo se guarde correctamente en el dispositivo y que el usuario pueda acceder a él.
Al finalizar, logré que la app tomara el texto ingresado por el usuario, lo guardara como PDF en el sistema de archivos del dispositivo y le notificara sobre el estado del guardado.
