import logo from './assets/logo.svg';
import { Link } from 'react-router-dom';

const Desk = () => {
    return ( 
        <>
            <div className=" w-full h-full flex justify-center items-center">
                <div className=" w-[800px] p-12 bg-[#fff] flex flex-col items-center justify-center">
                    <img src={ logo } alt="" />
                    <p className=' text-[#78C257] font-Afacad font-medium text-[32px] leading-[42px] mt-3 text-center'>Sign up</p>
                    <p className=' font-Afacad text-lg font-normal mt-3 text-black'>Elevate your communication</p>

                    <div className=' mt-[55px] flex flex-col w-full'>

                        <label htmlFor="Name" className=' flex flex-col w-full font-Afacad font-medium text-xl'>
                            Full Name
                            <input type="text" className=' border-[0.74px] border-[#EAEBF0] w-full h-[48px] text-[#272D37] p-2.5 rounded-[11px] font-Afacad text-base mt-1' />
                        </label>

                        <label htmlFor="Specialty" className=' flex flex-col w-full font-Afacad font-medium text-xl mt-3'>
                            Specialty
                            <select className=' border-[0.74px] border-[#EAEBF0] w-full h-[48px] text-[#272D37] p-2.5 rounded-[11px] font-Afacad text-base mt-1'>
                                <option value="">Choose area of specialty</option>
                            </select>
                        </label>

                        <label htmlFor="Email Address" className=' flex flex-col w-full font-Afacad font-medium text-xl mt-3'>
                            Email Address
                            <input type="text" className=' border-[0.74px] border-[#EAEBF0] w-full h-[48px] text-[#272D37] p-2.5 rounded-[11px] font-Afacad text-base mt-1' />
                        </label>

                        <label htmlFor="Password" className=' flex flex-col w-full font-Afacad font-medium text-xl mt-3'>
                            Password
                            <input type="text" className=' border-[0.74px] border-[#EAEBF0] w-full h-[48px] text-[#272D37] p-2.5 rounded-[11px] font-Afacad text-base mt-1' />
                        </label>
                        
                        <button className=' w-full bg-[#78C257] rounded-[36px] h-[48px] mt-[21px] text-black text-center font-Afacad text-base'>Continue</button>
                        <Link to='/signin'><p className=' mt-[19px] font-Afacad font-medium text-base text-center'>Already Have an Account <span className=' text-[#78C257]'>Log in</span></p></Link>
                    </div>
                </div>
            </div>
        </>
     );
} 
 
export default Desk;