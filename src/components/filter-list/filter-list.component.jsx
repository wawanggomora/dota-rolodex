import { Component } from 'react';
import './filter-list.styles.css';
import { FilterItem } from '../filter-item/filter-item.component';

class FilterList extends Component {
	render() {
		return (
			<div className="filter-list">
				{this.props.primaryAttributes.map((attr) => (
					<FilterItem
						value={attr}
						handleAttrChange={this.props.handleAttrChange}
					/>
				))}
			</div>
		);
	}
}

export default FilterList;
