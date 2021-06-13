import React, { useMemo } from "react";
import cx from "classnames";
import MaskedInput from "react-input-mask";

const renderTag = (renderChildren, { maskProps, ...props }) =>
    maskProps ? (
        <MaskedInput {...maskProps}>
            {(maskedInputProps) => renderChildren({ ...maskedInputProps, ...props })}
        </MaskedInput>
    ) : (
        renderChildren(props)
    );

export const StepItem = ({ component, list, isHidden, commonProps, register, onClick }) => {
    const Tag = useMemo(() => component, [component]);

    return (
        <div
            className={cx("transition-250 row", {
                "hidden-element": isHidden,
            })}
        >
            {list.map(({ maskProps, ...tagProps }, index) =>
                renderTag(
                    () => (
                        <div key={index} className="col-sm-12 col-md-6">
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
