import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { Game } from "./components/Game";
import Background from "./assets/bg.jpg";
function App() {
  return (
    <>
      <Provider store={store}>
        <div className='App game-bg--container'>
          <img className='game-bg' src={Background} alt='' />
          <Game />
        </div>
      </Provider>
    </>
  );
}

export default App;

