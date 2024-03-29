import {
    faEarthAmericas,
    faFeatherPointed,
    faMapLocation,
    faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./PlaceItem.css";
import Button from "../../UIComponent/Button";

const PlaceItem = (props) => {
    const [showMap, setShowMap] = useState(false);
    return (
        <div>
            <li className={`w-[330px] bg-teal-800 text-white rounded-lg `}>
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
                    <div className="flex justify-between items-center text-sm p-2">
                        <Button inverse onClick={() => setShowMap(!showMap)}>View Map</Button>
                        <Button to={`/places/${props.id}`}>Edit</Button>
                        <Button danger>Delete</Button>
                    </div>
                </div>
            </li>
            
            {showMap && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div
                        className={`bg-white text-black w-[600px] h-[400px] flex justify-between animate 
                    max-sm:w-[370px] max-sm:h-[300px] rounded-md`}
                    >
                        <div>
                            <iframe 
                                src={props.coordinates}
                                width="600"
                                height="400"
                                loading="eager"
                                referrerpolicy="no-referrer-when-downgrade"
                                className="frame rounded-md"
                            ></iframe>
                        </div>
                        <div className="text-black absolute p-2 right-0 ">
                            <FontAwesomeIcon
                                icon={showMap ? faTimes : ""}
                                size="2xl"
                                onClick={() => setShowMap(!showMap)}
                                className="hover:text-red-700"
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PlaceItem;
