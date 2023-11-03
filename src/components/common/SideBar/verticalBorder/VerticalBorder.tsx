export default function VerticalBorder(props: any) {
    const borderStyle = {
        borderRight: '1px solid #cccbc8', // Adjust border properties as needed
        height: props.height || '100%', // Set the height, defaulting to 100% if not provided
    };

    return (
        <div style={borderStyle}></div>
    );
};
