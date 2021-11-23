import logo from '../logo/Flipdish_main_logo_blue.png';


const Footer = () => {
    return(
        <div className={"w-full h-auto bg-blue-300 text-white text-center flex rounded-b-xl mt-3"}>
            <img className={"m-auto p-2"} src={logo}></img>
        </div>
    )
}

export default Footer;