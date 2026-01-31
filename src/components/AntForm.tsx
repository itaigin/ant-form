import { useState } from "react";
import { Card, DatePicker, Form, Input, InputNumber, Select } from "antd";
import { FormActions } from "./FormActions.tsx";
import {
    DATE_OF_BIRTH_RULES,
    EMAIL_RULES,
    EXPERIENCE_RULES,
    LOGIN_RULES,
    MAX_EXPERIENCE,
    MIN_EXPERIENCE,
    NAME_RULES,
    NOTES_RULES,
    PASSWORD_RULES
} from "../utils/rules.ts";
import dayjs from 'dayjs';
import { DEFAULT_VALUE, type IFormItems, POSITION_OPTIONS } from "../utils/constants.ts";
import { FormRow } from "./FormRow.tsx";

const NOTES_ROWS = 3;

export const AntForm = () => {
    const [form] = Form.useForm<IFormItems>();
    const [isReadOnly, setReadOnly] = useState<boolean>(true);

    const onChange = () => {
        setReadOnly(false);
    };

    const onSave = () => {
        setReadOnly(true);
    };

    const onCancel = () => {
        setReadOnly(true);
        form.resetFields();
    };

    return (
        <Card>
            <Form
                form={form}
                layout="vertical"
                size="large"
                disabled={isReadOnly}
                initialValues={DEFAULT_VALUE}
            >
                <Form.Item
                    name="name"
                    label="ФИО"
                    rules={NAME_RULES}
                >
                    <Input />
                </Form.Item>

                <FormRow>
                    <Form.Item
                        name="dateOfBirth"
                        label="Дата рождения"
                        rules={DATE_OF_BIRTH_RULES}
                    >
                        <DatePicker
                            style={formStyles.fullWidthContainer}
                            format="DD.MM.YYYY"
                            disabledDate={(current) => current && current > dayjs().endOf('day')}
                        />
                    </Form.Item>
                    <Form.Item
                        name="experience"
                        label="Стаж (лет)"
                        dependencies={["dateOfBirth"]}
                        rules={EXPERIENCE_RULES}
                    >
                        <InputNumber
                            style={formStyles.fullWidthContainer}
                            min={MIN_EXPERIENCE}
                            max={MAX_EXPERIENCE}
                        />
                    </Form.Item>
                </FormRow>

                <Form.Item
                    name="position"
                    label="Должность"
                >
                    <Select
                        options={POSITION_OPTIONS}
                    />
                </Form.Item>

                <FormRow>
                    <Form.Item
                        name="login"
                        label="Логин"
                        rules={LOGIN_RULES}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        label="Пароль"
                        rules={PASSWORD_RULES}
                    >
                        <Input.Password />
                    </Form.Item>
                </FormRow>

                <FormRow>
                    <Form.Item
                        name="email"
                        label="Email"
                        rules={EMAIL_RULES}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="phone"
                        label="Номер телефона"
                    >
                        <Input />
                    </Form.Item>
                </FormRow>

                <Form.Item
                    name="notes"
                    label="Примечание"
                    rules={NOTES_RULES}
                >
                    <Input.TextArea rows={NOTES_ROWS} />
                </Form.Item>
            </Form>
            <div style={formStyles.buttonContainer}>
                <FormActions
                    form={form}
                    isReadOnly={isReadOnly}
                    onSave={onSave}
                    onCancel={onCancel}
                    onChange={onChange}
                />
            </div>
        </Card>
    )
}

const formStyles = {
    fullWidthContainer: {
        width: "100%",
    },
    buttonContainer: {
        display: "flex",
        marginTop: 24,
    },
};