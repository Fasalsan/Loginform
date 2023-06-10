import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <body className='bk'>
      <h4 className='log'>Login</h4>
      <form>
        <div className='input-container'>
          <input type='text' className='text-input' placeholder='Enter your usename'></input>
          <label for='username' className='label'>Username</label>
        </div>
      </form>
      <form>
        <div className='input-container'>
          <input type='password' className='text-input' placeholder='Password'></input>
          <label for='Password' className='label'>Password</label>
        </div>
      </form>
    </body>
    
  )
}

export default App;
