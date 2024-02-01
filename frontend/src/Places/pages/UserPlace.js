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
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.617541157582!2d-73.98823932393645!3d40.74844047138808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sin!4v1706720230941!5m2!1sen!2sin",
        creator: "u1"
    },
    {
        id: "u2",
        title: "Emipre State Building",
        description:"One of the most skyscraper in world and beautiful tower.",
        imageUrl: "https://images.pexels.com/photos/2190283/pexels-photo-2190283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1.jpg",
        address: "20 W 34th St., New York, NY 10001, United States",
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.617541157582!2d-73.98823932393645!3d40.74844047138808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sin!4v1706720230941!5m2!1sen!2sin",
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