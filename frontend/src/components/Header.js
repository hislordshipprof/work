import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap"
import SearchBox from './SearchBox'
import { logout } from '../actions/userActions'
function Header() {
   


    const userLogin=useSelector(state => state.userLogin)
    const { userInfo } =userLogin
    const dispatch = useDispatch()
    const logoutHandler=()=>{
      dispatch(logout())
    }
    return (

      
      <header>
        <header>
          <Navbar bg="info" variant="dark" collapseOnSelect expand="lg">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>HislordshipCollections</Navbar.Brand>
              </LinkContainer>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                 <SearchBox />
                <Nav className="ml-auto">
                  <LinkContainer to="/">
                    <Nav.Link>Home</Nav.Link>
                  </LinkContainer>
                  
                  <NavDropdown title="Phones " id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Iphone
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">
                      Iphone Airpods
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">
                      Camera's
                    </NavDropdown.Item>
                  </NavDropdown>

                  <LinkContainer to="/cart">
                    <Nav.Link>
                      <i className="fas fa-shopping-cart">Cart</i>
                    </Nav.Link>
                  </LinkContainer>

                   {userInfo ? (
                                <NavDropdown title={userInfo.name} id='username'>
                                    <LinkContainer to='/profile'>
                                        <NavDropdown.Item>Profile</NavDropdown.Item>
                                    </LinkContainer>

                                    <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>

                                </NavDropdown>
                            ) : (
                                    <LinkContainer to='/login'>
                                        <Nav.Link><i className="fas fa-user"></i>Login</Nav.Link>
                                    </LinkContainer>
                                )}

                                  {userInfo && userInfo.isAdmin && (
                                <NavDropdown title='Admin' id='adminmenue'>
                                    <LinkContainer to='/admin/userlist'>
                                        <NavDropdown.Item>Users</NavDropdown.Item>
                                    </LinkContainer>

                                    <LinkContainer to='/admin/productlist'>
                                        <NavDropdown.Item>Products</NavDropdown.Item>
                                    </LinkContainer>

                                    <LinkContainer to='/admin/orderlist'>
                                        <NavDropdown.Item>Orders</NavDropdown.Item>
                                    </LinkContainer>

                                </NavDropdown>
                            )}

                
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
      </header>
    );
}

export default Header
