import { Button } from "@nextui-org/react";
import { useFormStatus } from "react-dom";

const FormButton = ({
  buttonColor,
  children,
}: {
  buttonColor?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
  children: React.ReactNode;
}) => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" isLoading={pending} color={buttonColor || "default"}>
      {children}
    </Button>
  );
};

export default FormButton;
