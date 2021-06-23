import React, { useMemo } from "react";
import cx from "classnames";
import MaskedInput from "react-input-mask";

const renderTag = (renderChildren, { maskProps, ...props }) =>
    maskProps ? (
        <MaskedInput key={props.value || props.name} {...maskProps}>
            {(maskedInputProps) => renderChildren({ ...maskedInputProps, ...props })}
        </MaskedInput>
    ) : (
        renderChildren(props.value || props.name)
    );

export const StepItem = ({ component, list, isHidden, commonProps, register, onClick }) => {
    const Tag = useMemo(() => component, [component]);

    return (
        <div
            className={cx("transition-250 row", {
                "hidden-element": isHidden,
            })}
        >
            {list.map(({ maskProps, ...tagProps }) =>
                renderTag(
                    (key) => (
                        <div className="col-sm-12 col-md-6" key={key}>
                            <Tag
                                {...tagProps}
                                {...commonProps}
                                onClick={onClick}
                                ref={register()}
                            />
                        </div>
                    ),
                    { maskProps, ...tagProps },
                ),
            )}
        </div>
    );
};
