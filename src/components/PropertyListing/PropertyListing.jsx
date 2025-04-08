import React, { useEffect, useState } from 'react';
import PropertyCard from '../PropertyCard';
import './PropertyListing.scss';

const PropertyListing = () => {
    const apiUrl = 'http://localhost:3000/api/properties';
    const [properties, setProperties] = useState([])

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const response = await fetch(apiUrl);
                const jsonData = await response.json();
                setProperties(jsonData);
              } catch (error) {
                console.log(error, "error");
              }
        }

        fetchProperties();

        console.log(properties);
    }, [])
    

    return (
        <ul className="PropertyListing">
            {properties.map((property, index) => (
                <li key={index}>
                    <PropertyCard {...property} />
                </li>
            ))}
        </ul>
    );
};

export default PropertyListing;
