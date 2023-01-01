import React from "react";
import {ReactComponent as Eth} from "../images/icon-ethereum.svg";
import {ReactComponent as Clock} from "../images/icon-clock.svg";
const display_image = require("../images/image-equilibrium.jpg");
const profile_image = require("../images/image-avatar.png");
const Card = ({name, days, eth_amt }) => {
    return (
        <div className="w-60 sm:w-80 bg-blue-900 rounded-md sm:rounded-xl p-4 m-2">
            <img className="object-cover w-60  sm:w-80 rounded-xl" src={display_image} alt="Display" />
            <div className="border-b-2 border-gray-500 p-2">
                <div className="text-lg text-white underline">Equilibrium #3429</div>
                <div className="text-sm sm:text-md text-gray-500 ml-1 my-1 sm:ml-2 sm:my-2">Our Equilibrium collection promotes balance and calm.</div>
                <div className="flex justify-between">
                    <div className=" flex items-center justify-center">
                        <Eth />
                        <div className ="text-sm sm:text-md text-emerald-400 ml-1">{eth_amt} ETH</div>
                    </div>
                    <div className=" flex items-center justify-center ">
                        <Clock />
                        <div className="text-sm sm:text-md text-indigo-100 m-1"> {days} days left </div>
                    </div>
                    
                </div>
            </div>
            <div className="flex items-center m-1">
                <img className="object-cover h-6 w-6 rounded-xl border-2 border-white" src={profile_image} alt="Profile"/>
                <div className="text-sm sm:text-base text-gray-400 mx-2">Creation By</div>
                <div className="text-sm sm:text-base text-white mr-2">{name}</div>
            </div>
        </div>
    )
}

export default Card;