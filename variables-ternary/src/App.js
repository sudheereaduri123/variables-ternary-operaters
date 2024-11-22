import logo from './logo.svg';
import './App.css';
import MarksSheet from './Components/MarksSheet';

function App() {
  return (
    <div className="App">
      <MarksSheet name="Sudheer"EngMarks="72" ComMarks="76" TelMarks="88" HinMarks="94" MathsMarks="92" SciMarks="84" SocMarks="90"/>
      <MarksSheet name="Ravi" EngMarks="66" ComMarks="74" TelMarks="82" HinMarks="77" MathsMarks="85" SciMarks="70" SocMarks="90"/>
     
      <MarksSheet name="Nari" EngMarks="62" ComMarks="86" TelMarks="58" HinMarks="84" MathsMarks="72" SciMarks="86" SocMarks="70"/>
     
       
    </div>
  );
}

export default App;
