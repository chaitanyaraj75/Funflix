import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Navigation() {
    const navigate = useNavigate();
    
    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            const query = e.target.value.trim();
            if (query) {
                navigate(`/search/${query}`);
            }
        }
    };

    const [searchQuery, setSearchQuery] = useState("");

    function handleInputChange(e) {
        setSearchQuery(e.target.value);
        console.log(searchQuery);
    }

    function searchbutton(){
        if(searchQuery.trim() !== "") {
            navigate(`/search/${searchQuery}`);
        }
    }

    return (
        <nav className="z-10 flex bg-transparent w-full absolute justify-between items-center p-4">
            <p onClick={() => {
                window.location.href = "/";
            }} className="cursor-pointer font-godber text-[#9ac614] text-2xl">FunFlix</p>
            <div className="flex space-x-1 ml-4 font-baloo2">
                <input value={searchQuery} onChange={handleInputChange} onKeyDown={handleSearch} className="" type="text" placeholder="Search" />
                <button onClick={searchbutton} className="cursor-pointer">Search</button>
            </div>
        </nav>
    )
}

export default Navigation;