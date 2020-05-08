import React, { Component } from 'react'

class Book extends Component {

	// Mook book to new shelf
	changeShelf = (e, book) => {
		this.props.changeShelf(e.target.value, book)
	}

	render() {
		//console.log(this.props)
		const book = this.props.book;

		return (
			<div className="book">
				<div className="book-top">
					<div className="book-cover" style={{
							width: 128,
							height: 193,
							backgroundImage: `url('${book.imageLinks.thumbnail}')`
						}}>
					</div>
					<div className="book-shelf-changer">
						<select onChange={(e) => this.changeShelf(e, book)} value={book.shelf}>
							<option value="move" disabled>Move to...</option>
							<option value="currentlyReading">Currently Reading</option>
							<option value="wantToRead">Want to Read</option>
							<option value="read">Read</option>
							<option value="none">None</option>
						</select>
					</div>
				</div>
				<div className="book-title">{book.title}</div>
				<div className="book-authors">{book.authors}</div>
			</div>
		)
	}
}

export default Book
