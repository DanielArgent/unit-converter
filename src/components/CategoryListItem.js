import React from 'react';

const commonStyles = {
	cursor: 'pointer',
	marginRight: '1rem',
	padding: '5px',
};

const styles = {
	active: {
		backgroundColor: '#2196F3',
		color: '#ffffff',
		borderRadius: '0px 50rem 50rem 0px',

		...commonStyles
	},

	unactive: {
		...commonStyles
	}
};

export default function CategoryListItem({ category, onClick }) {
	return (
		<div style={ category.isActive ? styles.active : styles.unactive } onClick={() => onClick(category)}>
			{category.name}
		</div>
	);
}