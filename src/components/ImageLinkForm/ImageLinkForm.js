import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
	return (
			<div>
				<p className='f3'>
				{'This Magic Brain will detect faces in your pictures. Get it try!'}
				</p>
				<div className='center'>
					<div className='center form pa3 br3 shadow-5'>
						<input className='f2 pa1 w70 center' type='text' onChange={onInputChange}/>
						<button className='w30 grow f4 link ph3 pv2 dib white bg-light-purple'
						onClick={onButtonSubmit}	
						>Detect</button>
					</div>
				</div>
			</div>
		);
}

export default ImageLinkForm; 