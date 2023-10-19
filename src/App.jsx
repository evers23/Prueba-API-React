import "bootstrap/dist/css/bootstrap.min.css";
import MiApi from "./components/MiApi";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <div className="landing">
      <Header />
      <MiApi />
      <Footer />
    </div>
  );
}

export default App;

