import logo from './logo.svg';
import './App.css';

function App() {

  var name= "niloy";
  const heroName= ["A", "B", "C", "D"]

  var person={
    name: "Salman",
    job: "nothing"
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Person name= "Salman" nayika="Shiry"></Person>
        <Person name="Siddique" nayika="Afrin"></Person>
        <Person name="Niloy" nayika="Jhuma"></Person>
        <br />
        <br />
        <Person name={heroName[1]}></Person>


        <p>
           <code>src/App.js</code> and save to reload.
        </p>
        <h1>Result: {2+3}</h1>
        <h2>{name}</h2>
        <h3 style={{backgroundColor: 'cyan', color: 'yellow'}} >{person.name +" "+ person.job}</h3>
        <p>My react paragraph</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function Person(pro){

  const personStyle={
    border: '2px solid green',
    margin: '15px',
    width: '800px'
  }
  return (
  
  <div style={personStyle}>
  <h1>Name: Hello This is {pro.name}</h1>
  <h3>Name: {pro.nayika}</h3>
  </div>
  
  )
}

export default App;
