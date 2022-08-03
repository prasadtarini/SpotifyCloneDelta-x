
import './App.css';
import Header from './Components/Header/Header';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Songs from './Components/Songs/Songs';
import Text from "./Components/Songs/Text";

function App() {
  return (
    <div>
      <Header/>
      <Songs/>
     
    </div>
  );
}

export default App;
