##  Descripción del proyecto:
### La aplicación fue desarrollada siguiendo un esquema modular, donde cada responsabilidad está dividida en carpetas específicas. A continuación, se describen las carpetas más importantes y sus funciones:

- Components: Esta carpeta contiene componentes reutilizables que pueden ser utilizados en diferentes áreas de la aplicación. Ejemplos de estos componentes incluyen botones, formularios y elementos de interfaz de usuario comunes.

- Screens: En esta carpeta se encuentran las distintas pantallas de la aplicación. Cada pantalla representa una vista completa que el usuario puede ver y con la que puede interactuar, como la pantalla de inicio, el perfil de usuario, el carrito de compras, entre otras.

- Navigation: La carpeta de navegación gestiona la lógica de navegación entre las múltiples pantallas de la aplicación. Utilizando react-navigation para definir los diferentes stacks de la aplicación. 

- Services: En esta se manejan todos los servicios de la aplicación, incluyendo la autenticación de usuarios y las operaciones relacionadas con la tienda.

- Databases: Esta carpeta contiene la lógica para la sincronización en tiempo real con la base de datos de Firebase y la interacción con la API de Google Maps.

- Features: En esta carpeta se utiliza Redux para manejar el estado global de la aplicación. Cada subcarpeta dentro de features representa un dominio o funcionalidad específica (como el carrito de compras, el contador de productos, la tienda y los usuarios), y contiene slices de Redux que definen el estado inicial, los reducers y las acciones correspondientes.

### Librerias utilizadas:

- react-native-toast-message: Biblioteca para mostrar notificaciones tipo "toast" en aplicaciones React Native. Utilizada con el objetivo de proporcionar una retroalimentación al usuario.
- expo-font: Manejo y carga de fuentes personalizadas.
- react-redux: Conexión de Redux con React.
- expo-location: Acceso a la ubicación del dispositivo.
- expo-image-picker: Selección de imágenes desde la galería o cámara.
- expo-sqlite: Acceso a una base de datos SQLite.
- expo-file-system: Manipulación del sistema de archivos en dispositivos móviles.

Entre otras..
