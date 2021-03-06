import React from 'react';
import './SideNavbar.css';
import {NavLink} from 'react-router-dom';



const SideNavbar = ({close,sideBarOpen}) => {
	let Classes = 'side-nav-bar';
	if(sideBarOpen){
		Classes = 'side-nav-bar open'
	}

	function myFunction() {
	  document.getElementById("myDropdown").classList.toggle("show");
	  
	}

	window.onclick = function(event) {
	  if (!event.target.matches('.dropbtn')) {
	    var dropdowns = document.getElementsByClassName("dropdown-content");
	    var i;
	    for (i = 0; i < dropdowns.length; i++) {
	      var openDropdown = dropdowns[i];
	      if (openDropdown.classList.contains('show')) {
	        openDropdown.classList.remove('show');
	      }
	    }
	  }
	}

	
	return(
		<nav className ={Classes}>
			<ul>
				<li onClick = { close}><i className="material-icons">close</i></li>

				<div>
					<li className='f5 dropbtn' >
						<NavLink exact link to='/' className='no-underline link white' >HOME</NavLink>
					</li>
				</div>
				
				
				<div className='dropdown'>
					<li  onclick="myFunction()" className=' dropbtn no-underline link white '>ABOUT+ </li>
						<div id='myDropdown' className="dropdown-content ">
							<p>
								<NavLink link to='/about' className='no-underline link white'  >ABOUT</NavLink>
							</p>
					        <p>
					        	<NavLink link to='/services' className='no-underline link white' >SERVICES</NavLink>
					        </p>
					        <p>
					        	<NavLink link to='/ourpeople' className='no-underline link white' >OUR PEOPLE</NavLink>
					        </p>
					        <p>
					        	<NavLink link to='/awards' className='no-underline link white' >AWARDS</NavLink>
					        </p>
					        <p>
					        	<NavLink link to='/hseq' className='no-underline link white'>HSEQ</NavLink>
					        </p>
					        <p>
					        	<NavLink link to='/ourvalues' className='no-underline link white' >OUR VALUES</NavLink>
					        </p>
					        <p>
					        	<NavLink link to='/csr' className='no-underline link white' >CSR</NavLink>
					        </p>
					     </div>
				</div>
				

				 <div className='dropdown'>
				 	<li onclick="myFunction()" className=' dropbtn'>CURRENT+</li>
				 		<div id='myDropdown' className="dropdown-content  ">
							<p>
								<NavLink link to='/current' className='no-underline link white'>	CURRENT</NavLink>
							</p>
					        <p>
					        	<NavLink link to='/cur1' className='no-underline link white'>RETAIL & HOSPITALITY</NavLink>
					       </p>
					        <p>
					        	<NavLink link to='/cur2' className='no-underline link white'>AGED CARE</NavLink>
					        </p>
					        <p>
					        	<NavLink link to='/cur3' className='no-underline link white'>EDUCATION</NavLink>
					        </p>
					        <p>
					        	<NavLink link to='/cur4' className='no-underline link white'>INDUSTRIAL</NavLink>
					        </p>
					        
					     </div>
				 </div>

				 <div className='dropdown'>
				 	<li onclick="myFunction()" className=' dropbtn'>COMPLETED+</li>
				 		<div id='myDropdown' className="dropdown-content ">
							<p>
								<NavLink link to='/completed' className='no-underline link white'>COMPLETED</NavLink>
							</p>
					        <p>
					        	<NavLink link to='/com1' className='no-underline link white'>RETAIL & HOSPITALITY</NavLink>
					        </p>
					        <p>
					        	<NavLink link to='/com2' className='no-underline link white'>AGED CARE</NavLink>
					        </p>
					        <p>
					        	<NavLink link to='/com3' className='no-underline link white'>EDUCATION</NavLink>
					        </p>
					        <p>
					        	<NavLink link to='/com4' className='no-underline link white'>INDUSTRIAL</NavLink>
					        </p>
					        <p>
					        	<NavLink link to='/com5' className='no-underline link white'>APARTMENT $ MIXED USE</NavLink>
					        </p>
					        <p>
					        	<NavLink link to='/com6' className='no-underline link white'>COMMERCIAL + OFFICE</NavLink>
					        </p>
					        <p>
					        	<NavLink link to='/com7' className='no-underline link white'>FITOUT</NavLink>
					        </p>
					        <p>
					        	<NavLink link to='/com8' className='no-underline link white'>COMMUNITIES</NavLink>
					        </p>
					        <p>
					        	<NavLink link to='/com9' className='no-underline link white'>RETAIL & HOSPITALITY</NavLink>
					        </p>
					        <p>
					        	<NavLink link to='/com10' className='no-underline link white'>INDUSTRIAL</NavLink>
					        </p>
					        
					     </div>
				 </div>

				<div>
					<li className=' dropbtn'>
						<NavLink link to='/tenders' className='no-underline link white'>TENDERS</NavLink>
					</li>
				</div>

				<div>
					<li className='dropbtn' >
						<NavLink link to='/careers' className='no-underline link white'>CAREERS</NavLink>
					</li>
				</div>

				 <div>
					<li className='dropbtn'>
						<NavLink link to='/contact' className='no-underline link white'>CONTACT</NavLink>
					</li>
				</div>
				
				
				
				
				
				
				
				

			</ul>
		</nav>
	)
}

export default SideNavbar;
