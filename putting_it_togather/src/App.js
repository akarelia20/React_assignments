import './App.css';
import User from "./components/User"

const usersInfo = [
  { first_name: "Jane",
    last_name : "Doe",
    age: 45,
    hair_color : "Black"
  },
  { first_name: "John",
    last_name : "Smith",
    age: 88,
    hair_color : "Brown"
  }
]

function App() {
  return (
    <div className="App">
      {usersInfo.map((person,index) =>(
        <User 
        // align= {"user"}
        first_name = {person.first_name}
        last_name = {person.last_name}
        age = {person.age}
        hair_color = {person.hair_color}
        />
      ))}
    </div>
  );
}

export default App;
