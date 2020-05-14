import React from         			'react'
import * as BooksAPI from 			'./BooksAPI'
import                    			'./App.css'
import Header from        			'./components/Header'
import Search from        			'./components/Search'
import SearchButton from  			'./components/SearchButton'
import Shelves from       			'./components/Shelves'
import { Route, Switch } from 	'react-router-dom'

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
				<Switch>
					<Route exact path='/'>
						<div className="list-books">
							<Header />
							<Shelves
								allTheBooks={this.state.allTheBooks}
								changeShelf={this.changeShelf}
							/>
							<SearchButton />
						</div>
					</Route>

					<Route path='/search'>
						<Search
							allTheBooks={this.state.allTheBooks}
							changeShelf={this.changeShelf}
						/>
					</Route>
				</Switch>
			</div>
		)
	}
}

export default BooksApp
