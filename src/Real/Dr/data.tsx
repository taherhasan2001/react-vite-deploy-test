export interface ColourOption {
    readonly value: string;
    readonly label: string;
    readonly color: string;
    readonly isFixed?: boolean;
    readonly isDisabled?: boolean;
  }
  
export const colourOptions: readonly ColourOption[] = [
  { value: 'ocean', label: 'Dr Khader', color: '#00B8D9' },
  { value: 'blue', label: 'Dr Aziz', color: '#0052CC' },
  { value: 'purple', label: 'Dr Souad', color: '#5243AA' },
  { value: 'red', label: 'Dr Samera', color: '#FF5630' },
  { value: 'orange', label: 'Dr Afanah', color: '#FF8B00' },
  { value: 'yellow', label: 'Dr Mahmoud', color: '#FFC400' },
  { value: 'green', label: 'Dr Qasam', color: '#36B37E' },
  { value: 'forest', label: 'Dr Alaa', color: '#00875A' },
  { value: 'slate', label: 'Dr Mohammed', color: '#253858' },
  { value: 'silver', label: 'Dr Fathey', color: '#666666' },
];

