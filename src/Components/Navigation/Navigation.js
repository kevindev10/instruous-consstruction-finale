import React from 'react';
import {NavLink,Link} from 'react-router-dom';
import './Navigation.css';


function Navigation({open}) {
  return (
	   <nav className='nav-bar o-50'>
	   		<div className='nav-icon' onClick ={open}>
					<i className="material-icons">menu</i>
			</div>
	   		
	   		<NavLink link to='/' className='nav-logo no-underline white  '>
	   			Instruous Construction
	   		</NavLink>
	   		<div>
	   			<div className='nav-space' />
	   				<div className='nav-items'>
	   					<ul className='f3'>
	   						<li className=' dropdown dropbtn '>
				   				<NavLink   exact link to='' className='no-underline white '>HOME</NavLink>
				   			</li>
				   			<li className=' dropdown dropbtn '  >ABOUT+		
								<div className="dropdown-content  ">
						   			<li  className=' dropdown dropbtn  '>
						   				<li><Link to='/about' className='no-underline link white '>ABOUT</Link></li>
						   				<li><Link to='/services' className='no-underline white '>SERVICES</Link></li>
						   				<li><Link to='/ourpeople' className='no-underline white '>OUR PEOPLE</Link></li>
						   				<li><Link to='/awards' className='no-underline white '>AWARDS</Link></li>
						   				<li><Link to='/hseq' className='no-underline white '>HSEQ</Link></li>
						   				<li><Link to='/ourvalues' className='no-underline white '>OUR VALUES</Link></li>
						   				<li><Link to='/csr' className='no-underline white '>CSR</Link></li>
						   			</li>
						   		</div>
						   	</li>	

				   			<li className=' dropdown dropbtn '> CURRENT+
				   				<div className="dropdown-content  ">
				   					<li  className=' dropdown dropbtn  '>
				   						<NavLink  link to='/' className='no-underline white '></NavLink>
				   						<li><Link to='/current' className='no-underline link white '>CURRENT</Link></li>
						   				<li><Link to='/cur1' className='no-underline white '>RETAIL & HOSPITALITY</Link></li>
						   				<li><Link to='/cur2' className='no-underline white '>AGED CARE</Link></li>
						   				<li><Link to='/cur3' className='no-underline white '>EDUCATION</Link></li>
						   				<li><Link to='/cur4' className='no-underline white '>INDUSTRIAL</Link></li>
				   					</li>
				   				</div>			
				   			</li>

				   			<li className=' dropdown dropbtn '>COMPLETED+
				   				<div className="dropdown-content  ">
				   					<li  className=' dropdown dropbtn  '>
				   						
				   						<li><Link to='/completed' className='no-underline link white '>COMPLETED</Link></li>
						   				<li><Link to='/com1' className='no-underline white '>RETAIL & HOSPITALITY</Link></li>
						   				<li><Link to='/com2' className='no-underline white '>AGED CARE</Link></li>
						   				<li><Link to='/com3' className='no-underline white '>EDUCATION</Link></li>
						   				<li><Link to='/com4' className='no-underline white '>INDUSTRIAL</Link></li>
						   				
				   					</li>
				   				</div>	
				   			</li>
				   			<li className=' dropdown dropbtn '>
				   				<NavLink  link to='/tenders' className='no-underline white '>TENDERS</NavLink>
				   			</li>
				   			<li className=' dropdown dropbtn '>
				   				<NavLink  link to='/careers' className='no-underline white '>CAREERS</NavLink>
				   			</li>
				   			<li className=' dropdown dropbtn '>
				   				<NavLink  link to='/contact' className='no-underline white '>CONTACT</NavLink>
				   			</li>
				   			
				   			
				   			
				   			
				   			
				   		</ul>	
			   		</div>	
	   		</div>
	   </nav>


	  
  );
}

export default Navigation;
