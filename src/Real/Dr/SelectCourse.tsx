import React, { useEffect, useState } from 'react';
import Select, { ActionMeta, components, ValueContainerProps, ValueType  } from 'react-select';

export interface ColourOption {
  readonly value: string;
  readonly label: string;
  readonly color: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

const ValueContainer = ({
  children,
  ...props
}: ValueContainerProps<ColourOption>) => (
  <components.ValueContainer {...props}>{children}</components.ValueContainer>
);

const SelectCourse = (props:any) => {
    const {setCourseSelected,courseSelected,colourOptions} = props;
    // console.log(colourOptions)

    const [selectedOptions, setSelectedOptions] = useState<ColourOption[]>([]);
    const handleChange = (newValue: ValueType<ColourOption>, actionMeta: ActionMeta<ColourOption>) => {
      setSelectedOptions(Array.isArray(newValue) ? newValue as ColourOption[] : newValue ? [newValue as ColourOption] : []);
    };
    useEffect(() => {
      if(selectedOptions && selectedOptions[0]){
        const label = selectedOptions[0].label ;
        if(courseSelected != label)
            setCourseSelected(label);
      }


    }, [selectedOptions]);

    return(
      <>
          <Select
            defaultValue={colourOptions[0]}
            isClearable
            styles={{
              singleValue: (base) => ({ ...base, color: 'white' }),
              valueContainer: (base) => ({
                ...base,
                background: '#00B8D9',
                color: 'white',
                width: '100%',
              }),
            }}
            components={{ ValueContainer }}
            isSearchable
            name="color"
            options={colourOptions}
            onChange={handleChange}
          />
      </>
    );

    };
  
  export default SelectCourse;
