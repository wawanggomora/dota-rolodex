import { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.components';
import { SearchBox } from './components/search-box/search-box.component.jsx';
import FilterList from './components/filter-list/filter-list.component.jsx';
class App extends Component {
	constructor() {
		super();

		this.state = {
			heroes: [],
			searchField: '',
			attrFilters: [],
		};
	}

	componentDidMount() {
		fetch('https://api.opendota.com/api/heroes')
			.then((response) => response.json())
			.then((json) => this.setState({ heroes: json }));
	}

	handleSearch = (e) => this.setState({ searchField: e.target.value });

	handleAttrChange = (e) => {
		let attrs = this.state.attrFilters.slice(0);

		if (attrs.includes(e.target.value)) {
			attrs = attrs.filter((attr) => attr !== e.target.value);
		} else {
			attrs.push(e.target.value);
		}

		this.setState({ attrFilters: attrs });
	};

	render() {
		const { heroes, searchField, attrFilters } = this.state;
		const attrs = heroes
			.map((item) => item.primary_attr)
			.filter((value, index, self) => self.indexOf(value) === index);

		let filteredHeroes = heroes.filter((hero) =>
			hero.localized_name
				.toLowerCase()
				.includes(searchField.toLowerCase())
		);

		if (attrFilters.length)
			filteredHeroes = attrFilters
				.map((attr) =>
					filteredHeroes.filter((hero) =>
						hero.primary_attr.includes(attr)
					)
				)
				.flat()
				.sort((a, b) => (a.id > b.id ? 1 : -1));

		console.log(filteredHeroes);

		return (
			<div className="App">
				<SearchBox
					placeholder="search heroes"
					handleChange={this.handleSearch}
				/>
				<div className="filters">
					<FilterList
						handleAttrChange={this.handleAttrChange}
						primaryAttributes={attrs}
					/>
				</div>

				<CardList heroes={filteredHeroes} />
			</div>
		);
	}
}

export default App;
