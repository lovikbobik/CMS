import React from "react";
import "../../styles/components/Widgets/Search.css"

import SearchIcon from "@material-ui/icons/Search";


function Search() {
    return(
        <div className="search">
            <div className="search__input">
                <SearchIcon className="search__icon"/>
                <input placeholder="Поиск в Твиттере" type="text"/>
            </div>
        </div>
    )
}

export default Search;