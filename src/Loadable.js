import React from 'react';

const Loadable = ({ loader, loading }) => {
	return class Component extends React.Component {
		constructor() {
			super();
			this.state = {
				myComponent: null,
			};
		}

		componentDidMount() {
			loader().then((res) => this.setState({ myComponent: res.default }));
		}

		render() {
			const { myComponent } = this.state;
			return <div>{myComponent ? myComponent() : loading()}</div>;
		}
	};
};

export default Loadable;
