const PrimaryButton = ({buttonTopic,extendedClasses}:{buttonTopic:string,extendedClasses:string}) => {
    return (
        <button className={`bg-yellow-600 font-semibold text-[16px] ${extendedClasses}`}>
            {buttonTopic}
        </button>
    );
};

export default PrimaryButton;