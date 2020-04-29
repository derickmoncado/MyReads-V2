import React, { Component } from 'react'
import Shelf from './Shelf'

class Shelves extends Component {

	render() {
		const allTheBooks = this.props.allTheBooks;
		console.log('from Book.jsx:', allTheBooks);

		return (
			<div className="list-books-content">
				<div>
					<Shelf />
					<Shelf />
					<Shelf />
				</div>
			</div>
		)
	}
}

export default Shelves
