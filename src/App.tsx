// import "./App.css";
import AppRoute from "./routes";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <AppProvider>
      <AppRoute />
    </AppProvider>
  );
}

export default App;
