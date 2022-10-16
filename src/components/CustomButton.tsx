import { Button, CircularProgress, Theme } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";


export enum buttonVariant {
  outline = "outline",
  filled = "filled",
}

export const CustomVariantButton = styled(Button, { shouldForwardProp: (prop) => prop !== 'buttonVariant' })<{
  buttonVariant: buttonVariant;
}>(({ theme, buttonVariant }) => {

  const commonSmall: any = {
    whiteSpace: "nowrap",
    minWidth: "150px",
    minHeight: "50px",
    fontSize: "19px",
    marginRight: theme.spacing(2),
    fontFamily: "Poppins",
    borderRadius: "30px",
  };

  const commonUpMedium: any = {
    minWidth: "200px",
    minHeight: "60px",
    fontSize: "19px",
    marginRight: theme.spacing(3),
    borderRadius: "30px",
  };


  if (buttonVariant === 'filled')
    return ({
      ...commonSmall,

      // orderRadius: theme.shape.borderRadius,
      border: "none",
      cursor: "pointer",
      [theme.breakpoints.up("sm")]: {
      },
      [theme.breakpoints.up("md")]: {
        ...commonUpMedium
      }
    })
  else
    return ({
      ...commonSmall,
      /* font-size: 30px; */
      border: "1px solid white",
      backgroundColor: "transparent",
      color: "rgb(255, 255, 255)",
      cursor: "pointer",

      [theme.breakpoints.up("sm")]: {
      },
      [theme.breakpoints.up("md")]: {
        ...commonUpMedium
      }
    })

});

interface buttonProps {
  text: string;
  innerButtonStyle?: React.CSSProperties,
  variant: buttonVariant | string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  loading?: boolean
}




const CustomButton: React.FC<buttonProps> = (props) => {
  const { text, loading, variant, innerButtonStyle, onClick } = props;
  if (loading)
    return (
      // @ts-ignore
      <CustomVariantButton
        disabled
        sx={{ paddingX: (th: Theme) => th.spacing(5) }}
        style={{ ...innerButtonStyle }}
        buttonVariant={variant as buttonVariant}
        onClick={onClick}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>{text}</div>
          <div style={{ width: "5px" }}></div>
          <CircularProgress size={15} sx={{ color: "white" }} />
        </div>
      </CustomVariantButton >
    );

  return (
    // @ts-ignore
    <CustomVariantButton
      sx={{ paddingX: (th: Theme) => th.spacing(5) }}
      style={{ ...innerButtonStyle }}
      buttonVariant={variant as buttonVariant}
      onClick={onClick}
    >
      {text}
    </CustomVariantButton >
  );
};

export default CustomButton;
