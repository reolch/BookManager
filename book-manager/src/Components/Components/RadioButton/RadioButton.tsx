import React, { FC } from 'react';
import './RadioButton.css';

/** 
 * ラジオボタンコンポーネント
 * refを指定する場合、onChangeで親コンポーネントのステートを更新しないこと
 * 
 */


interface Props {
  name: string,
  value: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  radioInfo: { value: string, label: string }[],
  radioRef?: React.RefObject<HTMLInputElement>,
};

export const RadioButton: FC<Props> = React.memo((props: Props) => {
  // 選択された値
  const [selectedValue, setSelectedValue] = React.useState<string>('');


  // 選択値の初期化
  React.useEffect(() => {
    setSelectedValue(props.value);
    if(props.radioRef !== undefined) {
      if(props.radioRef.current !== null) {
        props.radioRef.current.value = props.value;
      }
    }
  },[props.value]);

  // ラジオボタン選択時処理
  const handleChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(event);
    setSelectedValue(event.target.value);
    if(props.radioRef !== undefined) {
      if(props.radioRef.current !== null) {
        props.radioRef.current.value = event.target.value;
      }
    }
  }

  return(
    <>
      <input 
        type="text"
        hidden={true}
        id={props.name}
        name={props.name}
        value={selectedValue}
        onChange={(event) => handleChangeRadio(event)}
        ref={props.radioRef}
      />
      <div className="RadioGroup">
        {props.radioInfo.map((info) => {
          return (
            <div 
              key={"div_radio" + props.name + "_" + info.value}
              className={"Radio"}
            >
              <input 
                type="radio" 
                name={props.name}
                key={"radio_" + props.name + "_" + info.value}
                value={info.value}
                checked={info.value === selectedValue} 
                onChange={(event) => handleChangeRadio(event)}
              />
              <label key={"radio_label_" + props.name + "_" + info.value}>{info.label}</label>
            </div>
          )
        })}
      </div>
    </>
  )
});