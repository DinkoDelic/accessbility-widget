import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';

const OptionLevel = (props) => {
    let stars=[];
    for(let i=0,y=props.level-1;i<props.level;i++,y--){
        stars.push(<FontAwesomeIcon className={`m-0.5 h-1.5 md:h-4 col-auto animate-slide-left`} icon={faStar} key={i}/>)
    }
  return (
    <div className={"h-auto m-auto md:px-4 md:h-4  md:-mt-1 grid grid-rows-3 md:grid-flow-col md:grid-rows-none text-sm"}>
        {stars}
    </div>
  );
};

export default OptionLevel;
