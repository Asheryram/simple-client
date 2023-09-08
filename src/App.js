import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from 'react-toastify';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";

import UserList from "./components/UserList";
import CreateUser from "./components/CreateUser";

function App() {
  return (
    <> 
      <Container fluid>
        <ToastContainer draggablePercent={60}/>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/create" element={<CreateUser />} />

        </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;
