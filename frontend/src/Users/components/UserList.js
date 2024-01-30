import React from "react";
import UserItem from "./UserItem";
const UserList = (props) => {
    if (props.items.length === 0) {
        return (
            <div>
                <h2 className="text-center mt-10 text-[#ffd900] text-3xl">
                    No Users Found!
                </h2>
            </div>
        );
    }
    return (
        <div className="flex justify-center">
            <ul className=" flex flex-col items-center">
                {props.items.map((user) => {
                    return (
                        <UserItem
                            key={user.id}
                            id={user.id}
                            image={user.image}
                            name={user.name}
                            placeCount={user.places}
                        />
                    );
                })}
            </ul>
        </div>
    );
};

export default UserList;
