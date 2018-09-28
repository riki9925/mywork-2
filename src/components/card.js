import React from 'react';
import List from './list';
import { connect } from 'react-redux';
import {getList} from '../redux/actions/product'

class MediaCard extends React.Component {

	getFeed = () => {
		this.props.dispatch(getList())
	}

	componentDidMount() {
		this.getFeed()
	}
	render() {
		return (
			<div>
				<List />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		product: state.product
	}
}

export default connect(mapStateToProps)(MediaCard);
