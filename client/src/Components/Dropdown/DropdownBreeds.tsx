import React, { Component, Fragment, useState, useRef, useEffect } from "react";



import Select, { components, ControlProps, ValueContainerProps, MenuProps,PlaceholderProps,DropdownIndicatorProps, StylesConfig, Props, ContainerProps } from 'react-select';
import { dogOptions } from './data';
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
  closeMenuOnSelect: boolean,
  menuIsOpen: boolean;
  blurInputOnSelect: boolean,

}



export default class SingleSelect extends Component<{}, State, Props> {
  state: State = {
    isClearable: true,
    isDisabled: false,
    isLoading: false,
    isRtl: false,
    isSearchable: true,
    selectedOption: null,
    blurInputOnSelect: false,
    closeMenuOnSelect: false,



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





    const { isClearable, isSearchable, isDisabled, isLoading, isRtl, menuIsOpen, isSelected, isFocused, ControlProps, blurInputOnSelect, closeMenuOnSelect } =
      this.state;


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
    content: '""',
    display: 'block',
    color: "rgba(255, 211, 91)",
    height: 16,
    width: 10,
    marginLeft: 5
  },
});


    return (
      <Fragment>
        <Select
        styles={{
          placeholder: (base) => ({
              ...base,
            fontSize: '14px',
            lineHeight: "21px",
            font: "Lato",
            fontColor: "#87898E",
            fontWeight: 400,
            letterSpacing: "0.005em",
            marginLeft: "16px",
          }),
          container: ( base, ) => ({
             ...base,

          padding: 5,
          margin: "0px 16px auto 16px",
          }),

          control: (styles, selectedOption ) => ({
            ...styles,

          borderColor: "#87898E",
          height: "48px",

          width: "288px",
          borderWidth: '1px',
          borderRadius: "8px",
          boxShadow: "none",
          paddingLeft: 0,

          }),

          valueContainer: (base, state) => ({
            ...base,





          paddingLeft: 0,

          }),

          
            
          menu: (base, state) => ({
            ...base,




          width: "288px",
          //border: "2px solid red"

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

          option: (styles, {isDisabled, isFocused, isSelected}) => ({
            ...styles,

            backgroundColor: isDisabled
          ? undefined
          : isSelected
          ? "rgba(255, 211, 91, 0.2)"
          : isFocused
          ? "rgba(255, 211, 91, 0.2)"
        :  undefined,

color: "rgba(24, 39, 58, 1)",
borderRadius: "4px",
//border:"2px solid red",
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
          placeholder="Breed"
          className="basic-single"
          classNamePrefix="select"
          // defaultValue={colourOptions[0]}
          isDisabled={isDisabled}
          isLoading={isLoading}
          isClearable={isClearable}
          isRtl={isRtl}
          isSearchable={isSearchable}
          name="color"
          options={dogOptions}
          menuPlacement="bottom"
          isSelected={isSelected}
          isFocused={isFocused}


        />


      </Fragment>
    );
  }
}
