import React, { FC } from 'react';
import {TextField} from '../../Components/Components/TextField/TextField'
import {RadioButton} from '../../Components/Components/RadioButton/RadioButton'
import { Button } from '../../Components/Components/Button/Button';
import { CheckBox } from '../../Components/Components/CheckBox/CheckBox';
import { Grid, Box } from '@mui/material';
import { DateSelect } from '../../Components/Components/DateSelect/DateSelect';
import { EmailTextField } from '../../Components/Components/EmailTextField/EmailTextField';

export const Sample2: FC = () => {
  // データ保持変数
  const [registerData, setRegisterData] = React.useState({
    textValue: '',
    radioValue: '',
    checkValue: '',
    dateValue: '',
    emailValue: '',
  });
  const radioValueRef: React.RefObject<HTMLInputElement> = React.createRef();

  // 初期表示処理
  React.useEffect(() => {
    setRegisterData({
      ...registerData,
      textValue: 'サンプル',
      radioValue: 'value2',
    });
  }, [])

  // ---------------------------値変更時処理-----------------------------
  // テキストフィールドフォーカスアウト時
  const onFocuoutText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData({
      ...registerData,
      [event.target.name as string]: event.target.value as string,
    });
  }

  // ラジオボタン押下時
  const onChangeRadioButton = (event: React.ChangeEvent<HTMLInputElement>) => {}

  // ボタン押下時
  const onClickButton = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    console.log(registerData);
  }

  // チェックボックス押下時
  const onChangeCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData({
      ...registerData,
      [event.target.name as string]: event.target.checked,
    });
  }

  // 日付変更時
  const onChangeDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData({
      ...registerData,
      [event.target.name as string]: event.target.value,
    });
  }

  // --------------------------------------------------------------------

  return(
    <>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item>
          <TextField
            name='textValue'
            value={registerData.textValue}
            placeholder='サンプル'
            onBlur={onFocuoutText}
            maxLength={10}
          />
        </Grid>
        <Grid item>
          <RadioButton
            name='radioValue'
            value={registerData.radioValue}
            onChange={onChangeRadioButton}
            radioInfo={[
              { value: 'value1', label: '選択肢1'},
              { value: 'value2', label: '選択肢2'},
              { value: 'value3', label: '選択肢3'}
            ]}
            radioRef={radioValueRef}
          />
        </Grid>
        <Grid item>
          <CheckBox
            name={'checkValue'}
            value={registerData.checkValue}
            onChange={onChangeCheck}
          />
        </Grid>
        <Grid item>
          <DateSelect
            name={'dateValue'}
            value={registerData.dateValue}
            onChange={onChangeDate}
          />
        </Grid>
        <Grid item>
          <EmailTextField
            name='emailValue'
            value={registerData.emailValue}
            placeholder='aaa@email.com'
            onBlur={onFocuoutText}
            maxLength={256}
          />
        </Grid>
      </Grid>
      <Box 
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Button
          name={"testButton"}
          value={"テスト"}
          onClick={onClickButton}
        />
      </Box>
    </>
  )
}