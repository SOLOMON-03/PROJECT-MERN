import React from 'react'
import PlaceList from '../components/PlaceList'
import { useParams } from 'react-router-dom'
const DUMMY_PLACE = [
    {
        id: "u1",
        title: "Emipre State Building",
        description:"One of the most skyscraper in world and beautiful tower.",
        imageUrl: "https://images.pexels.com/photos/2190283/pexels-photo-2190283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1.jpg",
        address: "20 W 34th St., New York, NY 10001, United States",
        location:{
            lat:40.7484405,
            lng:-73.9882393
        },
        creator: "u1"
    },
    {
        id: "u2",
        title: "Emipre State Building",
        description:"One of the most skyscraper in world and beautiful tower.",
        imageUrl: "https://images.pexels.com/photos/2190283/pexels-photo-2190283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1.jpg",
        address: "20 W 34th St., New York, NY 10001, United States",
        location:{
            lat:40.7484405,
            lng:-73.9882393
        },
        creator: "u2"
    }
]

const UserPlace = () => {
    const userId = useParams().userId;
    const loadingPlaces = DUMMY_PLACE.filter(place=> place.creator === userId);
    return (
        <PlaceList items={loadingPlaces}/>
    )
}

export default UserPlace