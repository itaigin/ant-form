import { Button, type FormInstance, Space } from "antd";
import { SubmitButton } from "./SubmitButton.tsx";

interface IFormActionsProps {
    form: FormInstance;
    isReadOnly: boolean;
    onSave: () => void;
    onCancel: () => void;
    onChange: () => void;
}

export const FormActions = ({ form, isReadOnly, onSave, onCancel, onChange }: IFormActionsProps) => {
    if (isReadOnly) {
        return (
            <Button type="primary" size={"large"} onClick={onChange}>
                Изменить
            </Button>
        )
    }

    return (
        <Space>
            <SubmitButton form={form} onSubmit={onSave} />
            <Button type="primary" size={"large"} onClick={onCancel}>
                Отмена
            </Button>
        </Space>
    )
}