function Tooltip(props) {
  return (
    <div
      className={`${
        props.showTooltip && 'scale-x-100'
      }  mx-2 font-semibold w-32 border-2 border-blue-300 h-auto origin-left transform-gpu scale-x-0 left-44 md:left-72 transition ease-in duration-200 absolute bg-blue-300 text-gray-700 text-base rounded-lg`}
    >
      <div className={"pt-1 px-1 text-sm md:text-base"}>{props.text}</div>

      <div
        className={
          'mt-1 px-1 w-full h-auto  rounded-b-md text-sm md:text-base capitalize animate-slide-left bg-gray-100'
        }
      >
        {props.optionsDescription[props.level]}
      </div>
    </div>
  );
}

export default Tooltip;
