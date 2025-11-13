import './App.css'
import { useNavigate } from 'react-router-dom'; 

function App() {
  const navigate = useNavigate();

  function homePag() {
    navigate('/Home');
  }

  return (
    <div className='cadastro-container'>
      <h1>Hello World</h1>
      <button onClick={homePag}>Ir para Home</button>
    </div>
  )
}

export default App
