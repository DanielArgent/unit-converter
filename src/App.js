import React, { Component } from 'react';
import langs from './i18n';
import ConverterBody from './components/ConverterBody';
import LocalizationContext from './components/LocalizationContext';

const styles = {
	header: {
		backgroundColor: '#000000',
		color: '#ffffff',
		padding: '1rem',
		marginBottom: '1rem',
		fontSize: 'larger',
		fontWeight: 600,
	},

	langSwitcher: {
		float: 'right',
		position: 'relative',
		display: 'inline-block',
		width: '1.33333333em',
		paddingTop: '4px',
		cursor: 'pointer'
	},

	footer: {
		backgroundColor: '#000000',
		color: '#ffffff9f',
		padding: '1rem 0rem 1rem 0rem',
		textAlign: 'center',
		width: '100%',
		bottom: 0,
		position: 'absolute',
		fontSize: 'smaller'
	}
}

// Returns image for language switch button
function selectFlag(lang) {
	return lang === langs.en ? "./ru.svg" : "./gb.svg";
}

export default class App extends Component {
	state = {
		lang: langs.ru
	}

	render() {
		return (
			<div className="App">
				<header style={styles.header}>
					Unit Converter
					<img style={styles.langSwitcher} alt={this.state.lang.langSwitcherAlt} 
						src={selectFlag(this.state.lang)} onClick={this.switchLang.bind(this)} />
				</header>
	
				<ConverterBody lang={this.state.lang} />

				<footer style={styles.footer}>
					&copy; Tsvikevich Denis 2020
				</footer>
			</div>
		);
	}

	switchLang() {
		this.setState({ lang: this.state.lang === langs.ru ? langs.en : langs.ru });
	}
}
