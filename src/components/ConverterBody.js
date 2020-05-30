import React from 'react';
import CategoryList from './CategoryList';
import getCategoryProviderForLanguage from './CategoryProvider';

export default class ConverterBody extends React.Component {
	constructor(props) {
		super(props);

		this.lang = props.lang;
		this.categoryProvider = getCategoryProviderForLanguage(props.lang);

		this.state = {
			activeCategory: this.categoryProvider.categories[0]
		};
	}

	// Calls when language is changed (if parent on rebuild)
	componentWillReceiveProps(nextProps) {
		this.lang = nextProps.lang;
		this.categoryProvider = getCategoryProviderForLanguage(nextProps.lang);
		this.refreshActiveCategory(this.state.activeCategory);
	}

	// Calls when activated new category
	changeActiveCategory(category) {
		this.refreshActiveCategory(category);
		this.setState( { activeCategory: category } );
	}

	refreshActiveCategory(category) {
		this.categoryProvider.categories.forEach(currentCategory =>
			currentCategory.isActive = category.id === currentCategory.id);
	}

	render() {
		return (
			<div id="converterBody">
				<CategoryList 
					lang={this.lang}
					categories={this.categoryProvider.categories} 
					onItemClick={this.changeActiveCategory.bind(this)} />
	
				{ this.categoryProvider.getCategoryById(this.state.activeCategory.id) }
			</div>
		);
	}
}