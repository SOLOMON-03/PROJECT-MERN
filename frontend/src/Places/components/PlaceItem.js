import {
    faEarthAmericas,
    faFeatherPointed,
    faMapLocation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const PlaceItem = (props) => {
    return (
        <li className="w-[330px] bg-teal-700 text-white rounded-lg">
            <div className="hover:shadow-[0px_6px_20px_-1px_#ffd900] ">
                <div className="overflow-hidden rounded-t-lg">
                    <img
                        src={props.image}
                        alt={props.title}
                        className=" hover:scale-105 transition-scale duration-500"
                    />
                </div>
                <div className="p-3 border-b border-slate-400">
                    <div className="flex gap-2 items-center pb-2">
                        <FontAwesomeIcon icon={faEarthAmericas} />
                        <h2>{props.title}</h2>
                    </div>
                    <div className="flex gap-2 items-center pb-2">
                        <FontAwesomeIcon icon={faMapLocation} />
                        <h3 className="truncate">{props.address}</h3>
                    </div>
                    <div className="flex gap-2 place-items-baseline">
                        <FontAwesomeIcon icon={faFeatherPointed} />
                        <p className="line-clamp-2">{props.description}</p>
                    </div>
                </div>
                <div className="flex gap-2 p-3 justify-between font-semibold">
                    <button className="p-2 rounded-lg w-24 bg-teal-600 hover:bg-teal-900 duration-500 hover:text-white ">
                        View Map
                    </button>
                    <button className="p-2 rounded-lg w-24 bg-teal-600 hover:bg-green-800 duration-500 hover:text-white ">
                        Edit
                    </button>
                    <button className="p-2 rounded-lg w-24 bg-teal-600 hover:bg-red-800 duration-500 hover:text-white ">
                        Delete
                    </button>
                </div>
            </div>
        </li>
    );
};

export default PlaceItem;
