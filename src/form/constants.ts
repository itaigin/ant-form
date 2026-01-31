import type { DefaultOptionType } from "antd/es/select";
import dayjs, { Dayjs } from "dayjs";

export const POSITION_OPTIONS: DefaultOptionType[] = [
    {
        label: "Директор",
        value: "director",
    },
    {
        label: "Менеджер по работе с клиентами",
        value: "manager",
    },
    {
        label: "Специалист тех. поддержки",
        value: "support",
    },
];

export interface IFormItems {
    name: string;
    dateOfBirth: Dayjs;
    experience?: number;
    position: string;
    login: string;
    password?: string;
    email: string;
    phone?: string;
    notes?: string;
}

export const DEFAULT_VALUE: IFormItems = {
    name: "Иванов Семен Петрович",
    dateOfBirth: dayjs('1999-05-15'),
    email: "testuser@ya.ru",
    login: "testuser",
    position: "director",
    phone: "+79032923213",
    notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget risus non ipsum blandit ultrices. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed tincidunt ante eu purus euismod, nec molestie massa consequat. Curabitur vel ligula at lectus interdum vestibulum vitae non quam. Interdum et malesuada fames ac ante ipsum primis in faucibus."
}
