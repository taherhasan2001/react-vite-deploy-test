import React, { useEffect, useState } from 'react';
import chroma from 'chroma-js';
import Select, { StylesConfig, ActionMeta, MultiValue }  from 'react-select';

export interface ColourOption {
  readonly value: string;
  readonly label: string;
  readonly color: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}
const colourStyles: StylesConfig<ColourOption, true> = {
  control: (styles) => ({ ...styles, backgroundColor: 'white' }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : undefined,
      color: isDisabled
        ? '#ccc'
        : isSelected
        ? chroma.contrast(color, 'white') > 2
          ? 'white'
          : 'black'
        : data.color,
      cursor: isDisabled ? 'not-allowed' : 'default',

      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled
          ? isSelected
            ? data.color
            : color.alpha(0.3).css()
          : undefined,
      },
    };
  },
  multiValue: (styles, { data }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: color.alpha(0.1).css(),
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color,
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ':hover': {
      backgroundColor: data.color,
      color: 'white',
    },
  }),
};


const CustomClearIndicator = (props:any) => {
  const [selectedOptions, setSelectedOptions] = useState<ColourOption[]>([]);
  const {setSelectedOptionsString,selectedOptionsString,colourOptions} = props;

  const [action, setAction] = useState<null | ActionMeta<ColourOption>>(null); // Adjusted the type here

  const handleChange = (newValue: MultiValue<ColourOption>, actionMeta: ActionMeta<ColourOption>) => {
    setAction(actionMeta);
    setSelectedOptions(newValue as ColourOption[]);
  };


  useEffect(() => {
    // selectedOptions.forEach(option => {
    //   const label = option.label;
    //   if (!selectedOptionsString.includes(label)) {
    //     setSelectedOptionsString(selectedOptions);
    //   }
    // });

    const newAction =action?.action;
    if(newAction == 'remove-value'){
      const removedValue =action?.removedValue;
      const label = removedValue?.label;
      // Filter out the removed label from selectedOptionsString
      const updatedOptionsString = selectedOptionsString.filter((option: string | undefined) => option !== label);
      
      // Update setSelectedOptionsString with the updated list
      setSelectedOptionsString(updatedOptionsString);

    }
    else if (newAction == "select-option"){
      const option =action?.option;
      const label = option?.label;
      // Add the new label to selectedOptionsString
      setSelectedOptionsString([...selectedOptionsString, label]);
    }


  }, [action]);

  return (
    <>
      <Select
        closeMenuOnSelect={false}
        defaultValue={[]}
        isMulti
        options={colourOptions}
        styles={colourStyles}
        onChange={handleChange}
      />

    </>
  );
};

export default CustomClearIndicator;