import { BrowserRouter } from "react-router-dom";
import RoutesIndex from "./routes/RoutesIndex";
import Header from "./components/Header";
import { AuthProvider } from "./context/AutuhContext";
import { SearchProvider } from "./context/Searchcontext"; // Importa el SearchProvider

function App() {
  return (
    <>
      <AuthProvider>
        <SearchProvider> {/* Envuelve la aplicación con el SearchProvider */}
          <BrowserRouter>
            <Header />
            <RoutesIndex />
          </BrowserRouter>
        </SearchProvider>
      </AuthProvider>
    </>
  );
}

export default App;

