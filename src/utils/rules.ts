import type { Rule } from "antd/es/form";
import dayjs from "dayjs";

const NAME_MAX_LENGTH = 100;
export const NAME_RULES: Rule[] = [
    { required: true, message: requiredMessage("ФИО") },
    { max: NAME_MAX_LENGTH, message: maxLengthMessage(NAME_MAX_LENGTH) },
];

export const DATE_OF_BIRTH_RULES: Rule[] = [
    { required: true, message: requiredMessage("Дата рождения") },
];

export const MIN_EXPERIENCE = 0;
export const MAX_EXPERIENCE = 100;
export const EXPERIENCE_RULES: Rule[] = [
    ({ getFieldValue }) => ({
        validator(_, value) {
            if (!value) {
                return Promise.resolve();
            }

            const birthDate = getFieldValue('dateOfBirth');

            if (!birthDate) {
                return Promise.reject(new Error('Сначала укажите дату рождения'));
            }

            if (value > MAX_EXPERIENCE) {
                return Promise.reject(new Error(`Стаж не может быть больше ${MAX_EXPERIENCE} лет`));
            }

            const today = dayjs();
            const age = today.diff(dayjs(birthDate), 'year');

            if (value > age) {
                return Promise.reject(new Error(`Стаж не может быть больше возраста (${age} лет)`));
            }

            return Promise.resolve();
        },
    }),
]

const LOGIN_MIN_LENGTH = 3;
const LOGIN_MAX_LENGTH = 20;
const LOGIN_PATTERN = /^[a-zA-Z0-9_]+$/;
export const LOGIN_RULES: Rule[] = [
    { required: true, message: requiredMessage("логин") },
    { min: LOGIN_MIN_LENGTH, message: minLengthMessage(LOGIN_MIN_LENGTH) },
    { max: LOGIN_MAX_LENGTH, message: maxLengthMessage(LOGIN_MAX_LENGTH) },
    {
        pattern: LOGIN_PATTERN,
        message: 'Только латиница, цифры и подчеркивание'
    }
];

const PASSWORD_MIN_LENGTH = 6;
const PASSWORD_MAX_LENGTH = 12;
export const PASSWORD_RULES: Rule[] = [
    { min: PASSWORD_MIN_LENGTH, message: minLengthMessage(PASSWORD_MIN_LENGTH) },
    { max: PASSWORD_MAX_LENGTH, message: maxLengthMessage(PASSWORD_MAX_LENGTH) },
]

export const EMAIL_RULES: Rule[] = [
    { required: true, message: requiredMessage("email") },
    { type: 'email', message: 'Некорректный email' }
];

export const PHONE_RULES: Rule[] = [
    { type: "tel", message: "Некорректный номер телефона" }
];

const NOTES_MAX_LENGTH = 400;
export const NOTES_RULES: Rule[] = [
    { max: NOTES_MAX_LENGTH, message: maxLengthMessage(NOTES_MAX_LENGTH) },
];

function requiredMessage(name: string) {
    return `Поле ${name} обязательно для заполнения`;
}

function minLengthMessage(min: number) {
    return `Минимум ${min} символов`;
}

function maxLengthMessage(max: number) {
    return `Максимум ${max} символов`;
}
