import React from 'react'
import Logo from '../../assets/logo.png'
import './Header.css'
import Bars from '../../assets/bars.png'
import { Link } from 'react-scroll'


const Header = () => {

  const moblie = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = React.useState(false);
  



  return (
    <div className="header">
      <img src={Logo} alt='logo' className='logo' />
      {(menuOpened === false && moblie === true) ? (<div
          style={{
            backgroundColor: 'var(--appColor)', 
            padding:'0.4rem',
            borderRadius: '5px'
          }}
          onClick={() => setMenuOpened(true)}
      ><img src={Bars} alt='bar' style={{width:'1.5rem', height:'1.5rem'}}/></div>
      ): (
        <ul className='header-menu'>
        <li><Link
            onClick={()=>setMenuOpened(false)}
            activeClass='active'
            to='home'
            span={true}
            smooth={true}
          >Home</Link>
        </li>
        <li>
        <Link
            onClick={()=>setMenuOpened(false)}
            to='Programs'
            span={true}
            smooth={true}
          >Programs</Link></li>
        <li>
        <Link
            onClick={()=>setMenuOpened(false)}
            to='join-us'
            span={true}
            smooth={true}
          >Join US</Link></li>
        <li>
        <Link
            onClick={()=>setMenuOpened(false)}
            to='plans'
            span={true}
            smooth={true}
          >Plans</Link></li>
        <li ><Link
          onClick={()=>setMenuOpened(false)}
          to='testimonials'
          span={true}
          smooth={true}
        >Testimonials</Link></li>
      </ul>
      )}
    </div>  
  )
}

export default Header