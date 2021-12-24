import React from 'react';
import FollowWidgetDetails from "./FollowWidgetDetails";
import followElements from "../../Arrays/followElements";
import "../../styles/components/Widgets/Widgets.css"

export default function FollowWidget() {
    return (
        <div className={"widget__container"}>
            <h2>За кем следовать</h2>
            <div className={"widget__content"}>
                {followElements.map((item, index) => {
                    if (item.verified === true) {
                        return (
                            <FollowWidgetDetails name={item.name}
                                                 verified={item.verified}
                                                 username={item.username}
                                                 avatar={item.avatar}
                                                 key={index}
                            />
                        )
                    }
                })}
            </div>
        </div>
    )
}