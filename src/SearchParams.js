import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";

const SearchParams = () => {
  // this is a hook
  // a hook never goes into if/for loop. (basically any unpredictable logic)
  const [location, setLocation] = useState("Seattle, WA");
  // const [animal, setAnimal] = useState("Dog");
  // const [breed, setBreed] = useState("breed");
  const [breeds, setBreeds] = useState([]);

  const [animal, AnimalDropdown] = useDropdown("Animal", "Dog", ANIMALS);
  const [breed, BreedDropdown] = useDropdown("Breed", "", breeds);

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">Location</label>
        <input
          id="location"
          value={location}
          placeholder="Location"
          onChange={e => setLocation(e.target.value)}
        />
        <button>Submit</button>
        {/* <label htmlFor="animal">Animal</label>
        <select
          id="animal"
          value={animal}
          onChange={e => setAnimal(e.target.value)} // causes accessibility issue because tab does not work in some browsers.
          onBlur={e => setAnimal(e.target.value)} // fixes accessibility issue.
        >
          <option>All</option>
          {ANIMALS.map(animal => {
            return (
              <option key={animal} value={animal}>
                {animal}
              </option>
            );
          })}
        </select> */}
        <AnimalDropdown />
        {/* <label htmlFor="breed">Breed</label>
        <select
          id="breed"
          value={breed}
          onChange={e => setBreed(e.target.value)}
          onBlur={e => setBreed(e.target.value)}
          disabled={breeds.length === 0}
        >
          <option value="All">All</option>
          {breeds.map(breedString => (
            <option value={breedString} key={breedString}>
              {breedString}
            </option>
          ))}
        </select> */}
        <BreedDropdown />
      </form>
    </div>
  );
};

export default SearchParams;
