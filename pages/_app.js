// pages/_app.js

// Importar el componente Provider de react-redux, que conecta React con Redux
import { Provider } from 'react-redux';

// Importar la instancia de la tienda (store) de Redux
import store from '../redux/store';

// Componente principal que sirve como punto de entrada para la aplicación Next.js
function MyApp({ Component, pageProps }) {
  // Devolver el componente Provider que envuelve a la aplicación
  return (
    // Provider utiliza el store para proporcionar acceso al estado global de Redux
    <Provider store={store}>
      {/* Component es el componente de la página actual, y pageProps son las propiedades de la página */}
      <Component {...pageProps} />
    </Provider>
  );
}

// Exportar el componente MyApp como el componente principal de la aplicación
export default MyApp;
