import { Button, type FormInstance } from "antd";
import { useCanSave } from "./useCanSave.ts";

interface ISubmitButtonProps {
    form: FormInstance;
    onSubmit?: () => void;
}

export const SubmitButton = ({ form, onSubmit }: ISubmitButtonProps) => {
    const canSave = useCanSave(form);

    return (
        <Button
            disabled={!canSave}
            type="primary"
            size="large"
            onClick={onSubmit}
        >
            Сохранить
        </Button>
    )
}