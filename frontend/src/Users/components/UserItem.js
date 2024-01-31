import React from "react";
import { Link } from "react-router-dom";

const UserItem = (props) => {
    return (
        <li
            className="bg-teal-600 w-60 justify-center flex font-semibold p-2 rounded-md mt-5 transition-shadow text-[#ffd900]
        cursor-pointer duration-500 hover:shadow-[0px_6px_20px_-1px_#ffd900] capitalize max-sm:w-44"
        >
            <div className="">
                <Link to={`/${props.id}/places`} className="flex gap-4 items-center text-lg max-sm:text-sm">
                    <div className="">
                        <img
                            src={props.image}
                            alt={props.name}
                            className="rounded-full w-16 h-16 object-cover max-sm:w-12 max-sm:h-12"
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
