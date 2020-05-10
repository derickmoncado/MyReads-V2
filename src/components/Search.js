import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'

class Search extends Component {

	state = {
		query: []
	}

	// Search call from BooksAPI.js
	handleSearch = (inputEvent) => {
		if(inputEvent !== "") {
			BooksAPI.search(inputEvent).then(res => {
				this.setState(() => ({
					query: res
				}));
				console.log("API Response:", res);
			})
		}
	}

	render() {
		console.log(this.props);

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
						<p>List items with Book component go here.</p>
					</ol>
				</div>
			</div>
		)
	}
}

export default Search
