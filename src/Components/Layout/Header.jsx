import logo from '/Users/saikrishnamj/Desktop/Udemy/React/contactopedia/src/images/logo192.png'


function Header(){
    return(
        <div className='py-2 p1-2' style={{borderBottom:"1px solid #777"}}>
            <img src={logo} alt='' style={{height:"35px", verticalAlign:"top"}}></img>
            <span className='h2 pt-4 m-2 text-white-50'>ContactOpedia</span>

        </div>
    )
}

export default Header;