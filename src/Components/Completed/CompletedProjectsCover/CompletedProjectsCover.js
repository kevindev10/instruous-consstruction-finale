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
   <div >
			<div className='mw-100-ns mw-100'  >
				<div  className='center projects-desktop'    style={{'width':'100%', 'marginLeft':'auto', 'marginRight':'auto'}}> 

					<div className=' ' style={{'width':'25%', }}>
						<li  className=" link  dt   cover bg-center" 
						style ={ { backgroundImage: "url("+rhc+")" ,
							'width':'100%', 'height':'350px'
						}} >
						  <span className="white  dtc v-btm w-100 h-100 child  tc  bg-black-30  ">
						    <h1 className='f4 fw8 ph2'>RETAIL AND HOSPITALITY CONSTRCTION</h1>
							
							
						  </span>
						</li>
					</div>


					<div className='' style={{'width':'25%', }}>
						<li className="link  dt   cover bg-center" 
						style ={ { backgroundImage: "url("+acc+")" ,
							'width':'100%', 'height':'350px'
						}} >
						  <span className="white dtc v-btm w-100 h-100 child  tc bg-black-30 ">
						    <h1 className='f4 fw8 ph2'>AGED CARE CONSRUCTION</h1>
							
							
						  </span>
						</li>
					</div>




						<div className='' style={{'width':'25%', }}>
							<li className="link  dt  cover bg-center" 
							style ={ { backgroundImage: "url("+ec+")" ,
								'width':'100%', 'height':'350px'
							}} >
							  <span className="white dtc v-btm w-100 h-50 child bg-black-30  ">
							    <h1 className='f4 fw8 ph2 center'>EDUCATION CONSTRUCTION</h1>
								
								
							  </span>
							</li>
						</div>
					



					<div className='' style={{'width':'25%', }}>
						<li className="link  dt   cover bg-center" 
						style ={ { backgroundImage: "url("+ic+")" ,
							'width':'100%', 'height':'350px'
						}} >
						  <span className="white dtc v-btm w-100 h-100 child  tc bg-black-30 ">
						    <h1  className='f4 fw8 ph2'>INDUSTRIAL CONSTRUCTION</h1>
							
						
						  </span>
						</li>
					</div>


					

				</div>	


				<div  className='center projects-desktop' style={{'width':'100%', 'marginLeft':'auto', 'marginRight':'auto'}}> 
					
					<div className='' style={{'width':'25%', }}>
						<li className="link  dt  cover bg-center" 
						style ={ { backgroundImage: "url("+amuc+")" ,
							'width':'100%', 'height':'350px'
						}} >
						  <span className="white dtc v-btm w-100 h-100 child  tc bg-black-30 ">
						    <h1 className='f4 fw8 ph2' >APARTMENT + MIXED USE CONSTRUCTION</h1>
							
							
						  </span>
						</li>
					</div>
					
					<div className='' style={{'width':'25%', }}>
						<li className="link  dt   cover bg-center" 
						style ={ { backgroundImage: "url("+coc+")" ,
							'width':'100%', 'height':'350px'
						}} >
						  <span className="white dtc v-btm w-100 h-100 child  tc bg-black-30 ">
						    <h1 className='f4 fw8 ph2  '>COMMERCIAL + OFFICE CONSTRUCTION</h1>
							
							
						  </span>
						</li>
					</div>

					<div className='' style={{'width':'25%', }}>
						<li className="link  dt   cover bg-center" 
						style ={ { backgroundImage: "url("+communities+")" ,
							'width':'100%', 'height':'350px'
						}} >
						  <span className="white dtc v-btm w-100 h-100 child  tc bg-black-30 ">
						    <h1  className='f4 fw8 ph2'>COMMUNITIES</h1>
							
							
						  </span>
						</li>
					</div>

					<div className='' style={{'width':'25%', }}>
						<li className="link  dt   cover bg-center" 
						style ={ { backgroundImage: "url("+fitout+")" ,
							'width':'100%', 'height':'350px'
						}} >
						  <span className="white dtc v-btm w-100 h-100 child  tc bg-black-30  ">
						    <h1 className='f4 fw8 ph2'>FITOUT</h1>
							
							
						  </span>
						</li>
					</div>



				</div>

				

				
			</div>
		</div>
  );
}

export default CompletedProjectsCover;
