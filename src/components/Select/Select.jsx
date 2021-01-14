import React, { forwardRef } from "react";
import ReactSelect from "react-select";

export const Select = forwardRef(({ isMulti, value = isMulti ? [] : {}, ...props }, ref) => {
    return <ReactSelect isMulti={isMulti} value={value} ref={ref} {...props} />;
});
