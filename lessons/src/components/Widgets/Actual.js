import React from "react";
import "../../styles/components/Widgets/Actual.css"
import ActualDetails from "./ActualDetails"
import SettingsIcon from '@mui/icons-material/Settings';
import Search from "./Search";

function Actual() {
    return(
        <div className="actual">
            <Search/>

            <div className="actual__recommend">
                <div className="actual__header">
                    <h2> Вам может понравится </h2>
                    <SettingsIcon className="actual__settings"/>
                </div>

                <ActualDetails tag="КоронаСпасетМир!" trend="в России" views="1,343,433 Твитов"/>
                <ActualDetails tag="ХочуСпать" trend="в России" views="1,343,853 Твитов"/>
                <ActualDetails tag="СвадьбаКиркорова" trend="в России" views="9,455,433 Твитов"/>

                <p> Показать еще</p>

            </div>
        </div>
    )
}

export default Actual;