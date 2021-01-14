export const CloseSm = ({ width = 16, height = 16, ...props }) => (
    <svg
        width={width}
        height={height}
        stroke="currentColor"
        viewBox="0 0 16 16"
        fill="none"
        {...props}
    >
        <path strokeLinecap="round" strokeWidth={2} d="M4 4l8 8m0-8l-8 8" />
    </svg>
);
