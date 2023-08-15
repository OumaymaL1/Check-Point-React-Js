import Form from "./Form";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNav from "./AppNav";
import Image from "./Img";
import Description from "./Descrip";
import "./App.css";

function App() {
  let adress = "Lac 1 -";
  let phone = "52 521 002";
  return (
    <div className="App">
      <AppNav />
      <Image />
      <Description adresse={adress} tel={phone} />
    </div>
  );
}

export default App;
