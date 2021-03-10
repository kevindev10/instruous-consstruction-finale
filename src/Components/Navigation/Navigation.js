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
						   				<li><Link to='/currentone' className='no-underline white '>CURRENT ONE</Link></li>
						   				<li><Link to='/currenttwo' className='no-underline white '>CURRENT TWO</Link></li>
						   				<li><Link to='/currentthree' className='no-underline white '>CURRENT THREE</Link></li>
						   				<li><Link to='/currentfour' className='no-underline white '>CURRENT FOUR</Link></li>
				   					</li>
				   				</div>			
				   			</li>

				   			<li className=' dropdown dropbtn '>COMPLETED+
				   				<div className="dropdown-content  ">
				   					<li  className=' dropdown dropbtn  '>
				   						
				   						<li><Link to='/completed' className='no-underline link white '>COMPLETED</Link></li>
						   				<li><Link to='/completedone' className='no-underline white '>COMPLETED ONE</Link></li>
						   				<li><Link to='/completedtwo' className='no-underline white '>COMPLETED TWO</Link></li>
						   				<li><Link to='/completedthree' className='no-underline white '>COMPLETED THREE</Link></li>
						   				<li><Link to='/completedfour' className='no-underline white '>COMPLETED FOUR</Link></li>
						   				
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


	   /*<nav className='nav-bar o-50'>
				<div className='nav-icon' onClick ={open}>
					<i className="material-icons">menu</i>
				</div>

				<div className=''>
					<div className='nav-logo  ' onClick={() => onRouteChange('home')}>
						Instruous Construction
					</div>
				</div>
				
				<div className='nav-space' />
				<div className='nav-items'>
					<ul className='f3'>
						<li  className=' dropdown dropbtn  ' onClick={() => onRouteChange('home')}>HOME</li>
						<li className=' dropdown dropbtn ' >ABOUT+		
							<div class="dropdown-content ">
							    <li  onClick={() => onRouteChange('about')} >ABOUT</li>
							    <li onClick={() => onRouteChange('services')}>SERVICES</li>
							    <li onClick={() => onRouteChange('ourpeople')}>OUR PEOPLE</li>
							    <li onClick={() => onRouteChange('awards')}>AWARDS</li>
							    <li onClick={() => onRouteChange('hseq')}>HSEQ</li>
							    <li onClick={() => onRouteChange('ourvalues')}>OUR VALUES</li>
							    <li onClick={() => onRouteChange('csr')}>CSR</li>
							  </div>
						</li>

						<li className=' dropdown dropbtn  ' >CURRENT+
								<div class="dropdown-content ">
								    <li  onClick={() => onRouteChange('current')} >CURRENT</li>
								    <li onClick={() => onRouteChange('currentone')}>CURRENT ONE</li>
								    <li onClick={() => onRouteChange('currenttwo')}>CURRENT TWO</li>
								    <li onClick={() => onRouteChange('currentthree')}>CURRENT THREE</li>
								    <li onClick={() => onRouteChange('currentfour')}>CURREN FOUR</li>
								    
							  </div>
						</li>

						<li className=' dropdown dropbtn  '  >COMPLETED+
								<div class="dropdown-content ">
								    <li  onClick={() => onRouteChange('completed')} >COMPLETED</li>
								    <li onClick={() => onRouteChange('completedone')}>COMPLETED ONE</li>
								    <li onClick={() => onRouteChange('completedtwo')}>COMPLETED TWO</li>
								    <li onClick={() => onRouteChange('completedthree')}>COMPLETED THREE</li>
								    <li onClick={() => onRouteChange('completedfour')}>COMPLETED FOUR</li>
								    
								    
							  </div>
						</li>
						<li className=' dropdown dropbtn  '  onClick={() => onRouteChange('tenders')}>TENDERS</li>
						<li className=' dropdown dropbtn  '  onClick={() => onRouteChange('careers')}>CAREERS</li>
						<li className=' dropdown dropbtn  '  onClick={() => onRouteChange('contact')}>CONTACT</li>
						
						
					</ul>
				</div>
			</nav>
			*/
  );
}

export default Navigation;
