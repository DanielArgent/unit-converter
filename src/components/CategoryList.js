import React from 'react';
import CategoryListItem from './CategoryListItem';

export default function CategoryList({ categories, onItemClick, lang }) {
	return (
		<div>
			<h4>{lang.categories}</h4>

			{ categories.map(category => 
					<CategoryListItem key={category.id} category={category} onClick={onItemClick} />) }
		</div>
	);
}