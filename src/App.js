import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from './components/NavBar/navbar';
import FileExplorer from './components/File-Explorer/fileExplorer';
import './index.css'
import './App.css';

function App() {
  let [item, setItem] = useState("Music")
  function clickedNavItem(clickedItem) {
    setItem(clickedItem)
  }
  return (
    <Container fluid>
      <Row>
        <Col md={3} sm={3} className="sideBar">
          <Navbar clickedItem={clickedNavItem} />
        </Col>
        <Col sm={9} md={9} className="mainView">
          <FileExplorer clickedItem={item} />
        </Col>
      </Row>
    </Container>
  )
}

export default App;
