import folder from './assets/Folder.svg';
import more from './assets/More_Horizontal.svg';
import global from './assets/global.svg';


const Header = () => {
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

                <img src={ more } alt="" />
            </div>
            
        </div>
        </>
     );
}
 
export default Header;