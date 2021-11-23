import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';

const OptionLevel = (props) => {
    let stars=[];
    for(let i=0;i<props.level;i++){
        stars.push(<FontAwesomeIcon className="m-auto animate-slide-left" icon={faStar} size="1x" key={i}/>)
    }
  return (
    <div className={"h-6 px-4 -mt-1 align-middle flex text-sm"}>
        {stars}
    </div>
  );
};

export default OptionLevel;
