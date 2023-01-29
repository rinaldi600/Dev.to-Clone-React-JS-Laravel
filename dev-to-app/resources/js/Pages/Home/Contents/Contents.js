import React, {useEffect, useState} from "react";
import {Link} from "@inertiajs/inertia-react";
import FirstContent from "@/Pages/Home/Contents/FirstContent/FirstContent";
import NextContent from "@/Pages/Home/Contents/NextContent/NextContent";
import axios from "axios";

function Contents() {
    const [randomPeople, setRandomPeople] = useState([]);

    useEffect(() => {
        axios.get('https://randomuser.me/api/?results=10&nat=AU')
            .then((success) => {
                setRandomPeople(success.data.results);
            })
            .catch((error) => {
                console.log(error)
            })
    },[]);

    return (
        <div>
            <div className={'min-h-[43px] text-lg sm:justify-center flex flex-wrap items-center gap-2'}>
                <Link className={'hover:text-[#3B49DF] p-2 text-[#575757] hover:bg-[#FFFFFF] rounded-lg h-[43px]'} href={'/'}>
                    Relevant
                </Link>
                <Link className={'hover:text-[#3B49DF] p-2 text-[#575757] hover:bg-[#FFFFFF] rounded-lg h-[43px]'} href={'/'}>
                    Latest
                </Link>
                <Link className={'hover:text-[#3B49DF] p-2 text-[#575757] hover:bg-[#FFFFFF] rounded-lg h-[43px]'} href={'/'}>
                    Top
                </Link>
            </div>

            <div className={'mt-2 w-full p-2'}>
                <FirstContent detailUserCreate={randomPeople.length >= 1 ? randomPeople[0] : {}} text={'20 Killer JavaScript One-Liners That’ll Save You Hours of Coding 🤯🔥'}/>
                {
                    randomPeople.length >= 1 ?
                        randomPeople.slice(1, randomPeople.length-1).map((people) => (
                            <NextContent detailUserCreate={people} text={'Defect life cycle in API testing ⚙'}/>
                        ))
                        : <h1>Loading</h1>
                }
            </div>

        </div>
    )
}

export default Contents
