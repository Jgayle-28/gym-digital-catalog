import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

const Navigation = () => {
  // TODO show category navbar conditionally upon route
  //  TODO Add sign out capability to main navbar for admin
  // TODO Map through categories and show each category
  // TODO Show categories conditionally for mobile -> only on type routes
  // TODO Add actual routes to nav links
  return (
    <header className='fixed-top'>
      {/* main navbar */}
      <Navbar bg='dark' variant='dark' expand='sm' className='main-nav'>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>
              <img
                src='/images/logos/nav-logo.svg'
                width='60'
                height='60'
                className='d-inline-block align-top'
                alt='Black Iron Strength'
              />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <LinkContainer to='/'>
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/about'>
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/contact'>
                <Nav.Link>Contact</Nav.Link>
              </LinkContainer>

              {/* Mobile sub categories */}
              <div className='d-block d-sm-none'>
                <hr />
                <h5 className='text-light'>Equipment Type</h5>
                <LinkContainer to='/products/home'>
                  <Nav.Link>Home Gyms</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/products/commercial'>
                  <Nav.Link>Commercial Gyms</Nav.Link>
                </LinkContainer>

                <hr />
                <h5 className='text-light'>Categories</h5>
                <Nav.Link>Squat Rack / Smith Machines</Nav.Link>
                <Nav.Link>Weights / Barbells</Nav.Link>
                <Nav.Link>Benches</Nav.Link>
                <Nav.Link>Functional Trainers</Nav.Link>
                <Nav.Link>Leg Machines</Nav.Link>
                <Nav.Link>Cardio</Nav.Link>
                <Nav.Link>Flooring</Nav.Link>
                <Nav.Link>Accessories</Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Category navbar */}
      <Navbar
        bg='light'
        variant='light'
        className='py-0 d-none d-sm-block text-sm'>
        <Container className='px-1'>
          <Nav className='w-100 justify-content-center'>
            <Nav.Link>Squat Rack / Smith Machines</Nav.Link>
            <Nav.Link>Weights / Barbells</Nav.Link>
            <Nav.Link>Benches</Nav.Link>
            <Nav.Link>Functional Trainers</Nav.Link>
            <Nav.Link>Leg Machines</Nav.Link>
            <Nav.Link>Cardio</Nav.Link>
            <Nav.Link>Flooring</Nav.Link>
            <Nav.Link>Accessories</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Navigation;
