import React, { FC } from 'react';
// import './Button.css';

interface Props {
  name: string,
  value: string,
  onClick: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void,
};

export const Button: FC<Props> = React.memo((props: Props) => {
  return(
    <>
      <input 
        style={{'height': 'auto'}}
        type="button"
        id={props.name}
        name={props.name}
        value={props.value}
        onClick={(event) => props.onClick(event)}
      />
    </>
  )
});