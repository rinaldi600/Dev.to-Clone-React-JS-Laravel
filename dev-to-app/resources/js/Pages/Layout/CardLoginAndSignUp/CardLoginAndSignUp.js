import React, {Fragment} from "react";
import ButtonLogInSignUp from "@/Pages/Layout/Button-LogIn-And-SignUp/ButtonLogInSignUp";

function CardLoginAndSignUp() {
    return (
        <Fragment>
            <h1 className={'font-bold text-lg leading-normal'}>
                DEV Community 👩‍💻👨‍💻 is a community of 994,134 amazing developers
            </h1>
            <p className={'text-[#575757] text-base mt-3'}>
                We're a place where coders share, stay up-to-date and grow their careers.
            </p>
            <div className={'mt-3'}>
                <ButtonLogInSignUp/>
            </div>
        </Fragment>
    )
}

export default CardLoginAndSignUp;
