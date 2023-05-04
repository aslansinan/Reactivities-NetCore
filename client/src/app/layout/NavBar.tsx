import {Container, Menu, Button} from 'semantic-ui-react';
import {NavLink} from 'react-router-dom';

export default function NavBar() {
  return (
    <Menu className='Menu' mode='horizontal' inverted fixed='top'>
      <Container>
        <Menu.Item className='Color' as={NavLink} to='/' header  style={{marginRight:10}}>
          <img src='/assets/logo.png' alt='logo' style={{marginRight: 30, height:30}}/>
          Reactivities
        </Menu.Item> 
        <Menu.Item className='Color' as={NavLink} to='/activities' name='Activities'></Menu.Item>
        <Menu.Item>
          <Button className='Color' as={NavLink} to='/createActivity' positive content='Create Activity'></Button>
        </Menu.Item>
      </Container>
    </Menu>
  )
};
    