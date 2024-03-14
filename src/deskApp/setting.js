import Header from "../components/header";
import arrow from './assets/arrow.svg';
import { Link } from "react-router-dom";

const Settings = () => {
    return ( 
        <>
        <div className=" w-full h-full flex justify-center items-center">
            <div className="w-[800px] bg-[#fff] flex flex-col items-center justify-center relative">
                <Header/>
                <div className="w-full bg-white p-6 relative  h-[600px]">
                    <p className=" font-Afacad font-semibold text-2xl mt-2  text-center">Settings</p>
                    <div className=" w-full border border-[#EAEBF0] rounded-[5px] mt-6 p-6">

                        <Link to='/setting/selectedApps'>
                            <button className=" w-full flex flex-row justify-between pb-6 border-b border-[#EAEBF0]">
                            <p className=" font-Afacad text-base font-normal">Selected Apps</p>
                            <img src={ arrow } alt="" />
                        </button></Link>

                        <Link to='/setting/micrphone'>
                            <button className=" w-full flex flex-row justify-between py-6 border-b border-[#EAEBF0]">
                            <p className=" font-Afacad text-base font-normal">Microphone Devices</p>
                            <img src={ arrow } alt="" />
                        </button></Link>

                        <Link to='/setting/noti'>
                            <button className=" w-full flex flex-row justify-between pt-6">
                            <p className=" font-Afacad text-base font-normal">Notification</p>
                            <img src={ arrow } alt="" />
                        </button></Link>

                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Settings;