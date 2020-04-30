import React, { Component } from 'react'
import BookShelf from './BookShelf'

class Shelves extends Component {

	render() {
		const allTheBooks = this.props.allTheBooks;
		const currentlyReading = allTheBooks.filter((book) => book.shelf === 'currentlyReading');
		const wantToRead = allTheBooks.filter((book) => book.shelf === 'wantToRead');
		const read = allTheBooks.filter((book) => book.shelf === 'read');

		return (
			<div className="list-books-content">
				<div>
					<BookShelf booksForThisShelf={currentlyReading} title={"Currently Reading"} />
					<BookShelf booksForThisShelf={wantToRead} title={"Want to Read"} />
					<BookShelf booksForThisShelf={read} title="Read" />
				</div>
			</div>
		)
	}
}

export default Shelves
