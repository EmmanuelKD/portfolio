import { Grid } from "@mui/material";
import { styled } from "@mui/system";
import { HTMLInputTypeAttribute, ReactElement } from "react";
import { validateNumberInput } from "../utils";

const CustomTextFieldMultiLineMain = styled('div')(({ theme }) => ({
  marginTop: "10px",
  marginBottom: "10px",
  backgroundColor: "white",
  color: "black",
  border: "1px solid white",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  flexWrap: "nowrap",
  padding: theme.spacing(1),

  [theme.breakpoints.up("md")]: {
  },

}));

const CustomTextFieldMain = styled('div')(({ theme }) => ({
  height: "54px",
  display: "flex",
  justifyContent: "center",
  alignItems: "baseline",
  backgroundColor: "white",
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
  [theme.breakpoints.up("md")]: {
    height: "64px",
  },

}));

export enum textFieldVariant {
  outline = "outline",
  filled = "filled",
}

interface textFieldProps {
  helperText?: string;
  multiLine?: boolean;
  maxRow?: number;
  prefix?: string | ReactElement;
  surfix?: string | ReactElement;
  fullWidth?: boolean
  inputType?: HTMLInputTypeAttribute,
  onChange?: React.ChangeEventHandler<HTMLInputElement>,
  onTextAreaChange?: React.ChangeEventHandler<HTMLTextAreaElement>,
  variant?: textFieldVariant | String;
}

const CustomTextFieldInput = styled("input")(({ theme }) => ({
  flexGrow: 1,
  padding: 0,
  // height: "64px",
  height: "100%",
  width: "100%",
  backgroundColor: "transparent",
  border: "none",
  "&:active": {
    outline: "none!important",
    background: "none",
  },
  "&:focus": {
    outline: "none!important",
    background: "none",
  },
  [theme.breakpoints.up("md")]: {

  },
}));
const CustomTextFieldMultiLine = styled("textarea")(({ theme }) => ({
  width: "100%",
  resize: "vertical",
  outline: "none",
  border: "none",
  "&:active": {

  },
  "&:focus": {
    outline: "none"
  },
  [theme.breakpoints.up("md")]: {
  },

}));

const CustomTextPrefix = styled("div")(({ theme }) => ({
  paddingLeft: "4px",
  paddingRight: "3px",
  height: "100%",
  fontWeight: 600,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "nowrap",
  whiteSpace: "nowrap",

}))

const CustomTextField: React.FC<textFieldProps> = (props) => {
  const { helperText, onTextAreaChange, onChange, variant, inputType, prefix, surfix, multiLine, fullWidth = false } = props;

  return (
    <>
      {multiLine ? (
        <CustomTextFieldMultiLineMain style={{
          width: "100%",
          // maxWidth: "300px" 
        }} onClick={(e) => {}}>
          <CustomTextFieldMultiLine placeholder={helperText}
            style={{
              height: "180px"
            }}
            onChange={onTextAreaChange}
          />
        </CustomTextFieldMultiLineMain>
      ) : (
        <CustomTextFieldMain style={{
          width: "100%",
          // maxWidth: "300px"
        }} onClick={(e) => {}}>
          {prefix && <CustomTextPrefix>{prefix}</CustomTextPrefix>}
          <CustomTextFieldInput
            {...(inputType === "number" && { onChange: validateNumberInput })}
            type={"text"}
            onChange={onChange}
            multiple={true}
            placeholder={helperText}
            style={{
              marginRight: !prefix ? "4px" : 0,
              marginLeft: !surfix ? "4px" : 0,
              // height: "38px"
            }}
          />
          {surfix && <CustomTextPrefix >{surfix}</CustomTextPrefix>}
        </CustomTextFieldMain>
      )}
    </>
  );
};

export default CustomTextField;
