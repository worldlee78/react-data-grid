// Used for displaying the value of a dropdown (using DropDownEditor) when not editing it.
// Accepts the same parameters as the DropDownEditor.
const React = require('react');
const PropTypes = require('prop-types');
const createReactClass = require('create-react-class');

const DropDownFormatter = createReactClass({
  propTypes: {
    options: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
          id: PropTypes.string,
          title: PropTypes.string,
          value: PropTypes.string,
          text: PropTypes.string
        })
      ])).isRequired,
    value: PropTypes.string.isRequired
  },

  shouldComponentUpdate(nextProps: any): boolean {
    return nextProps.value !== this.props.value;
  },

  render(): ?ReactElement {
    let value = this.props.value;
    let option = this.props.options.filter(function(v) {
      return v === value || v.value === value;
    })[0];
    if (!option) {
      option = value;
    }
    let title = option.title || option.value || option;
    let text = option.text || option.value || option;
    return <div title={title}>{text}</div>;
  }
});

module.exports = DropDownFormatter;
