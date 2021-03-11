import React from 'react';
import {Link} from 'react-router-dom';
import './CompletedProjectsCards.css';
import completedOne from './completedOne.jpg';
import completedTwo from './completedTwo.jpg';
import completedThree from './completedThree.jpg';
import completedFour from './completedFour.jpg';
import completedFive from './completedFive.jpg';
import completedSix from './completedSix.jpg';
import completedSeven from './completedSeven.jpg';
import completedEight from './completedEight.jpg';
import completedNine from './completedNine.jpg';
import completedTen from './completedTen.jpg';



function CompletedProjectsCards() {
  return (
   	<div >

			<div>

				<div className='card-styling ' >
					<Link to='/com1' className='no-underline'>
						<div  className='ma4 for-mobile-main link pointer' >
							
							<article  className="br2 ba dark-gray b--black-10  ">
							  <img src={completedOne} width='700' height='400px'  className="for-mobile db  br2 br--top" alt="Completed project one."/>
							  <div className="pa2 ph3-ns pb3-ns">
							    <div className="dt w-100 mt1">
							      <div className="dtc">
							        <h1 className="f3 f3-ns mv0 athelas">Ateliers Auguste Mall</h1>
							      </div>
							      
							    </div>
							    <div className="dtc">
							        <h1 className="f4 f4-ns mv0 athelas pv3 gray ">Retail & Hospitailty Construction</h1>
							     </div>
							    <p className=" measure mt2 mid-gray athelas lh-copy mobile-display-font-size-paragraph f4 ">
							      	 This landmark development in Abasolo consists of ten combination showroom warehouses,
							      	  with seven of the ten fronting Abbottābād Road. Designed by Max Wolfe and Associates,
							      	   the units range from 205m2 to 378m2 and feature electronic gates, security cameras, 
							      	   automated roller doors and air-conditioned showrooms.
							    </p>
							  </div>
							</article>
						</div>
					</Link>	

					<Link to='/com2' className='no-underline' >
						<div className='ma4 for-mobile-main link pointer'>
							
							<article className="br2 ba dark-gray b--black-10  ">
							  <img src={completedTwo} width='700' height='400px'  className="for-mobile db  br2 br--top" alt="Completed project two"/>
							  <div className="pa2 ph3-ns pb3-ns">
							    <div className="dt w-100 mt1">
							      <div className="dtc">
							        <h1 className="f3 f3-ns mv0 athelas">Green Arces Retirement Village</h1>
							      </div>
							      
							    </div>
							    <div className="dtc">
							        <h1 className="f4 f4-ns mv0 athelas pv3 gray ">Aged Care Construction</h1>
							     </div>
							    <p className="f4 measure mt2 mid-gray athelas lh-copy mobile-display-font-size-paragraph ">
							      	 Having successfully completed expansion works at the residential and community
					      			 care centre in Vladivostok, Instruous has again exceeded expectations at Babayevo-Vologda. 
								     This brand-new facility includes low care accommodation, high care facilities and 
								     the new Lesnya Road Saint Sophia Cathedral building.
									 
							    </p>
							  </div>
							</article>
						</div>
					</Link>	


				</div>



				<div className='card-styling ' >
					<Link to='/com3' className='no-underline' >
						<div className='ma4  for-mobile-main link pointer' >
							
							<article className="br2 ba dark-gray b--black-10  ">
							  <img src={completedThree} width='700' height='400px'  className=" for-mobile db  br2 br--top " alt="Completed project three."/>
							  <div className="pa2 ph3-ns pb3-ns">
							    <div className="dt w-100 mt1">
							      <div className="dtc">
							        <h1 className="f3 f3-ns mv0 athelas">Inventure University</h1>
							      </div>
							      
							    </div>
							    <div className="dtc">
							        <h1 className="f4 f4-ns mv0 athelas pv3 gray ">Education Construction</h1>
							     </div>
							    <p className="f4 measure mt2 mid-gray athelas lh-copy mobile-display-font-size-paragraph ">
							      	  Inventure University School of Engineering accommodates structural, civil and geotechnical
							      	   facilities  (including an overhead gantry crane) and a chemical engineering facility with
							      	    two fume cupboards. Instruous won the project via a competitive tender process.
							    </p>
							  </div>
							</article>
						</div>
					</Link>	
					

					<Link to='/com4' className='no-underline'>		
						<div className='ma4 for-mobile-main link pointer' >
							
							<article className="br2 ba dark-gray b--black-10  ">
							  <img src={completedFour} width='700' height='400px'  className="for-mobile db  br2 br--top" alt="Completed project four"/>
							  <div className="pa2 ph3-ns pb3-ns">
							    <div className="dt w-100 mt1">
							      <div className="dtc">
							        <h1 className="f3 f3-ns mv0 athelas">Botex Industries</h1>
							      </div>
							      
							    </div>
							    <div className="dtc">
							        <h1 className="f4 f4-ns mv0 athelas pv3 gray ">Industrial Construction</h1>
							     </div>
							    <p className="f4 measure mt2 mid-gray athelas lh-copy mobile-display-font-size-paragraph ">
							      	 This fully-contained 17,923m² development comprises of a new processing and 
								     warehouse facility and office. Set on 12.77 hectares of land, it is approximately
								     Three times larger than Botex Mexico's former property.
				                     We were awarded the project following a competitive tender process.
							    </p>
							  </div>
							</article>
						</div>
						</Link>
				</div>



				<div className='card-styling ' >
					<Link to='/com5' className='no-underline' >
						<div className='ma4 for-mobile-main link pointer' >
							
							<article className="br2 ba dark-gray b--black-10  ">
							  <img src={completedFive} width='700' height='400px'  className="for-mobile db  br2 br--top" alt="Completed project five"/>
							  <div className="pa2 ph3-ns pb3-ns">
							    <div className="dt w-100 mt1">
							      <div className="dtc">
							        <h1 className="f3 f3-ns mv0 athelas">Fairview Apartments</h1>
							      </div>
							      
							    </div>
							    <div className="dtc">
							        <h1 className="f4 f4-ns mv0 athelas pv3 gray ">Apartment & Mixed Use Construction</h1>
							     </div>
							    <p className="f4 measure mt2 mid-gray athelas lh-copy  mobile-display-font-size-paragraph">
							      	 Designed by the world-renowned  Kim Lee & Sons Architects, Fairview Apartments consists of 48 stylish one and two
					       bedroom apartments.Fairview Apartments features 5 apartment levels with parking and high-quality retail units 
					       on the ground floor. The development is located in close proximity to the CBD, A Shopping centre and A University.
					       We were awarded the project following a competitive tender process.
							    </p>
							  </div>
							</article>
						</div>
					</Link>	

					<Link to='/com6' className='no-underline' >
						<div className='ma4 for-mobile-main link pointer' >
							
							<article className="br2 ba dark-gray b--black-10  ">
							  <img src={completedSix} width='700' height='400px'  className="for-mobile db  br2 br--top" alt="Completed project six"/>
							  <div className="pa2 ph3-ns pb3-ns">
							    <div className="dt w-100 mt1">
							      <div className="dtc">
							        <h1 className="f3 f3-ns mv0 athelas">Weston Business Park</h1>
							      </div>
							      
							    </div>
							    <div className="dtc">
							        <h1 className="f4 f4-ns mv0 athelas pv3 gray ">Commercial + Office Construction</h1>
							     </div>
							    <p className="f4 measure mt2 mid-gray athelas lh-copy mobile-display-font-size-paragraph ">
							      	 The Weston Business Park is a prominent building in the Hazelwood landscape. The third to sixth floors are
					       all open plan office areas serviced by a 2-lift core, mens, ladies and disabled toilets, cleaners rooms, 
					       storage, and general services cupboards.The striking façade utilises curtain wall glazing, sun shading, louvres, 
					       and composite aluminium cladding systems.We were awarded the project following a competitive tender process.
							    </p>
							  </div>
							</article>
						</div>
					</Link>	
				</div>



				<div className='card-styling ' >
					<Link to='/com7' className='no-underline'>
						<div className='ma4 for-mobile-main link pointer' >
							
							<article className="br2 ba dark-gray b--black-10  ">
							  <img src={completedSeven} width='700' height='400px'  className="for-mobile db  br2 br--top" alt="Completed project seven"/>
							  <div className="pa2 ph3-ns pb3-ns">
							    <div className="dt w-100 mt1">
							      <div className="dtc">
							        <h1 className="f3 f3-ns mv0 athelas">Three Column Cafe</h1>
							      </div>
							      
							    </div>
							    <div className="dtc">
							        <h1 className="f4 f4-ns mv0 athelas pv3 gray ">Fitout</h1>
							     </div>
							    <p className="f4 measure mt2 mid-gray athelas lh-copy mobile-display-font-size-paragraph ">
							      	 The Three Column Cafe fit out is a six-storey, 11,550m² Hospitality fit out contained within the Kauta Hovek Street 
					      office building. It occupies level six to 11 inclusive, and part of the second level where the end of 
					      trip and amenities areas are located.
							    </p>
							  </div>
							</article>
						</div>
					</Link>	

					<Link to='/com8' className='no-underline' >
						<div className='ma4 for-mobile-main link pointer' >
							
							<article className="br2 ba dark-gray b--black-10  ">
							  <img src={completedEight} width='700' height='400px'  className="for-mobile db  br2 br--top" alt="Completed project eight"/>
							  <div className="pa2 ph3-ns pb3-ns">
							    <div className="dt w-100 mt1">
							      <div className="dtc">
							        <h1 className="f3 f3-ns mv0 athelas">Pittsfield Community Center</h1>
							      </div>
							      
							    </div>
							    <div className="dtc">
							        <h1 className="f4 f4-ns mv0 athelas pv3 gray ">Communities</h1>
							     </div>
							    <p className="f4 measure mt2 mid-gray athelas lh-copy mobile-display-font-size-paragraph ">
							      	  The Pittsfield Community Center is the first as-built rated 6 Star Green Star public
							      	   building in Liechtenstein. This mixed-use facility has become the cornerstone of the 
							      	   ambitious 24-hectare Pittsfield Park redevelopment being undertaken by the City of Vaduz. 
							      	   The redevelopment has seen the community facility integrated within new grounds including 
							      	   community piazza areas, skate park and nature  play areas as well as redeveloped sporting 
							      	   facilities.
							    </p>
							  </div>
							</article>
						</div>
					</Link>	
				</div>



				<div className='card-styling '>
					<Link to='/com9'  className='no-underline'>
						<div className='ma4 for-mobile-main link pointer' >
							
							<article className="br2 ba dark-gray b--black-10  ">
							  <img src={completedNine} width='700' height='400px'  className="for-mobile db  br2 br--top" alt="Completed project nine"/>
							  <div className="pa2 ph3-ns pb3-ns">
							    <div className="dt w-100 mt1">
							      <div className="dtc">
							        <h1 className="f3 f3-ns mv0 athelas">Golden Silk Resort</h1>
							      </div>
							      
							    </div>
							    <div className="dtc">
							        <h1 className="f4 f4-ns mv0 athelas pv3 gray ">Retail & Hospitailty Construction</h1>
							     </div>
							    <p className="f4 measure mt2 mid-gray athelas lh-copy mobile-display-font-size-paragraph ">
							      	 The Golden Silk Resort in Fattur Ngotok, developed by Brinkke Hadikai Architects is a
							      	  hospitality development consisting of 500 rooms over six levels located in a hidden 
							      	  gem overlooking the river in East Java. Nestled into a picturesque corner of Indonesia,
							      	  The Golden Silk Resort has been designed to engage with the natural surroundings while
							      	  providing an environmentally responsible development The resort was designed with well-sized 
							      	  rooms , large windows to take advantage of views and huge balconies, some with movable 
							      	  screens for privacy.
							    </p>
							  </div>
							</article>
						</div>
					</Link>	

					<Link to='/com10' className='no-underline' >
						<div className='ma4 for-mobile-main link pointer' >
							
							<article className="br2 ba dark-gray b--black-10  ">
							  <img src={completedTen} width='700' height='400px'  className="for-mobile db  br2 br--top" alt="Completed project ten"/>
							  <div className="pa2 ph3-ns pb3-ns">
							    <div className="dt w-100 mt1">
							      <div className="dtc">
							        <h1 className="f3 f3-ns mv0 athelas">Ridge Hills Industrial Park</h1>
							      </div>
							      
							    </div>
							    <div className="dtc">
							        <h1 className="f4 f4-ns mv0 athelas pv3 gray ">Industrial Construction</h1>
							     </div>
							    <p className="f4 measure mt2 mid-gray athelas lh-copy mobile-display-font-size-paragraph ">
							      	 This project involved the construction of an 28000m2 factory / warehouse facility consisting of a
					       heavy-duty slab-on-ground, structural steel portal frame, tilt concrete panels and steel framed,
					       metal corrugated wall spandrels.
							    </p>
							  </div>
							</article>
						</div>
					</Link>	
				</div>


			</div>
			
		</div>
  );
}

export default CompletedProjectsCards;
