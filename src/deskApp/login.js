import { Link } from "react-router-dom";
import logo from './assets/logo.svg';
import load from './assets/load.gif';
import shape from './assets/Shape.svg';
import lin from './assets/link.svg';
import bin from './assets/trash.svg';
import { useState, useEffect } from "react";

const Login = () => {

    const [deviceCheck, setDeviceCheck] = useState(false);
    const [limitReached, setLimitReached] = useState(false);
    const [replace, setReplace] = useState(false);
    const [linkedDevices, setLinkedDevices] = useState(false);

    useEffect(() => {
        if (deviceCheck) {
            const deviceCheckTimeout = setTimeout(() => {
                setDeviceCheck(false);
                setLimitReached(true);
            }, 5000);

            return () => clearTimeout(deviceCheckTimeout);
        }
    }, [deviceCheck]);

    const handleStart = () => {
        setDeviceCheck(true);
    };

    const handleUnlink = () => {
        setLimitReached(false);
        setLinkedDevices(true);
    };

    const handleContinue = () => {
        setLinkedDevices(false);
       setReplace(true);
    };


    const devices =[
        {device:"MacBook Pro"},
        {device:"MacBook Air"},
        {device:"Hp EliteBook"},
        {device:"Hp ZBook  "}
    ]

    return ( 
        <>
        <div className=" w-full h-full flex justify-center items-center">
            
                <div className=" w-[800px] p-12 bg-[#fff] flex flex-col items-center justify-center relative">

                    {/* Pop up Prompts  */}

                    {/* Device check prompt */}
                    { deviceCheck && <div className=" fixed w-full h-full top-0 left-0 bg-[#000000a8] flex justify-center items-center">
                        <div className=" w-[342px] h-[200px] flex flex-col justify-center items-center bg-[#fff] rounded-[10px]">
                            <img src={ load } className=" w-16" alt="" />
                            <p className=" font-Afacad text-xl text-center mt-6 font-semibold">Checking for linked devices</p>
                            <p className=" font-Afacad text-center text-sm text-[#000000CC] font-normal">it should take less than a minute. </p>
                        </div>
                    </div>}

                    {/* Limit Reached prompt */}
                    { limitReached && <div className=" fixed w-full h-full top-0 left-0 bg-[#000000a8] flex justify-center items-center">
                        <div className=" w-[342px] h-[200px] flex flex-col justify-center items-center bg-[#fff] rounded-[10px]">
                            <img src={ shape } className=" w-[49px]" alt="" />
                            <p className=" font-Afacad text-xl text-center mt-6 font-semibold">Linked device limit reached</p>
                            <p className=" font-Afacad text-center text-sm text-[#000000CC] font-normal">Remove a device to continue </p>
                            <p className=" font-Afacad text-center text-base mt-3 text-[#000000] font-medium">Click here to <span className=" text-[#78C257] cursor-pointer " onClick={handleUnlink}>unlink</span> a device</p>
                        </div>
                    </div>}

                    {/*Linked Device prompt */}
                    { linkedDevices && <div className=" fixed w-full h-full top-0 left-0 bg-[#000000a8] flex justify-center items-center">
                        <div className=" w-[342px] flex flex-col justify-center items-center bg-[#fff] rounded-[10px] p-6">
                            <img src={ lin } className=" w-[49px]" alt="" />
                            <p className=" font-Afacad text-xl text-center font-semibold">Linked device</p>
                            {devices.map((device, index) => (
                                <div key={index} className=" w-full h-[45px] rounded-[5px] border border-[#EAEBF080] mb-3 flex flex-row justify-between items-center p-[18px]">
                                    <p className=" text-base font-Afacad text-[#000000B2] font-normal">{device.device}</p>
                                    <img src={ bin } alt="" />
                                </div>
                            ))}
                            <p className=" font-Afacad text-center mt-2 text-sm text-[#000000CC] font-normal">Click continue to confirm removal of device</p>
                            <button className=' w-full bg-[#78C257] rounded-[36px] h-[48px] mt-[12px] font-medium text-black text-center font-Afacad text-base' onClick={handleContinue}>Continue</button>
                        </div>
                    </div>}

                    {/*Replace Device prompt */}
                    { replace && <div className=" fixed w-full h-full top-0 left-0 bg-[#000000a8] flex justify-center items-center">
                        <div className=" w-[342px] h-[290px] flex flex-col justify-center items-center bg-[#fff] rounded-[10px] p-6">
                            <img src={ shape } className=" w-[49px]" alt="" />
                            <p className=" font-Afacad text-xl text-center mt-6 font-semibold">Do you want to replace MacBook Pro with your Hp EliteBook</p>
                            <p className=" font-Afacad text-center mt-2 text-sm text-[#000000CC] font-normal">Remove a device to continue</p>
                            <Link className=" w-full" to='/Home'><button className=' w-full bg-[#78C257] rounded-[36px] h-[48px] mt-[12px] font-medium text-black text-center font-Afacad text-base'>Continue</button></Link>
                        </div>
                    </div>}

                    {/* sign in page */}

                    <img src={ logo } alt="" />
                    <p className=' text-[#78C257] font-Afacad font-medium text-[32px] leading-[42px] mt-3 text-center'>Login</p>
                    <p className=' font-Afacad text-lg font-normal mt-3 text-black'>Elevate your communication</p>

                    <div className=' mt-[55px] flex flex-col w-full'>

                        <label htmlFor="Email Address" className=' flex flex-col w-full font-Afacad font-medium text-xl'>
                            Email Address
                            <input type="text" className=' border-[0.74px] border-[#EAEBF0] w-full h-[48px] text-[#272D37] p-2.5 rounded-[11px] font-Afacad text-base mt-1' />
                        </label>

                        <label htmlFor="Password" className=' flex flex-col w-full font-Afacad font-medium text-xl mt-3'>
                            Password
                            <input type="text" className=' border-[0.74px] border-[#EAEBF0] w-full h-[48px] text-[#272D37] p-2.5 rounded-[11px] font-Afacad text-base mt-1' />
                        </label>

                        <div className=" flex justify-between mt-3">
                            <label className="flex items-center">
                                <input
                                type="checkbox"
                                className={`form-checkbox h-4 w-4 text-blue-600`}
                                />
                                <span className="ml-2 text-xs text-[#000] font-Afacad font-medium">
                                Remember me
                                </span>
                            </label>
                            <p className=" text-[#78C257] text-xs font-medium font-Afacad">Forgot Password</p>
                        </div>
                        
                        <button  onClick={handleStart} className=' w-full bg-[#78C257] rounded-[36px] h-[48px] mt-[60px] text-black text-center font-Afacad text-base'>Continue</button>
                        <Link to='/'><p className=' mt-[19px] font-Afacad font-medium text-base text-center'>Dont have an Account? <span className=' text-[#78C257]'>Register</span></p></Link>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Login;