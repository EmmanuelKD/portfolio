export enum buttonVariant {
  outline = "outline",
  filled = "filled",
}

interface buttonProps {
  text: string;
  innerButtonStyle: object;
  variant: buttonVariant;
}

const CustomTabView: React.FC<buttonProps> = (props) => {
  const { text, variant, innerButtonStyle } = props;

  return (
    <button
      style={{ ...innerButtonStyle }}
      className={`${variant === buttonVariant.filled
          ? "CustomTabViewFilled"
          : "CustomTabViewOutlined"
        }`}
    >
      {text}
    </button>
  );
};

export default CustomTabView;
