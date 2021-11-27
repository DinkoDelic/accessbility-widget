import React from 'react';
import AccessibilityOptions from '../AccessibilityOptions';
import Tooltip from './Tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import OptionLevel from './OptionLevel';

export default class AccessibilityButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      values: [...props.options],
      index: JSON.parse(window.localStorage.getItem(props.id)) ?? 0,
      showTooltip: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.ToggleTooltip = this.ToggleTooltip.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    //Checks if reset has been clicked else it applies css classes
    if (props.reset) {
      AccessibilityOptions.changeStyling(
        state.values.at(state.index),
        state.values[0],
        props.targetElement
      );
      window.localStorage.setItem(props.id, 0);
      props.ResetAll(false);
      return { index: 0 };
    } else {
      AccessibilityOptions.changeStyling(
        state.values.at(state.index - 1),
        state.values[state.index],
        props.targetElement
      );
      return null;
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
  }

  ToggleTooltip() {
    return this.state.showTooltip ? this.setState({showTooltip:false}) : this.setState({showTooltip:true})
  }

  render() {
    return (
      <>
        <div onMouseEnter={this.ToggleTooltip} onMouseLeave={this.ToggleTooltip} className={"bg-blue-200 text-blue-900 ring-blue-300 h-auto md:h-24 w-40 md:w-32  p-1 rounded-3xl transition-all duration-300 hover:ring-2 hover:rounded-lg hover:bg-white hover:text-blue-900"}>
          <button
            className={" grid grid-cols-3 h-10 w-full md:h-auto md:grid-cols-1 text-center m-auto p-1"}
            onClick={this.handleChange}
          >
            <FontAwesomeIcon className={"text-lg md:text-3xl  m-auto"} icon={this.props.icon} />
            <p id="option-desc" className={"h-auto w-10 md:h-auto md:w-auto   text-xs md:text-base align-middle my-auto  md:my-1 font-semibold"}>{this.props.id}</p>
            <OptionLevel level={this.state.index}/>
          </button>
        </div>
        <Tooltip text={this.props.text} optionsDescription={this.props.optionsDescription} level={this.state.index} showTooltip={this.state.showTooltip} />
      </>
    );
  }
}
