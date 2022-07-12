import SightingCard from "./SightingCard";
const SightingsGrid = ({sightings, removeSighting}) => {
    const sightingsList = sightings.map((sighting) =>{
        return <SightingCard sighting={sighting} key={sighting._id} removeSighting={removeSighting} />
    });
    
    return (
        <div className="sighting-list">
            {sightingsList}
        </div>
    );

}

export default SightingsGrid;