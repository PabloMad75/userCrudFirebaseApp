
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { UserApp } from './UserApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <UserApp/>
  </BrowserRouter>
  

)
