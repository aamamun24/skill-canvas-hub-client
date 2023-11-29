const SectionTitle = ({ text, colorText }) => {
    return (
        <h1 className="text-4xl lg:text-5xl text-[#050C26] font-semibold mb-2">
            {text} <span className="text-[#FF7426]">{colorText}</span>
        </h1>
    );
};

export default SectionTitle;