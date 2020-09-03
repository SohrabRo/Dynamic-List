import React from 'react';

const Scroll = (props) => {
	return( //the scroll inside the box
	<div style={{overflowY: 'scroll', marginTop:'10px', border:'2px solid black', height: '710px'}}>
	 {props.children}
	</div>
	);	 
};

export default Scroll;