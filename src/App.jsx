import "./App.css";
import MyNavbar from "./components/MyNavBar";
import Home from "./pages/home";

function App() {
  return (
    <>
      <header>
        <MyNavbar />
      </header>
      <main>
        <Home></Home>
      </main>
    </>
  );
}

export default App;
