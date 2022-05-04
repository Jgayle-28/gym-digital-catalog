import { Container, Navbar, Nav } from 'react-bootstrap';

const Header = () => {
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
          <Navbar.Brand href='#home'>
            {' '}
            <img
              src='/images/logos/nav-logo.svg'
              width='60'
              height='60'
              className='d-inline-block align-top'
              alt='Black Iron Strength'
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='/about'>About</Nav.Link>
              <Nav.Link href='/contact'>Contact</Nav.Link>
              {/* Mobile sub categories */}
              <div className='d-block d-sm-none'>
                <hr />
                <h5 className='text-light'>Equipment Type</h5>
                <Nav.Link href='#home'>Home Gyms</Nav.Link>
                <Nav.Link href='#features'>Commercial Gyms</Nav.Link>
                <hr />
                <h5 className='text-light'>Categories</h5>
                <Nav.Link href='#home'>Squat Rack / Smith Machines</Nav.Link>
                <Nav.Link href='#features'>Weights / Barbells</Nav.Link>
                <Nav.Link href='#features'>Benches</Nav.Link>
                <Nav.Link href='#w'>Functional Trainers</Nav.Link>
                <Nav.Link href='#g'>Leg Machines</Nav.Link>
                <Nav.Link href='#d'>Cardio</Nav.Link>
                <Nav.Link href='#v'>Flooring</Nav.Link>
                <Nav.Link href='#h'>Accessories</Nav.Link>
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
            <Nav.Link href='#home'>Squat Rack / Smith Machines</Nav.Link>
            <Nav.Link href='#features'>Weights / Barbells</Nav.Link>
            <Nav.Link href='#features'>Benches</Nav.Link>
            <Nav.Link href='#pricing'>Functional Trainers</Nav.Link>
            <Nav.Link href='#pricing'>Leg Machines</Nav.Link>
            <Nav.Link href='#pricing'>Cardio</Nav.Link>
            <Nav.Link href='#v'>Flooring</Nav.Link>
            <Nav.Link href='#pricing'>Accessories</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
