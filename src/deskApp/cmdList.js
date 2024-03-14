import Header from "../components/header";

const CommandList = () => {


  
    return ( 
        <>
        <div className=" w-full h-full flex justify-center items-center">
            <div className="w-[800px] bg-[#fff] flex flex-col items-center justify-center relative">
                <Header/>
                <div className="w-full bg-white p-6 relative  h-[750px]">
                    <p className=" font-Afacad font-semibold text-2xl mt-2  text-center">Help</p>
                    <div className=" w-full border border-[#EAEBF0] rounded-[5px] mt-6">

                        <table className="table-auto w-full">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2 w-1/2 font-Afacad font-medium text-[#00000080]  border-[#eaebf0] border-r">Action</th>
                                    <th className="px-4 py-2 w-1/2 font-Afacad font-medium text-[#00000080] ">Command</th>
                                </tr>
                            </thead>
                            <tbody className=" text-center font-Afacad font-normal text-sm">
                                <tr className="">
                                    <td className="border px-4 py-2">Close the Dictation Box</td>
                                    <td className="border px-4 py-2">Closes the Dictation Box</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">Close Zoe</td>
                                    <td className="border px-4 py-2">Closes the Application</td>
                                </tr>
                                <tr className="">
                                    <td className="border px-4 py-2">Discard Text</td>
                                    <td className="border px-4 py-2">Discards the text in the dictation box</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">Launch help<br/>Open help<br/>Show help</td>
                                    <td className="border px-4 py-2">Opens the help Section</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">Open Dictation Box<br/>Show Dictation Box</td>
                                    <td className="border px-4 py-2">Opens the Dictation Box</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">Open Zoe<br/>Show Zoe</td>
                                    <td className="border px-4 py-2">Opens the application</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">Quit help<br/>Close help<br/>Hide help</td>
                                    <td className="border px-4 py-2">Closes the Zoe help</td>
                                </tr>
                                <tr className="">
                                    <td className="border px-4 py-2">Recall text</td>
                                    <td className="border px-4 py-2">Recalls the text in your text editor to the dictation box</td>
                                </tr>
                                <tr className="">
                                    <td className="border px-4 py-2">Transfer text<br/>Text transfer</td>
                                    <td className="border px-4 py-2">Transfers the text in the dictation box to your text editor</td>
                                </tr>
                                <tr className="">
                                    <td className="border px-4 py-2">Go to Sleep</td>
                                    <td className="border px-4 py-2">Switches the microphone to Standby mode</td>
                                </tr>
                                <tr className="">
                                    <td className="border px-4 py-2">Microphone off</td>
                                    <td className="border px-4 py-2">Switches the Microphone off</td>
                                </tr>
                                {/* Add more rows as needed */}
                            </tbody>
                        </table>

                    </div>
                    
                </div>
            </div>
        </div>
        </>
     );
}
 
export default CommandList;