import React, { Component, Fragment, useState, useRef, useEffect } from "react";



import Select, { components, ControlProps, ValueContainerProps, MenuProps,PlaceholderProps,DropdownIndicatorProps, StylesConfig, Props, ContainerProps } from 'react-select';
import { colourOptions } from './data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp, faCoffee } from '@fortawesome/free-solid-svg-icons'




interface State {
  readonly isClearable: boolean;
  readonly isDisabled: boolean;
  readonly isLoading: boolean;
  readonly isRtl: boolean;
  readonly isSearchable: boolean;
  readonly isSelected: boolean;
  isFocused: boolean;

  menuIsOpen: boolean;

}



export default class SingleSelect extends Component<{}, State, Props> {
  state: State = {
    isClearable: true,
    isDisabled: false,
    isLoading: false,
    isRtl: false,
    isSearchable: true,
    selectedOption: null,



  };
  props: Props;



  handleChange = (selectedOption, props) => {

    console.log(`Option selected when clicked:`, selectedOption);


    selectedOption === null ?

    this.props.setData("none") :

    this.props.setData(selectedOption.value);

    };




  toggleClearable = () =>
    this.setState((state) => ({ isClearable: !state.isClearable }));
  toggleDisabled = () =>
    this.setState((state) => ({ isDisabled: !state.isDisabled }));
  toggleLoading = () =>
    this.setState((state) => ({ isLoading: !state.isLoading }));
  toggleRtl = () => this.setState((state) => ({ isRtl: !state.isRtl }));
  toggleSearchable = () =>
    this.setState((state) => ({ isSearchable: !state.isSearchable }));
    toggleMenuIsOpen = () =>
      this.setState((state) => ({ menuIsOpen: !state.menuIsOpen }));
      togglesIsFocused = () =>
        this.setState((state) => ({ isFocused: !state.isFocused }));

  render() {
    const {
      toggleClearable,
      toggleDisabled,
      toggleLoading,
      toggleRtl,
      toggleSearchable,
      toggleMenuIsOpen,
      togglesIsFocused,
    } = this;

    const { selectedOption } = this.props;

    const info = this.props.data;
    const effect = this.props.show;

    console.log(`The current state of data is:`, info);





    const { isClearable, isSearchable, isDisabled, isLoading, isRtl, menuIsOpen, isSelected, isFocused, ControlProps } =
      this.state;

      // const [value, setValue] = useState(0);
      // useEffect(() => {
      //     setValue(inputValue);
      //     console.log(value);
      //   });

      const DropdownIndicator = (props) => {
        const { menuIsOpen } = props.selectProps;

        return menuIsOpen ? (
          <components.DropdownIndicator {...props}>
            <FontAwesomeIcon icon={faChevronUp} style={{ color: "#0D0D0D" }} />
          </components.DropdownIndicator>
        )
        :
        <components.DropdownIndicator {...props}>
          <FontAwesomeIcon icon={faChevronDown} style={{ color: "#0D0D0D" }} />
        </components.DropdownIndicator>
        ;
      };

      // const Control = (props) => {
      //   const { menuIsOpen } = props.selectProps;
      //
      //   return menuIsOpen ? (
      //     <components.Control {...props}>
      //       <FontAwesomeIcon icon={faChevronUp} style={{ backgroundColor: "red" }} />
      //     </components.Control>
      //   )
      //   :
      //   <components.Control {...props}>
      //     <FontAwesomeIcon icon={faChevronDown} style={{ backgroundColor: "blue" }} />
      //   </components.Control>
      //   ;
      //
      // };

      const ControlComponent = (props) => {
        const { menuIsOpen } = props.selectProps;

        return menuIsOpen ? (
          <div style={{ backgroundColor: "yellow", border: "5px solid red" }}>
          <p >Custom Control</p>
          <components.Control {...props} />
          </div>
        )
        :
        <div>
        <p style={{ backgroundColor: "red", border: "5px solid blue" }}>Custom Control</p>
        <components.Control {...props} />
        </div>
        ;
      };

      function styleFn(provided, {menuIsOpen }) {
  return { ...provided, borderColor: menuIsOpen ? 'blue' : 'red' };
}



      const dot = (color = 'transparent') => ({
  alignItems: 'center',
  display: 'flex',

  ':before': {
    backgroundColor: color,
    borderRadius: 10,
    content: '"\u2713"',
    display: 'block',
    color: "#EE735C",
    marginRight: 8,
    height: 16,
    width: 10,
  },
});


    return (
      <Fragment>
        <Select
        styles={{
          placeholder: (base) => ({
              ...base,
            fontSize: '14px',
            lineHeight: "23.8px",
            font: "Poppins",
            fontColor: "#87898E",
            fontWeight: 400,
          }),
          container: ( base, ) => ({
             ...base,

          padding: 5,
          margin: "26px 16px auto 16px",
          }),

          control: (styles, selectedOption ) => ({
            ...styles,

          borderColor: info === "none" || info.value === "null"
          ? "#87898E"
          : "red",



          borderWidth: '0px 0px 1px 0px',
          borderRadius: "0px",
          // borderColor: "#87898E",
          boxShadow: "none",
          paddingLeft: 0,

          }),

          valueContainer: (base, state) => ({
            ...base,





          paddingLeft: 0,

          }),

          // clearIndicator: (base, isFocused) => ({
          //   ...base,
          //
          //
          //
          // color: isFocused ? 'red' : 'green',
          // borderWidth: '0px 0px 1px 0px',
          // borderRadius: "0px",
          // borderColor: this.state.menuIsOpen ? 'red' : 'green',
          // }),

          option: (styles, {isDisabled, isFocused, isSelected }) => ({
            ...styles,

            backgroundColor: isDisabled
          ? undefined
          : isSelected
          ? "rgba(238, 115, 92, 0.1)"
          : isFocused
          ? "rgba(238, 115, 92, 0.1)"
        :  undefined,

        color: "rgba(24, 39, 58, 0.94)",
borderRadius: "4px",
margin: "auto",
width: "93%",
fontSize: '16px',
lineHeight: "27.2.8px",
font: "Poppins",
fontColor: "rgba(24, 39, 58, 0.94)",
fontWeight: 400,

          }),

          singleValue: (styles) => ({ ...styles, ...dot() }),


    }}

          components={{ Control: ControlComponent }, { DropdownIndicator: DropdownIndicator }}
          // components={ { DropdownIndicator } }
          value={selectedOption}
          onChange={this.handleChange}
          placeholder="Score by choosing from the list"
          className="basic-single"
          classNamePrefix="select"
          // defaultValue={colourOptions[0]}
          isDisabled={isDisabled}
          isLoading={isLoading}
          isClearable={isClearable}
          isRtl={isRtl}
          isSearchable={isSearchable}
          name="color"
          options={colourOptions}
          menuPlacement="top"
          isSelected={isSelected}
          isFocused={isFocused}


        />


      </Fragment>
    );
  }
}
