import React from "react";
import { Link } from "react-router-dom";

const UserItem = (props) => {
    return (
        <li
            className="bg-teal-600 w-auto justify-center flex font-semibold p-2 rounded-lg mt-5 border transition-shadow text-[#ffd900]
        cursor-pointer duration-500 hover:shadow-[#ffd900] hover:shadow-lg capitalize "
        >
            <div className="">
                <Link to={`/${props.id}/places`} className="flex gap-5 items-center">
                    <div className="">
                        <img
                            src={props.image}
                            alt={props.name}
                            className="rounded-full w-16 h-16 object-cover"
                        />
                    </div>
                    <div>
                        <h2>{props.name}</h2>
                        <h3>
                            {props.placeCount} {props.placeCount === 1 ? "place" : "places"}
                        </h3>
                    </div>
                </Link>
            </div>
        </li>
    );
};

export default UserItem;
