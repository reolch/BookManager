import { Button, InputLabel, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { FC } from "react";

export const Login: FC = () => {
  // ログイン情報
  const initLoginInfo = {
    userId: "",
    password: "",
  };
  const [loginInfo, setLoginInfo] = React.useState(initLoginInfo);

  // テキスト変更時イベント
  const onChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginInfo({
      ...loginInfo,
      [event.target.name]: event.target.value,
    });
  };

  // ログインボタン押下時イベント
  const onClickLogin = () => {
    // TODO：ログイン処理実装
    if (!validate()) {
      return;
    }
  };

  // 入力チェック
  function validate() {
    if (loginInfo.userId === "") {
      alert("ユーザーIDは必須です。");
      return false;
    }

    if (loginInfo.password === "") {
      alert("パスワードは必須です。");
      return false;
    }
    return true;
  }

  return (
    <>
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Box>
          <Typography fontSize={"48px"}>Book Manager</Typography>
        </Box>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        marginTop={"8px"}
        marginBottom={"8px"}
      >
        <Box>
          <TextField
            id="userId"
            label="User ID"
            variant="outlined"
            name="userId"
            onChange={onChangeText}
          />
        </Box>
      </Box>

      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        marginTop={"8px"}
        marginBottom={"8px"}
      >
        <Box>
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            name="password"
            type="password"
            onChange={onChangeText}
          />
        </Box>
      </Box>

      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        marginTop={"42px"}
        marginBottom={"8px"}
      >
        <Box>
          <Button variant="contained" onClick={onClickLogin}>
            Login
          </Button>
        </Box>
      </Box>
    </>
  );
};
