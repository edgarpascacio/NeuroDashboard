import { Container, Row, Col } from 'react-bootstrap';
import './styles.css';

function Dashboard({ children }) {
  return (
    <Container fluid className="dashboard-container">
      
      <Row className="h-100">
        <Col lg={3} className="sidebar d-flex flex-column px-3 py-4">
          
          <ul className="nav flex-column flex-grow-1">
            <li className="nav-item mb-2">
              <a className="nav-link active rounded-pill p-3" href="#">
                <i className="bi bi-speedometer2 me-2"></i>
                Dashboard
              </a>
            </li>
           
          </ul>
        </Col>
        <Col lg={9} className="main-content d-flex flex-column p-4">
          
          <div className="bg-white rounded p-4 flex-grow-1">{children}</div>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
