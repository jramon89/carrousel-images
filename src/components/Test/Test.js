import React, { Component } from 'react';
import Layout from '../Layout/Layout';
import Carrousel from '../Carrousel/Carrousel';

export default
class Test extends Component{
	
	constructor(props){
		super(props);
		this.state={
			items:[
				{
					src: 'http://lorempixel.com/700/300/sports/'
				},{
					src: 'http://lorempixel.com/700/300/city/'
				},{
					src: 'http://lorempixel.com/700/300/cats/'
				},{
					src: 'http://lorempixel.com/700/300/nature/'
				}
			]
		};
	}

	render() {
		const { items } = this.state;

		return(
			<Layout
				title="Carrousel component">
				<div>
					<p>Example 1</p>
					<Carrousel
						items={items}
						bullets={true}
						animation="slide"
					/>
					
					<p>Example 2</p>
					<Carrousel
						items={items}
						bullets={true}
						previews={true}
						autoPlay={true}
						animation="slide"
					/>

				</div>				
			</Layout>
		);
	}
}