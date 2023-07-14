import React, { FC } from 'react';
// import './CheckBox.css';

interface Props {
  name: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
};

export const CheckBox: FC<Props> = React.memo((props: Props) => {
  return(
    <input 
      type='checkbox'
      name={props.name}
      value={props.value}
      onChange={(event) => props.onChange(event)}
    />
  )
});