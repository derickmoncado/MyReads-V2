import React from         'react'
import * as BooksAPI from './BooksAPI'
import                    './App.css'
import Header from        './components/Header'
import Search from        './components/Search'
import SearchButton from  './components/SearchButton'
import Shelves from       './components/Shelves'
import { Route } from 		'react-router-dom'

class BooksApp extends React.Component {
	state = {
		allTheBooks: []
	}

	// Get book data via API
	componentDidMount() {
		BooksAPI.getAll().then(res => {
			this.setState(() => ({
				allTheBooks: res
			}))
		})
	}

	// Move book to new shelf
	changeShelf = (shelf, book) => {
		BooksAPI.update(book, shelf).then(res => {
			BooksAPI.getAll().then(res => {
				this.setState(() => ({
					allTheBooks: res
				}))
			})
		})
	}

	render() {
		return (
			<div className="app">

				<Route exact path='/' render={() => (
					<div className="list-books">
						<Header />
						<Shelves
							allTheBooks={this.state.allTheBooks}
							changeShelf={this.changeShelf}
						/>
						<SearchButton />
					</div>
				)} />

				<Route exact path='/search' render={() => (
						<Search
							book={this.state.allTheBooks}
							onChangeShelf={this.changeShelf}
						/>
				)} />

			</div>
		)
	}
}

export default BooksApp
