import Header from "../components/header";
import down from './assets/arrow-down.svg';

const Help = () => {
    return ( 
        <>
         <>
        <div className=" w-full h-full flex justify-center items-center">
            <div className="w-[800px] bg-[#fff] flex flex-col items-center justify-center relative">
                <Header/>
                <div className="w-full bg-white p-6 relative  h-[700px]">
                    <p className=" font-Afacad font-semibold text-2xl mt-2  text-center">Help</p>
                    <div className=" w-full border border-[#EAEBF0] rounded-[5px] mt-6 p-6">

                        <button className=" w-full flex flex-row justify-between pb-6 border-b border-[#EAEBF0]">
                            <p className=" font-Afacad text-base font-normal">How do I transcribe audio to text real time?</p>
                            <img src={down } alt="" />
                        </button>

                        
                        <button className=" w-full flex flex-row justify-between py-6 border-b border-[#EAEBF0]">
                            <p className=" font-Afacad text-base font-normal">What languages does your AI engine support?</p>
                            <img src={down } alt="" />
                        </button>
                       
                        <button className=" w-full flex flex-row justify-between pt-6">
                            <p className=" font-Afacad text-base font-normal">Is my data secure? How do you protect my privacy?</p>
                            <img src={down } alt="" />
                        </button>

                    </div>
                    
                </div>
            </div>
        </div>
        </>
        </>
     );
}
 
export default Help;