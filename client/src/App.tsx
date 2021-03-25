import { Route, BrowserRouter } from 'react-router-dom';
import Landing from './pages/Landing';

import './assets/global.css';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Landing} exact />
    </BrowserRouter>
  );
}

export default App;
