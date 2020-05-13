import React from 'react'
import BookShelf from './BookShelf'

// Stateless Functional Component (ES6)
const Shelves = (props) => {
	const changeShelf = (e, book) => {
		props.changeShelf(e, book);
	};

	const allTheBooks = props.allTheBooks;
	const currentlyReading = allTheBooks.filter((book) => book.shelf === 'currentlyReading');
	const wantToRead = allTheBooks.filter((book) => book.shelf === 'wantToRead');
	const read = allTheBooks.filter((book) => book.shelf === 'read');

	return (
		<div className="list-books-content">
			<div>
				<BookShelf booksForThisShelf={currentlyReading} changeShelf={changeShelf} title={"Currently Reading"} />
				<BookShelf booksForThisShelf={wantToRead} changeShelf={changeShelf} title={"Want to Read"} />
				<BookShelf booksForThisShelf={read} changeShelf={changeShelf} title="Read" />
			</div>
		</div>
	);
};







export default Shelves
