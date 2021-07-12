import React from 'react';
import './filter-item.style.css';

export const FilterItem = ({ value, handleAttrChange }) => (
	<div className="filter-item">
		<input
			type="checkbox"
			className="field checkbox"
			id={`fieldName${value}`}
			name={`fieldName${value}`}
			value={value}
			onChange={handleAttrChange}
		/>
		<label class="filter-label" htmlFor={`fieldName${value}`}>
			{value}
		</label>
	</div>
);
