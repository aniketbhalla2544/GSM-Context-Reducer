import './App.css';
import { StoreContextProvider } from './store/StoreContext';

function App() {
  return (
    <StoreContextProvider>
      <div className='App'>
        <h1>Hello to my state management</h1>
      </div>
    </StoreContextProvider>
  );
}

export default App;
