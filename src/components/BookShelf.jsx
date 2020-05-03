import React, { Component } from 'react'

class BookShelf extends Component {

	// Mook book to new shelf
	moveTheBook = (e, book) => {
		this.props.changeShelf(e.target.value, book)
		// console.log(e.target.value);
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
								<div className="book">
									<div className="book-top">
										<div className="book-cover" style={{
												width: 128,
												height: 193,
												backgroundImage: `url('${book.imageLinks.thumbnail}')`
											}}>
										</div>
										<div className="book-shelf-changer">
											<select onChange={(e) => this.moveTheBook(e, book)}>
												<option selected={book.shelf === "move"} value="move" disabled>Move to...</option>
												<option selected={book.shelf === "currentlyReading"} value="currentlyReading">Currently Reading</option>
												<option selected={book.shelf === "wantToRead"} value="wantToRead">Want to Read</option>
												<option selected={book.shelf === "read"} value="read">Read</option>
												<option selected={book.shelf === "none"} value="none">None</option>
											</select>
										</div>
									</div>
									<div className="book-title">{book.title}</div>
									<div className="book-authors">{book.authors}</div>
								</div>
							</li>
						))}

					</ol>
				</div>
			</div>
		)
	}
}

export default BookShelf
