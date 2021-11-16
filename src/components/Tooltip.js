function Tooltip(props) {
  return (
    <div className="p-1 origin-left transform-gpu cursor-default scale-x-0 transition ease-in duration-200 relative left-24 bottom-16   group-hover:scale-x-100 bg-gray-800 text-white text-sm rounded-md">
      {props.text}
    </div>
  );
}

export default Tooltip;
