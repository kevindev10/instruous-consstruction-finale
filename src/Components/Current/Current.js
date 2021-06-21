import React from 'react';
import {Link} from 'react-router-dom';
import './Current.css';
import banner from './banner.jpg';
import current1 from './current1.jpg';
import current2 from './current2.jpg';
import current3 from './current3.jpg';
import current4 from './current4.jpg';
import master from './master.jpeg';
import iso from './iso.jpg';


function Current() {
  return (
   	<div>
			<div>
				<div className ='spacer '></div>
				<img style={{'width':'100%','height':'800px'}}className ='banner' src ={banner} alt=''/>
			</div>
			<div className='home-about-link-main'>
				<p className='grow link f3 home-about-link pointer' >
					<Link exact to='/' className='no-underline black'>Home</Link>  
				</p>
				<p className='f3 home-about-link'>/</p>
				<p className='grow link f3 home-about-link pointer' >
					<Link  to='/current' className='no-underline black'>Current Projects</Link> 
				</p>
			</div>
			<div>
				<p className='f2 center mt0 mb3 fw6'>CURRENT PROJECTS</p>
			</div>



			<div className='ml3'>
				<p className='center athelas mobile-display-font-size-sub-header f3 gray ph3' >
					With every project,Instruous implements a series of procedures 
					that provides critical guidelines by  which each component of 
					the project<br/> may be carefully  and precisely monitored. Instrous
					actively participates with our clients and their design team 
					during each stage of the project to<br/> ensure a project that
					produces the best value within the budget.
				</p>
			</div>
			





				<div className='card-styling ' >

					<div  className='ma4 for-mobile-main link pointer' >
						<Link  to='/cur1' className='no-underline black '>
							<article  className="br2 ba dark-gray b--black-10  ">
							  <img src={current1} width='700' height='400px'  className="for-mobile db  br2 br--top" alt="Current project one."/>
							  <div className="pa2 ph3-ns pb3-ns">
							    <div className="dt w-100 mt1">
							      <div className="dtc">
							        <h1 className="f3 f3-ns mv0 athelas">Galleria Futura Mall</h1>
							      </div>
							      
							    </div>
							    <div className="dtc">
							        <h1 className="f4 f4-ns mv0 athelas pv3 gray ">Retail & Hospitailty Construction</h1>
							     </div>
							    <p className="measure mt2 mid-gray athelas lh-copy mobile-display-font-size-paragraph f4  ">
							      	 Initially 9,799m2, Galleria Futura Mall was expanded to approximately 11,167m2
					      by increasing the floor size of the existing Dominikanska Supermarket by approximately 2,500m2,
					      introducing The Rilemann Optician, Winestone and Mihidrka Cafe as well as other new tenancies.
					      Other works encompassed installing a new travelator, adding a children’s playground,
					      undertaking major fire safety improvements and upgrading the existing car parks.
						  We won the project via a competitive tender process.
							    </p>
							  </div>
							</article>
						</Link>	
					</div>

					<div className='ma4 for-mobile-main link pointer' >
						<article className="br2 ba dark-gray b--black-10  ">
							<Link  to='/cur2' className='no-underline black '>
							  <img src={current2} width='700' height='400px'  className="for-mobile db  br2 br--top" alt="Current project two"/>
							  <div className="pa2 ph3-ns pb3-ns">
							    <div className="dt w-100 mt1">
							      <div className="dtc">
							        <h1 className="f3 f3-ns mv0 athelas">Alderen Pleje Retirement Home</h1>
							      </div>
							      
							    </div>
							    <div className="dtc">
							        <h1 className="f4 f4-ns mv0 athelas pv3 gray ">Aged Care Construction</h1>
							     </div>
							    <p className="measure mt2 mid-gray athelas lh-copy mobile-display-font-size-paragraph f4   ">
							      	 Designed by Hus-Larsen Arkitekter, the new aged care facility on
							       Assensvej Road delivered Middlefart an outstanding facility for elderly residents, 
							       including 99 bedrooms, amenity areas, offices, kitchens, and laundries.
								   We won the project through a competitive tender process.
							    </p>
							  </div>
							</Link>  
						</article>
					</div>
				</div>
				<div className='card-styling ' >

					<div  className='ma4 for-mobile-main link pointer' >
						<article  className="br2 ba dark-gray b--black-10  ">
							<Link  to='/cur3' className='no-underline black '>
							  <img src={current3} width='700' height='400px'  className="for-mobile db  br2 br--top" alt="Current project three"/>
							  <div className="pa2 ph3-ns pb3-ns">
							    <div className="dt w-100 mt1">
							      <div className="dtc">
							        <h1 className="f3 f3-ns mv0 athelas">KolKhoz  University</h1>
							      </div>
							      
							    </div>
							    <div className="dtc">
							        <h1 className="f4 f4-ns mv0 athelas pv3 gray ">Education Construction</h1>
							     </div>
							    <p className="measure mt2 mid-gray athelas lh-copy mobile-display-font-size-paragraph f4   ">
							      	 KolKhoz University is a brand-new government university  on Ataturk Street.
						  We were short-listed through an EOI process and won the project on competitive
						   tender with weighted criteria based on methodology, program, organisation capacity personnel,
						   local content and price.
							    </p>
							  </div>
							</Link>  
						</article>
					</div>

					<div className='ma4 for-mobile-main link pointer' >
						<article className="br2 ba dark-gray b--black-10  ">
							<Link  to='/cur4' className='no-underline black '>
							  <img src={current4} width='700' height='400px'  className="for-mobile db  br2 br--top" alt="Current project four"/>
							  <div className="pa2 ph3-ns pb3-ns">
							    <div className="dt w-100 mt1">
							      <div className="dtc">
							        <h1 className="f3 f3-ns mv0 athelas">Koshido Industries</h1>
							      </div>
							      
							    </div>
							    <div className="dtc">
							        <h1 className="f4 f4-ns mv0 athelas pv3 gray ">Industrial Construction</h1>
							     </div>
							    <p className="measure mt2 mid-gray athelas lh-copy mobile-display-font-size-paragraph f4   ">
							      	 This project involved the construction of an 9800m2 factory / warehouse facility consisting of a 
					      heavy-duty slab-on-ground, structural steel portal frame, tilt concrete panels and steel framed, 
					      metal corrugated wall spandrels.
					      We undertook a high level of briefing between the supplier of the equipment, the design team and
					       ourselves to determine that the pad footing location, slab construction and horizontal
					        tolerances in the area were all able to accommodate the installation of the equipment
					         when it arrived from Germany.
							    </p>
							  </div>
							</Link>  
						</article>
					</div>
				</div>


			<div className=''>

				<section className="ph1 ph1-ns pv5 banner-bottom-main ">
					  <article className=" center br2  bg-black-80">
					    <div className=" dt--fixed-ns w-100">
					      <div className="pa3 pa4-ns  v-mid">
					        <div className='tc'>
					          <h2 className="fw4 white mt0 bottom-banner f2">TO REALISE THE POTENTIAL OF <br/> EVERY PERSON AND EVERY PROJECT. </h2>
					          <p className="white measure lh-copy mt4 mb2 mh3 f2 center bottom-banner  ">
					            THIS IS OUR PROMISE TO YOU.
					          </p>
					        </div>
					      </div>
					      <div className="pa3 pa4-ns  v-mid center  ">
					        <p className=" bottom-banner no-underline f3 tc db w-50 pv3 bg-animate bg-black-10 hover-bg-white  hover-black white br2">
					        	<Link  to='/contact' className='no-underline white '>CONTACT US NOW</Link>
					        </p>
					      </div>
					    </div>
					  </article>
					</section>


			</div>
			<div className='mt4'>
				<div className=' center '>
					<img className=' ma1 footer-logo'src={master} alt='' height='auto' width='15%'/>
					<img className=' ma1 footer-logo' src={iso} alt='' height='auto' width='15%'/>

				</div>
				<div>
					<div className="pv4 ph3 ph5-ns tc">
					  <a class="link near-black hover-silver dib mh3 tc" href="https://facebook.com" title="Facebook">
					    <svg class="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M15.117 0H.883C.395 0 0 .395 0 .883v14.234c0 .488.395.883.883.883h7.663V9.804H6.46V7.39h2.086V5.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.476-1.195 1.176v1.54h2.39l-.31 2.416h-2.08V16h4.077c.488 0 .883-.395.883-.883V.883C16 .395 15.605 0 15.117 0" fill-rule="nonzero"/></svg>
					    <span class="f6 db">Facebook</span>
					  </a>
					  <a class="link hover-silver near-black dib mh3 tc" href="https://twitter.com/mrmrs_" title="Twitter">
					    <svg class="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.375-1.337.648-2.085.795-.598-.638-1.45-1.036-2.396-1.036-1.812 0-3.282 1.468-3.282 3.28 0 .258.03.51.085.75C5.152 5.39 2.733 4.084 1.114 2.1.83 2.583.67 3.147.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.416-.02-.617-.058.418 1.304 1.63 2.253 3.067 2.28-1.124.88-2.54 1.404-4.077 1.404-.265 0-.526-.015-.783-.045 1.453.93 3.178 1.474 5.032 1.474 6.038 0 9.34-5 9.34-9.338 0-.143-.004-.284-.01-.425.64-.463 1.198-1.04 1.638-1.7z" fill-rule="nonzero"/></svg>
					    <span class="f6 db">Twitter</span>
					  </a>
					  <a class="link hover-silver near-black dib mh3 tc" href="https://instagram.com/mrmrs_" title="Instagram">
					    <svg class="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M8 0C5.827 0 5.555.01 4.702.048 3.85.088 3.27.222 2.76.42c-.526.204-.973.478-1.417.923-.445.444-.72.89-.923 1.417-.198.51-.333 1.09-.372 1.942C.008 5.555 0 5.827 0 8s.01 2.445.048 3.298c.04.852.174 1.433.372 1.942.204.526.478.973.923 1.417.444.445.89.72 1.417.923.51.198 1.09.333 1.942.372.853.04 1.125.048 3.298.048s2.445-.01 3.298-.048c.852-.04 1.433-.174 1.942-.372.526-.204.973-.478 1.417-.923.445-.444.72-.89.923-1.417.198-.51.333-1.09.372-1.942.04-.853.048-1.125.048-3.298s-.01-2.445-.048-3.298c-.04-.852-.174-1.433-.372-1.942-.204-.526-.478-.973-.923-1.417-.444-.445-.89-.72-1.417-.923-.51-.198-1.09-.333-1.942-.372C10.445.008 10.173 0 8 0zm0 1.44c2.136 0 2.39.01 3.233.048.78.036 1.203.166 1.485.276.374.145.64.318.92.598.28.28.453.546.598.92.11.282.24.705.276 1.485.038.844.047 1.097.047 3.233s-.01 2.39-.048 3.233c-.036.78-.166 1.203-.276 1.485-.145.374-.318.64-.598.92-.28.28-.546.453-.92.598-.282.11-.705.24-1.485.276-.844.038-1.097.047-3.233.047s-2.39-.01-3.233-.048c-.78-.036-1.203-.166-1.485-.276-.374-.145-.64-.318-.92-.598-.28-.28-.453-.546-.598-.92-.11-.282-.24-.705-.276-1.485C1.45 10.39 1.44 10.136 1.44 8s.01-2.39.048-3.233c.036-.78.166-1.203.276-1.485.145-.374.318-.64.598-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276C5.61 1.45 5.864 1.44 8 1.44zm0 2.452c-2.27 0-4.108 1.84-4.108 4.108 0 2.27 1.84 4.108 4.108 4.108 2.27 0 4.108-1.84 4.108-4.108 0-2.27-1.84-4.108-4.108-4.108zm0 6.775c-1.473 0-2.667-1.194-2.667-2.667 0-1.473 1.194-2.667 2.667-2.667 1.473 0 2.667 1.194 2.667 2.667 0 1.473-1.194 2.667-2.667 2.667zm5.23-6.937c0 .53-.43.96-.96.96s-.96-.43-.96-.96.43-.96.96-.96.96.43.96.96z"/></svg>
					    <span class="f6 db">Instagram</span>
					  </a>
					  <a class="link hover-silver near-black dib mh3 tc" href="https://youtube.com" title="youtube">
					    <svg class="dib w2 h2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M0 7.345c0-1.294.16-2.59.16-2.59s.156-1.1.636-1.587c.608-.637 1.408-.617 1.764-.684C3.84 2.36 8 2.324 8 2.324s3.362.004 5.6.166c.314.038.996.04 1.604.678.48.486.636 1.588.636 1.588S16 6.05 16 7.346v1.258c0 1.296-.16 2.59-.16 2.59s-.156 1.102-.636 1.588c-.608.638-1.29.64-1.604.678-2.238.162-5.6.166-5.6.166s-4.16-.037-5.44-.16c-.356-.067-1.156-.047-1.764-.684-.48-.487-.636-1.587-.636-1.587S0 9.9 0 8.605v-1.26zm6.348 2.73V5.58l4.323 2.255-4.32 2.24h-.002z"/></svg>
					    <span class="f6 db">Youtube</span>
					  </a>
					 </div>

					<div className="pv4 ph3 ph5-m ph6-l mid-gray">
					  <small className="f6 db tc">© 2021 <b class="ttu">INSTRUOUS CONSTRUCTION</b>., All Rights Reserved</small>
					  <div className="tc mt3">
					    <a href="/language/" title="Language" class="f6 dib ph2 link mid-gray dim">Language</a>
					    <a href="/terms/"    title="Terms" class="f6 dib ph2 link mid-gray dim">Terms of Use</a>
					    <a href="/privacy/"  title="Privacy" class="f6 dib ph2 link mid-gray dim">Privacy</a>
					  </div>
					</div>
				
					 <div className=" ph3 ph5-m ph6-l mid-gray">
					  <small className="f6 db tc">Website by <a href='https://web.facebook.com/profile.php?id=100069367287056' target="_blank" rel="noreferrer"  className='no-underline link gray dim pointer f5 '> Flex DevsKe </a> </small>
					</div> 
					
			    </div>

			</div>



			


			
		</div>
		
  );
}

export default Current;
