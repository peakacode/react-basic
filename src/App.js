import './App.css';

function App() {
  const handleNameChange = () => {
    const names = ['Dan', 'Jenny', 'Lloyd']
    const int = Math.floor(Math.random() * 3);
    return names[int];
  }

  return (
    <div className="App">
      <h1>Home Page</h1>
      <p>Welcome <b>{handleNameChange()}</b>, to your personal Dashboard</p>
    </div>
  );
}

export default App;
