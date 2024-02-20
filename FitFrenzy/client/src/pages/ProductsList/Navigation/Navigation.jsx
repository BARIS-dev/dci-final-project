import { useState } from "react";
import "./Navigation.css";

function Navigation() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    
      console.log("Search submitted:", searchQuery);
    
  };

  return (
    <nav>
      <div className="nav-container">
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            className="search-input"
            placeholder="Enter your search"
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Navigation;


/*import "./Navigation.css"

function Navigation() {
  return <nav>
        <div className="nav-container">
        <input 
        type="text" 
        className="search-input"
        placeholder="Enter your search"
        />





    </div>
 </nav>
    
  
}

export default Navigation;*/