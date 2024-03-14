import Header from "../components/header";
import mic from './assets/microphone-2.svg';
import play from './assets/play.svg';
import stop from './assets/stop.svg';

const Home = () => {
    return ( 
        <>
        <div className="w-full h-full flex justify-center items-center">
            <div className="w-[800px] bg-[#fff] flex flex-col items-center justify-center relative">
                <Header/>
                <div className=" w-full bg-white p-6 relative">

                    <div className=" w-full border border-[#EAEBF0] rounded-[11px] flex flex-row">
                        <div className=" w-1/3 p-3 flex flex-col items-center justify-center border-r border-[#EAEBF0]">
                            <p className=" font-Afacad font-medium text-sm text-[#00000080]">Selected apps</p>
                            <p className=" font-Afacad font-medium text-2xl mt-6">8</p>
                        </div>
                        <div className=" w-1/3 p-3 flex flex-col items-center justify-center border-r border-[#EAEBF0]">
                            <p className=" font-Afacad font-medium text-sm text-[#00000080]">Active app</p>
                            <p className=" font-Afacad font-medium text-base mt-6">Chrome</p>
                        </div>
                        <div className=" w-1/3 p-3 flex flex-col items-center justify-center ">
                            <p className=" font-Afacad font-medium text-sm text-[#00000080]">Microphone devices</p>
                            <p className=" font-Afacad font-medium text-base mt-6">System microphone</p>
                        </div>
                    </div>

                    <div className=" flex w-full flex-col justify-center items-center mt-6">
                        <p className="font-Afacad text-lg font-medium">Source</p>
                        <img src={ mic } className=" mt-[21px]" alt="" />
                        <p className=" font-Afacad text-black text-base font-medium mt-1">Microphone</p>

                        <div className=" mt-3 w-full h-[262px] border-2 border-[#EAEBF0] rounded-[10px]"></div>

                        <div className=" mt-8 w-full flex flex-row justify-between items-center">
                            <button className=" w-[46%] h-[64px] space-x-3 bg-[#78C257] rounded-[12px] text-center justify-center items-center flex flex-row">
                                <img src={ stop } alt="" />
                                <p className=" text-2xl font-Afacad font-medium">Stop</p>
                            </button>
                            <button className=" w-[46%] h-[64px] space-x-3 bg-[#78C257] rounded-[12px] text-center justify-center items-center flex flex-row">
                                <img src={ play } alt="" />
                                <p className=" text-2xl font-Afacad font-medium">Start</p>
                            </button>
                        </div>

                        <p className=" mt-6 font-Afacad font-medium text-base underline">Learn how it works <span className=" text-[#78C257]">Here</span></p>
                    </div>

                </div>
            </div>
        </div>
        </>
     );
}
 
export default Home;