import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { openUrl } from './Globe/Utils';
import { useCallback } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BASE_URL } from '../utils/routes';
import { useNavigate } from 'react-router-dom';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';

export const NavigationMenu = () => {
    const resume = useSelector((state) => state.resume);

    const navigate = useNavigate()
    const handleExternalLink = useCallback((url) => {
        openUrl(url);
    }, []);

    const handleInternalLink = useCallback((url) => {
        navigate(url);
    }, [navigate]);

    return (
        <Navbar sticky='bottom' collapseOnSelect expand="lg" bg="dark" variant="dark" >
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Brand onClick={() => handleInternalLink('/')} className='fs-1 font-header'>{resume.name}</Navbar.Brand>

                <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
                    <Nav className="ml-auto">
                        <Nav.Link className='fs-1 font-header' onClick={() => handleInternalLink('/')}>Home</Nav.Link>
                        <Nav.Link className='fs-1 font-header' onClick={() => handleInternalLink(`${BASE_URL}/experience`)}>Experience</Nav.Link>
                        <Nav.Link className='fs-1 font-header' onClick={() => handleInternalLink(`${BASE_URL}/projects`)}>Projects</Nav.Link>
                        <NavDropdown title="More" id="basic-nav-dropdown" className='fs-1 font-header' menuVariant='dark' >
                            <NavDropdown.Item className='fs-3 d-flex' onClick={() => handleExternalLink(resume.github)} ><AiFillGithub size={25} style={{ marginRight: 2 }} />GitHub</NavDropdown.Item>
                            <NavDropdown.Item className='fs-3 d-flex' onClick={() => handleExternalLink(resume.linkedin)} ><AiFillLinkedin size={25} style={{ marginRight: 2 }} />Linkedin</NavDropdown.Item>
                            <NavDropdown.Item className='fs-3 d-flex' onClick={() => handleExternalLink(resume.emailLink)}><AiOutlineMail size={25} style={{ marginRight: 2 }} />Email</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}