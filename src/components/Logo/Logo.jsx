import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import brain from './brain.png';


const Logo = () => {
	return (
		<div className='ma4 mt0'>
         <Tilt className='Tilt br2 shadow-2'style={{ width: '150px', height: '150px' }}>
	       	<div style={{ width: '100%',height: '100%',  }}>
	           <img style={{paddingTop: '10px', padding: '10px'}}alt= 'logo' src={brain}/>
	       	</div>
	     </Tilt>

		</div>
	);
};

export default Logo;






			// <Tilt tiltMaxAngleX={2} tiltMaxAngleY={2} scale={1} transitionSpeed={800}>
		    //   <div className='Tilt br3 shadow-2' style={{ height:  '150px', width: '150px'}}>
		    //   	<div className='pa4'>
		    <img style={{paddingTop: '2px'}}alt= 'logo' src={brain}/>
		    //   	</div>
		    //   </div>
		    // </Tilt>