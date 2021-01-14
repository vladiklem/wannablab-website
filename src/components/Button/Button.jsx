import { Button as ReactstrapButton } from "reactstrap";
import cx from "classnames";

import { Loader } from "components/index";

import styles from "./Button.module.scss";

export const buttonColorEnum = {
    SUCCESS_GRADIENT: "success-gradient",
    WHITE: "white",
    INVISIBLE: "invisible",
    UNSTYLED: "unstyled",
};

export const Button = ({
    className,
    isSquare,
    isRounded,
    isLoading,
    isBold,
    size,
    children,
    disabled,
    ...props
}) => {
    return (
        <ReactstrapButton
            className={cx(className, {
                "py-3": isSquare && size === "lg",
                [styles.rounded50]: isRounded,
                "font-weight-bold": isBold,
            })}
            size={size}
            disabled={disabled || isLoading}
            {...props}
        >
            {isLoading ? <Loader /> : children}
        </ReactstrapButton>
    );
};
