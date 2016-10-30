const React = require('react');
const omdb = require('omdb-client');

class MovieContainer extends React.Component {
  // lifecyle methods
  constructor(props) {
    super(props);
    this.state = {
      movie: {}
    };
  }
   // also componentWillMount - will get called inside of react, mostly for server-side rendering
   // this doesn't get called inside Node, mostly for API calls
   // code as though all the data were there already = React-style coding
  componentDidMount() {
    omdb.get( { id: this.props.id }, (err, data) => {
      this.setState({movie: data}); // setState causes a re-render
    });
  }
  render() {
    return (
      <this.props.layout
        {...this.state.movie}
      />
    );
  }
}

module.exports = MovieContainer;
