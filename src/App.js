import logo from './logo.svg';
import './App.css';

const day = new Date();
const time = day.getHours();
let message = '';
const customStyle = {
  color: "blue"
}
const user = " Jae";

if(time > 12 && time < 18){
  message = "Good Afternoon" + user + ".";
  customStyle.color = "blue";
} else if(time >= 18){
  message = "Good Evening" + user + ".";
  customStyle.color = "teal";
} else {
  message = "Good Morning" + user + ".";
  customStyle.color = "green";
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Your React App...</h1>
      </header>
      <body className="App-body">
        <h2 className="heading" style={customStyle}>{message}</h2>
      </body>
    </div>
  );
}

export default App;
