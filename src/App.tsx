import Header from "./components/Header";
import { ThemeProvider } from "./components/theme-provider";
import HomePage from "./HomePage";

function App() {
  return (
    <section>
      {" "}
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <div className="h-screen">
          <Header />
          <HomePage />
        </div>
      </ThemeProvider>
    </section>
  );
}

export default App;
