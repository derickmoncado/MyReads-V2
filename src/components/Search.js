import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'

class Search extends Component {

	state = {
		booksFromAPI: []
	}

	// Search call from BooksAPI.js
	handleSearch = (inputEvent) => {
		console.log("Input Event:", inputEvent);
		BooksAPI.search(inputEvent).then(res => {
			this.setState(() => ({
				booksFromAPI: res
			}));
			console.log("API Response:", res);
		})
	}

	render() {

		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link to="/" className="close-search">Close</Link>
					<div className="search-books-input-wrapper">
						<input
							type="text"
							placeholder="Search by title or author"
							value = {this.state.inputEvent}
							onChange={(event) => this.handleSearch(event.target.value)}
						/>
					</div>
				</div>
				<div className="search-books-results">
					<ol className="books-grid">
					</ol>
				</div>
			</div>
		)
	}
}

export default Search
