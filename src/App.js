import './App.scss';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="app-component">
      <Paper elevation={3}>App component</Paper>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>

      <br></br>
      <br></br>
      <button type="button" class="btn btn-primary">
        Primary
      </button>
      <button type="button" class="btn btn-secondary">
        Secondary
      </button>
      <button type="button" class="btn btn-success">
        Success
      </button>
      <button type="button" class="btn btn-danger">
        Danger
      </button>
      <button type="button" class="btn btn-warning">
        Warning
      </button>
      <button type="button" class="btn btn-info">
        Info
      </button>
      <button type="button" class="btn btn-light">
        Light
      </button>
      <button type="button" class="btn btn-dark">
        Dark
      </button>
    </div>
  );
}

export default App;
