import Suraj from './Suraj';

function App() {
  const name = 'John';
  return (
    <div style={{ backgroundColor: 'blue', padding: '10px', marginBottom: '30px' }}>
      <Suraj />
      <Suraj />
      <Suraj />
      <Suraj />
      <h1>Lets get started!</h1>
      <h1>{name}</h1>
      <div style={{ backgroundColor: 'red', padding: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h2 style={{ color: 'green' }}>Task 1</h2>
        <p style={{ color: 'green' }}>This is a task</p>
      </div>
      <h1>{10 + 10}</h1>
      <h1>{Math.random() > 0.5 ? 'Greater than 0.5' : 'Less than 0.5'}</h1>
    </div>
  )
}

export default App;