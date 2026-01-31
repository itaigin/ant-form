import { Button, type FormInstance } from "antd";
import { useCanSave } from "../hooks/useCanSave.ts";

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
            htmlType="submit"
        >
            Сохранить
        </Button>
    )
}