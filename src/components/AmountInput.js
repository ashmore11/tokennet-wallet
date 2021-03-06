import React, { Component } from 'react';

class AmountInput extends Component {
	onKeyDown = ( $event ) => {
		const keyCode = $event.keyCode;
		const BACKSPACE = 8;
		const HOME = 36;
		const END = 35;
		const DELETE = 46;
		const POINT = 190;
		const POINT_NUMPAD = 110;
		const ARROW_LEFT = 37;
		const ARROW_UP = 38;
		const ARROW_RIGHT = 39;
		const ARROW_DOWN = 40;

		const map = [
			48, 49, 50, 51, 52, 53, 54, 55, 56, 57, // 0-9
			96, 97, 98, 99, 100, 101, 102, 103, 104, 105, // Numpad 0-9
			ARROW_LEFT, ARROW_UP, ARROW_RIGHT, ARROW_DOWN,
			BACKSPACE, HOME, END, DELETE, POINT, POINT_NUMPAD ];
		if ( map.indexOf( keyCode ) === -1 ) {
			$event.preventDefault();
		}

		this.storeValue = $event.currentTarget.value;
	};

	onKeyUp = ( $event ) => {
		const value = $event.currentTarget.value;
		if( value.indexOf( '.' ) > -1 ) {
			const decimal = value.split( '.' ).pop().toString();
			if( decimal.length > 7 ) {
				$event.currentTarget.value = this.storeValue;
				$event.preventDefault();
			}
		}

		this.storeValue = null;
	};

	render() {
		return (
			<input {...this.props}
				   onKeyDown={this.onKeyDown}
				   onKeyUp={this.onKeyUp}
				   type="number"
				   min="0.1"
				   placeholder="0.1"/>
		)
	}
}

export default AmountInput;