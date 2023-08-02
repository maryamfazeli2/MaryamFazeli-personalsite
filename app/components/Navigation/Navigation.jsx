function Navigation() {

    return (
        <nav className='nav w-full'>
            <ul className='flex justify-around leading-[4rem] pl-2 '>
                <h1 style={{ fontSize: "24px", fontWeight: "bolder" }}>Maryam Fazeli</h1>
                <li>HOME</li>
                <li>ABOUT ME</li>
                <li> SERVICES</li>
                <li>PORTOFOLIO</li>
                <li>BLOGS & NEWS</li>
                <li>CONTACT</li>
                {/* <House size={10} className='navIcon mr-2' />
<PersonRolodex size={10} className='navIcon mr-2' />
<PersonWorkspace size={10} className='navIcon mr-2' />
<PersonVcard size={10} className='navIcon mr-2' />
<Newspaper size={10} className='navIcon mr-2' />
<TelephoneInbound size={10} className='navIcon mr-2' /> */}
            </ul>
        </nav>
    );
}

export default Navigation;
