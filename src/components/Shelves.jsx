import React, { Component } from 'react'
import BookShelf from './BookShelf'

class Shelves extends Component {

	render() {
		const allTheBooks = this.props.allTheBooks;
		const currentlyReading = allTheBooks.filter((book) => book.shelf === 'currentlyReading');
		const wantToRead = allTheBooks.filter((book) => book.shelf === 'wantToRead');
		const read = allTheBooks.filter((book) => book.shelf === 'read');

		//console.log('Shelves:', this.props);

		return (
			<div className="list-books-content">
				<div>
					<BookShelf booksForThisShelf={currentlyReading} />
					<BookShelf booksForThisShelf={wantToRead} />
					<BookShelf booksForThisShelf={read} />
				</div>
			</div>
		)
	}
}

export default Shelves
