const React = require('react');

class ThemedDecorations extends React.Component {
  render(){
    const childrenWithNewProp = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: this.props.theme,
      })
    })

    return(
      <div>
        {childrenWithNewProp}
      </div>
    )
  }
}


module.exports = ThemedDecorations;
