import Header from "../components/header";

const Notification = () => {
    return ( 
        <>
        <div className=" w-full h-full flex justify-center items-center">
            <div className="w-[800px] bg-[#fff] flex flex-col items-center justify-center relative">
                <Header/>
                <div className="w-full bg-white p-6 relative  h-[700px]">
                    <p className=" font-Afacad font-semibold text-2xl mt-2  text-center">Microphone Devices</p>
                    <div className=" w-full border border-[#EAEBF0] rounded-[5px] mt-6 p-6">

                       

                        
                        <button className=" w-full flex flex-row justify-between ">
                            <p className=" font-Afacad text-base font-normal">Allow bubble notification</p>
                            {/* <!-- Rounded switch --> */}
                            <label class="switch">
                                <input type="checkbox"/>
                                <span class="slider round"></span>
                            </label>
                        </button>
                  

                    </div>
                    <div className="  w-full px-6 absolute left-0 bottom-8">
                    
                        <button className=" w-full h-[48px] rounded-[36px] bg-[#78C257] text-center font-Afacad">
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Notification;