import { Row, Col, type ColProps, type RowProps } from 'antd';
import { Children, type ReactNode } from "react";

interface IFormRowProps {
    children: ReactNode;
    colProps?: ColProps;
    rowProps?: RowProps;
}

const ROW_GUTTER = 16;
const COL_XS = 24;
const COL_SM = 12;

export const FormRow = ({ children, colProps, rowProps }: IFormRowProps) => {
    return (
        <Row gutter={ROW_GUTTER} {...rowProps}>
            {Children.map(children, (child) => (
                <Col xs={COL_XS} sm={COL_SM} {...colProps}>
                    {child}
                </Col>
            ))}
        </Row>
    );
};