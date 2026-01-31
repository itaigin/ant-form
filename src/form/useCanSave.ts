import { Form, type FormInstance } from "antd";
import { useEffect, useState } from "react";

export const useCanSave = (form: FormInstance) => {
    const [canSave, setCanSave] = useState<boolean>(false);

    const values = Form.useWatch([], form);

    useEffect(() => {
        form
            .validateFields({ validateOnly: true })
            .then(() => setCanSave(true))
            .catch(() => setCanSave(false));
    }, [form, values]);

    return canSave;
}