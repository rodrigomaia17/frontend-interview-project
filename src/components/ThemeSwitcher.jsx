import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';

const blueTheme = {
  launcherColor: '#4e8cff',
  headerColor: 'lightblue'
}

const greenTheme = {
  launcherColor: 'lightgreen',
  headerColor: 'lightgreen'
}

export default class ThemeSwitcher extends Component {

  constructor(){
    super(); 
    this.state = { useNewTheme: false }
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  toggleTheme(){
    this.setState({useNewTheme: !this.state.useNewTheme})
  }

  render() {
    return  <ThemeProvider theme={ this.state.useNewTheme ? greenTheme : blueTheme}>
      <div>
        {this.props.children}
        <PositionedLabel className="checkbox">
          <input type="checkbox" checked={this.state.useNewTheme} onChange={this.toggleTheme} />
          Use Alternative Theme
        </PositionedLabel>
      </div>
    </ThemeProvider>
  }
}

const PositionedLabel = styled.label`
  position: absolute;
  bottom: 10px
`