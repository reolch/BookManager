import React, { FC } from 'react';
import './TextField.css';

interface Props {
  name: string
  value: string
  placeholder?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
  maxLength: number
  textRef?: React.RefObject<HTMLInputElement>
};

export const TextField: FC<Props> = React.memo((props: Props) => {
  const [value, setValue] = React.useState<string>('');

  // 選択値の初期化
  React.useEffect(() => {
    setValue(props.value);
    if(props.textRef !== undefined) {
      if(props.textRef.current !== null) {
        props.textRef.current.value = props.value;
      }
    }
  },[props.value]);

  // テキストボックス内容変更時処理
  const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    if(props.onChange !== undefined) {
      props.onChange(event);
    }
    if(props.textRef !== undefined) {
      if(props.textRef.current !== null) {
        props.textRef.current.value = event.target.value;
      }
    }
  }

  return(
    <input 
      type='text'
      name={props.name}
      value={value}
      placeholder={props.placeholder}
      onChange={handleChangeText}
      onBlur={(event) => props.onBlur !== undefined 
                ? props.onBlur(event) 
                : undefined}
      maxLength={props.maxLength}
      ref={props.textRef}
    />
  )
});