import ButtonLogInSignUp from "@/Pages/Layout/Button-LogIn-And-SignUp/ButtonLogInSignUp";
import Category from "@/Pages/Layout/Category/Category";

function MobileNavbar() {
    return (
        <div className={"absolute font-['Segoe_UI'] inset-0 bg-[#848484]/75 md:hidden overflow-hidden"}>
            <div className={'max-w-[282.2px] bg-white h-full overflow-y-scroll'}>
                <div className={'min-h-[56px] p-2 flex items-center justify-between'}>
                    <h1 className={'font-bold text-lg'}>DEV Community 👩‍💻👨‍💻</h1>
                    <div className={'w-[40px] h-[40px] hover:bg-[#EBECFC] flex rounded-lg cursor-pointer justify-center items-center'}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" className="w-[24px] hover:text-[#2F3AB2] h-[24px]">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </div>
                </div>
                <div className={'min-h-[290px] flex items-center justify-center'}>
                    <div className={'w-[267.2px] min-h-[287.1px] bg-[#FAFAFA] p-2 rounded-lg shadow-[0_1px_4px_rgba(0,0,0,0.16)]'}>
                        <h1 className={'font-bold text-lg leading-normal'}>
                            DEV Community 👩‍💻👨‍💻 is a community of 994,134 amazing developers
                        </h1>
                        <p className={'text-[#575757] text-base mt-3'}>
                            We're a place where coders share, stay up-to-date and grow their careers.
                        </p>
                        <div className={'mt-3'}>
                            <ButtonLogInSignUp/>
                        </div>
                    </div>
                </div>
                <div>
                    <Category/>
                </div>
            </div>
        </div>
    )
}

export default MobileNavbar;
