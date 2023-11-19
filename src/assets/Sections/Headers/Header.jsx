
import Logo from '@Images/logotype.svg'
import './Header.css' 
import Buttons from '@assets/Button/Buttons'


function Header () {
  return (
     
    <header>
      <section className='HeaderLogo'>
           <img src={Logo} alt='CompanyLogo' />  
      </section>
      <section className="TopMenu">
                    <div className='ContactInfo'>
                                  <i className="fa-light fa-phone-volume"><p className='icon'>+46 (8) 121 470 50</p></i>
                                  <i className="fa-light fa-envelope-dot"><p className='icon'>info@crito.com</p></i>
                                  <i className="fa-regular fa-location-dot"><p className='icon'>Sveavägen 31, 111 34 STOCKHOLM</p></i>
                    </div>
                    <div className='SocialMedia'>
                          <i className="fa-brands fa-facebook"></i>
                          <i className="fa-brands fa-twitter"></i>
                          <i className="fa-brands fa-instagram"></i>
                          <i className="fa-brands fa-linkedin"></i>
                    </div>     
                    <div>
            <nav>
                <div className="NavBar">
                    <a href="#">Home</a>
                    <a href="#">Service</a>
                    <a href="#">News</a>
                    <a href="/HTML/ContactIndex.html">Contact</a>
                </div>    
            </nav>
            <Buttons className='loginBtn' type='yellow' url= '/login' title='Login' />
    </div>
     </section> 
    </header>
  )

  }


export default Header;