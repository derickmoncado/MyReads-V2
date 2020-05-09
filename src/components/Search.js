import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'

class Search extends Component {

	state = {
		query: '',
		inputSearchValue: '',
	}

	// handleSearch = (inputEvent) => {
	// 	console.log("Input Event:", inputEvent);
	// 	BooksAPI.search(inputEvent).then(res => {
	// 		this.setState(() => ({
	// 			inputSearchValue: res
	// 		}));
	// 		console.log("Response:", res);
	// 	})
	// }

	updateQuery = (query) => {
		this.setState(() => ({
			query: query.trim()
		}))
	}



	render() {
		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link to="/" className="close-search">Close</Link>
					<div className="search-books-input-wrapper">
						{/* }<input
							type="text"
							placeholder="Search by title or author"
							value = {this.state.inputEvent}
							onChange={(e) => this.handleSearch(e.target.value)}
						/> */}

						<input
							type="text"
							placeholder="Search by title or author"
							value = {this.state.query}
							onChange={(event) => this.updateQuery(event.target.value)}
						/>
					</div>
				</div>
				<div className="search-books-results">
					<ol className="books-grid">
						<li>TESTING: {JSON.stringify(this.state)} </li>
					</ol>
				</div>
			</div>
		)
	}
}

export default Search
