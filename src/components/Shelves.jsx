import React, { Component } from 'react'
import BookShelf from './BookShelf'

class Shelves extends Component {

	// Mook book to new shelfs
	changeShelf = (e, book) => {
		this.props.changeShelf(e, book)
		console.log(e)
		console.log(book)
	}

	render() {
		const allTheBooks = this.props.allTheBooks;
		const currentlyReading = allTheBooks.filter((book) => book.shelf === 'currentlyReading');
		const wantToRead = allTheBooks.filter((book) => book.shelf === 'wantToRead');
		const read = allTheBooks.filter((book) => book.shelf === 'read');

		return (
			<div className="list-books-content">
				<div>
					<BookShelf booksForThisShelf={currentlyReading} changeShelf={this.changeShelf} title={"Currently Reading"} />
					<BookShelf booksForThisShelf={wantToRead} changeShelf={this.changeShelf} title={"Want to Read"} />
					<BookShelf booksForThisShelf={read} changeShelf={this.changeShelf} title="Read" />
				</div>
			</div>
		)
	}
}

export default Shelves
