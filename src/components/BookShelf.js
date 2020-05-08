import React, { Component } from 'react'
import Book from './Book'

class BookShelf extends Component {

	// Mook book to new shelf
	changeShelf = (e, book) => {
		this.props.changeShelf(e, book)
	}

	render() {
		const shelfsRespectiveBooks = this.props.booksForThisShelf;

		return (
			<div className="bookshelf">
				<h2 className="bookshelf-title">{this.props.title}</h2>
				<div className="bookshelf-books">
					<ol className="books-grid">

						{shelfsRespectiveBooks.map((book) => (
							<li key={book.id}>
								<Book book={book} changeShelf={this.changeShelf} />
							</li>
						))}

					</ol>
				</div>
			</div>
		)
	}
}

export default BookShelf
