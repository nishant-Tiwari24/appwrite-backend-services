import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Logout from './Logout'

function Header() {
  const authStatus = useSelector((state) => { state.auth.status})
  const navigate = useNavigate();

  const navItems = [{    
    name: 'Home',
    slug: "/",
    active: true
  }, 
  {
    name: "Login",
    slug: "/login",
    active: !authStatus,
  },
  {
    name: "Signup",
    slug: "/signup",
    active: !authStatus,
  },
  {
    name: "All Posts",
    slug: "/all-posts",
    active: authStatus,
  },
  {
    name: "Add Post",
    slug: "/add-post",
    active: authStatus,
}]
  return (
        <header className='py-3 shadow bg-gray-500'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px'   />
              </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item) => active ? (
              <li key={item.name}>
                <button onClick={() => navigate(item.slug)}>{item.name}</button>
              </li>
            ) : null
            )}
            {authStatus ? (<li>
              <Logout/>
            </li>) : null}
          </ul>
        </nav>
        </Container>
    </header>
  )
}

export default Header
