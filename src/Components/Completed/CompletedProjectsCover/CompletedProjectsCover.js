import React from 'react';
import rhc from './rhc.jpg';
import acc from './acc.jpeg';
import ec from './ec.jpg';
import ic from './ic.jpg';
import amuc from './amuc.jpg';
import coc from './coc.jpg';
import communities from './communities.jpg';
import fitout from './fitout.jpg';



function CompletedProjectsCover() {
  return (
   <div>
			<div className='mw-100-ns mw-100'>
				<div  className='center projects-desktop  '> 

					<div className=' '>
						<li  className=" link  dt   cover bg-center" 
						style ={ { backgroundImage: "url("+rhc+")" ,
							'width':'420px', 'height':'350px'
						}} >
						  <span className="white  dtc v-btm w-100 h-100 child  tc  bg-black-30  ">
						    <h1 className='f3 '>RETAIL AND HOSPITALITY CONSTRCTION</h1>
							
							
						  </span>
						</li>
					</div>


					<div className=''>
						<li className="link  dt   cover bg-center" 
						style ={ { backgroundImage: "url("+acc+")" ,
							'width':'420px', 'height':'350px'
						}} >
						  <span className="white dtc v-btm w-100 h-100 child  tc bg-black-30 ">
						    <h1 className='f3'>AGED CARE CONSRUCTION</h1>
							
							
						  </span>
						</li>
					</div>




						<div className=''>
							<li className="link  dt  cover bg-center" 
							style ={ { backgroundImage: "url("+ec+")" ,
								'width':'420px', 'height':'350px'
							}} >
							  <span className="white dtc v-btm w-100 h-50 child bg-black-30  ">
							    <h1 className='f3 center'>EDUCATION CONSTRUCTION</h1>
								
								
							  </span>
							</li>
						</div>
					



					<div className=''>
						<li className="link  dt   cover bg-center" 
						style ={ { backgroundImage: "url("+ic+")" ,
							'width':'420px', 'height':'350px'
						}} >
						  <span className="white dtc v-btm w-100 h-100 child  tc bg-black-30 ">
						    <h1  className='f3'>INDUSTRIAL CONSTRUCTION</h1>
							
						
						  </span>
						</li>
					</div>


					

				</div>	


				<div  className='center projects-desktop'> 
					
					<div className=''>
						<li className="link  dt  cover bg-center" 
						style ={ { backgroundImage: "url("+amuc+")" ,
							'width':'420px', 'height':'350px'
						}} >
						  <span className="white dtc v-btm w-100 h-100 child  tc bg-black-30 ">
						    <h1 className='f3' >APARTMENT + MIXED USE CONSTRUCTION</h1>
							
							
						  </span>
						</li>
					</div>
					
					<div className=''>
						<li className="link  dt   cover bg-center" 
						style ={ { backgroundImage: "url("+coc+")" ,
							'width':'420px', 'height':'350px'
						}} >
						  <span className="white dtc v-btm w-100 h-100 child  tc bg-black-30 ">
						    <h1 className='f3  '>COMMERCIAL + OFFICE CONSTRUCTION</h1>
							
							
						  </span>
						</li>
					</div>

					<div className=''>
						<li className="link  dt   cover bg-center" 
						style ={ { backgroundImage: "url("+communities+")" ,
							'width':'420px', 'height':'350px'
						}} >
						  <span className="white dtc v-btm w-100 h-100 child  tc bg-black-30 ">
						    <h1  className='f3'>COMMUNITIES</h1>
							
							
						  </span>
						</li>
					</div>

					<div className=''>
						<li className="link  dt   cover bg-center" 
						style ={ { backgroundImage: "url("+fitout+")" ,
							'width':'420px', 'height':'350px'
						}} >
						  <span className="white dtc v-btm w-100 h-100 child  tc bg-black-30  ">
						    <h1 className='f3'>FITOUT</h1>
							
							
						  </span>
						</li>
					</div>



				</div>

				

				
			</div>
		</div>
  );
}

export default CompletedProjectsCover;
