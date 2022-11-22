
import './App.css';
import  CrossText  from './components/text/CrossText';
import CrossButton from './components/button/CrossButton';
import CrossInputBox from './components/inputBox/CrossInputBox';
import CrossAnimation from './components/animation/CrossAnimation';


function App() {

  const click = () =>{
    console.log('click');
  }

  const print = (e)=>{
    console.log(e);
  }

  return (
    <div className="App">
      <CrossText>
        Ciao
      </CrossText>

      <CrossButton callback={click}>
        <CrossText>
          Click
        </CrossText>
      </CrossButton> 

      <CrossInputBox 
        placeholder={"placeholder"}
        callback={print}
      />

      <CrossAnimation />
    </div>
  );
}

export default App;
