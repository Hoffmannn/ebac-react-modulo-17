export type ButtonProps = {
  label: string;
  onClick: () => void;
  mh: number;
  mv: number;
  ml: number;
  mr: number;
  mt: number;
  mb: number;
  p: number;
  isDisabled: boolean;
  children?: React.ReactNode;
};
