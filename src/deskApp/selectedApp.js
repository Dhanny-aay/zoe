import Header from "../components/header";


const SelectedApp = () => {
    return ( 
        <>
        <div className=" w-full h-full flex justify-center items-center">
            <div className="w-[800px] bg-[#fff] flex flex-col items-center justify-center relative">
                <Header/>
                <div className="w-full bg-white p-6 relative  h-[700px]">
                    <p className=" font-Afacad font-semibold text-2xl mt-2  text-center">Selected Apps</p>
                    <div className=" w-full border border-[#EAEBF0] rounded-[5px] mt-6 p-6">

                        <button className=" w-full flex flex-row justify-between pb-6 border-b border-[#EAEBF0]">
                            <p className=" font-Afacad text-base font-normal">Chrome</p>
                            <div class="round">
                                <input type="checkbox" id="checkbox1" />
                                <label for="checkbox1"></label>
                            </div>
                        </button>

                        
                        <button className=" w-full flex flex-row justify-between py-6 border-b border-[#EAEBF0]">
                            <p className=" font-Afacad text-base font-normal">Zoom</p>
                            <div class="round">
                                <input type="checkbox" id="checkbox2" />
                                <label for="checkbox2"></label>
                            </div>
                        </button>

                        
                        <button className=" w-full flex flex-row justify-between py-6 border-b border-[#EAEBF0]">
                            <p className=" font-Afacad text-base font-normal">Firefox</p>
                            <div class="round">
                                <input type="checkbox" id="checkbox3" />
                                <label for="checkbox3"></label>
                            </div>
                        </button>

                        
                        <button className=" w-full flex flex-row justify-between py-6 border-b border-[#EAEBF0]">
                            <p className=" font-Afacad text-base font-normal">Youtube</p>
                            <div class="round">
                                <input type="checkbox" id="checkbox4" />
                                <label for="checkbox4"></label>
                            </div>
                        </button>

                       
                        <button className=" w-full flex flex-row justify-between pt-6">
                            <p className=" font-Afacad text-base font-normal">Microsoft Teams</p>
                            <div class="round">
                                <input type="checkbox" id="checkbox5" />
                                <label for="checkbox5"></label>
                            </div>
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
 
export default SelectedApp;