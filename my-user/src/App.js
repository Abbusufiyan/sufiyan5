import './App.css';

function App() {
  let name = "sufiyan"
  let department = "computer science engg";
  let date =  new Date().toLocaleDateString();
  let time = new Date ().toLocaleTimeString();

  return (
    <>
    <h1> hi viewer i am {name} and i want to tell you that i am a student of  {department} depertment </h1>

    <h1>
      the present time is {time} and date is {date}
    </h1>
    </>
    
  
  );
}

export default App;
