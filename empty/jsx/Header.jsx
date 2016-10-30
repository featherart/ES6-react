const React = require('react');

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  handleLayoutEvent(e) {
    console.log('in handleLayoutEvent', e.target.value);
    this.props.changeLayout(e.target.value);
  }
  render() {
    return (
      <header className="app-header">
        <div className="app-header__inner">
          <h1 className="app-header__title">Fluentflix</h1>
          <select value={this.props.layout}
                  onChange={this.handleLayoutEvent.bind(this)}
                  className="app-header__display-select">
            <option value="tile">Tile</option>
            <option value="list">List</option>
          </select>
          {/*{searchBox}*/}
        </div>
      </header>
    );

  }
}

module.exports = Header;
// export default Header;
