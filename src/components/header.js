import folder from './assets/Folder.svg';
import more from './assets/More_Horizontal.svg';
import global from './assets/global.svg';
import home from './assets/home.svg';
import sett from './assets/setting.svg';
import cmd from './assets/cmdList.svg';
import about from './assets/about.svg';
import help from './assets/help.svg';
import { useState } from 'react';
import close from './assets/close.svg';
import { Link } from 'react-router-dom';

const Header = () => {

    const [menuBar, setMenubar] = useState(false);

    const toggleMenuBar = () => {
        setMenubar(!menuBar);
    };

    return ( 
        <>
        <div className=" w-full h-[84px] px-6 border border-b border-[#EAEBF0] flex  justify-between flex-row items-center">
            <div className=" flex flex-row items-center space-x-4">
                <span className=" w-[48px] h-[48px] bg-[#716f70] rounded-[50%]"></span>
                <p className=" font-Afacad text-xl font-semibold">Veek</p>
            </div>

            <div className=" w-[118px] h-[36px] bg-[#78C257] rounded-[50px] flex flex-row p-2">
                <img src={ global } alt="" />
                <select name="" className=' bg-transparent w-full h-full text-white font-Afacad text-base' id="">
                    <option value="">English</option>
                </select>
            </div>

            <div className=" flex flex-row items-center space-x-20">
                <img src={ folder } alt="" />

                {menuBar ? (
                    <img src={ close } alt="" onClick={toggleMenuBar} />
                ) : (
                    <img src={ more } alt="" onClick={toggleMenuBar} />
                )}
                
            </div>
            
        </div>

        {/* menubar */}

        { menuBar && <div className=' w-[300px] h-[312px] bg-[#fff] absolute top-[70px] rounded-[7.5px] border-[1.5px] border-[#DAE0E6] shadow-sm right-8 z-10'>
            <Link to='/home' className=' w-full'><button className=' flex flex-row w-full items-center px-6 py-4 space-x-3'>
                <img src={ home } alt="" />
                <p className=' font-Afacad text-xl font-normal'>Home</p>
            </button></Link>
            <Link to='/setting' className=' w-full'><button className=' flex flex-row w-full items-center px-6 py-4 space-x-3'>
                <img src={ sett } alt="" />
                <p className=' font-Afacad text-xl font-normal'>Settings</p>
            </button></Link>
            <Link to='/cmdlist' className=' w-full'><button className=' flex flex-row w-full items-center px-6 py-4 space-x-3'>
                <img src={ cmd } alt="" />
                <p className=' font-Afacad text-xl font-normal'>Command List</p>
            </button></Link>
            <Link className=' w-full'><button className=' flex flex-row w-full items-center px-6 py-4 space-x-3'>
                <img src={ about } alt="" />
                <p className=' font-Afacad text-xl font-normal'>About</p>
            </button></Link>
            <Link to='/help' className=' w-full'><button className=' flex flex-row w-full items-center px-6 py-4 space-x-3'>
                <img src={ help } alt="" />
                <p className=' font-Afacad text-xl font-normal'>Help</p>
            </button></Link>
        </div>}
        </>
     );
}
 
export default Header;