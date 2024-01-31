import React from "react";
import UserList from "../components/UserList";
export default function home() {
    const USERS = [
        {
            id: "u1",
            name: "Max Belgum",
            image:
                "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1.jpg",
            places: 3,
        },
        {
            id: "u2",
            name: "Maria Belgum",
            image:
                "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1.jpg",
            places: 4,
        },
    ];

    return <UserList items={USERS} />;
}
