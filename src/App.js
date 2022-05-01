import logo from './logo.svg';
import Header from './componetns/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './main.css'

window.addEventListener('scroll',(e)=> {
  e.preventDefault()
  // console.log(window.scrollY)
  // console.log(e)
})



function App() {
    return (
      <div className="App" >
        <Header></Header>
      </div>
    );
  }

export default App;
