import React from 'react';
import AccessibilityOptions from '../AccessibilityOptions';

export default class AccessibilityButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      values: [...props.options],
      index: JSON.parse(window.localStorage.getItem(props.id)) ?? 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.resetAll = this.resetAll.bind(this);
    AccessibilityOptions.changeStyling(
      this.state.values.at(this.state.index - 1),
      this.state.values[this.state.index],
      this.props.targetElement
    );
  }

  resetAll() {
    if (this.props.reset) {
      this.setState((state) => {
        AccessibilityOptions.changeStyling(
          this.state.values.at(state.index),
          this.state.values[0],
          this.props.targetElement
        );
        window.localStorage.setItem(this.props.id, 0);
        this.props.resetAll(false);
        return { index: 0 };
      })
    }
  }

  handleChange() {
    // If on last index position, cycle back to start
    this.state.index >= this.state.values.length - 1
      ? this.setState((state) => {
          AccessibilityOptions.changeStyling(
            this.state.values.at(state.index),
            this.state.values[0],
            this.props.targetElement
          );
          window.localStorage.setItem(this.props.id, 0);
          return { index: 0 };
        })
      : this.setState((state) => {
          AccessibilityOptions.changeStyling(
            this.state.values.at(state.index),
            this.state.values[state.index + 1],
            this.props.targetElement
          );
          window.localStorage.setItem(this.props.id, this.state.index + 1);
          return { index: state.index + 1 };
        });

    // Apply styling from an array of options, parameters:(previous value, current value, target html element)
    // AccessibilityOptions.changeStyling(
    //   this.state.values.at(this.state.index - 1),
    //   this.state.values[this.state.index],
    //   this.props.targetElement
    // );
  }

  render() {
    this.resetAll()
    return (
      <>
      <button className="accessibility-btn btn" onClick={this.handleChange}>
        {this.props.text}
      </button>
      </>
    );
  }
}
