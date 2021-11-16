import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';

const OptionLevelIcon = (props) => {
    let stars=[];
    for(let i=0;i<props.level;i++){
        stars.push(<FontAwesomeIcon className="m-auto" icon={faStar} size="xs" key={i}/>)
    }
  return (
    <div className="h-10 px-4 mt-2 align-middle flex">
        {stars}
    </div>
  );
};

export default OptionLevelIcon;
