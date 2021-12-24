import React from "react";
import {Avatar, Button} from "@mui/material";
import '../../styles/components/Main/Tweet.css';
import CropOriginalRoundedIcon from '@mui/icons-material/CropOriginalRounded';
import GifOutlinedIcon from '@mui/icons-material/GifOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';

function Tweet(){
    return(
        <div className="tweet">
            <form>
                <div className="tweet__input">
                    <Avatar src="https://i.ytimg.com/vi/IuBbnJr2RTY/maxresdefault.jpg" />
                    <input placeholder="Что происходит?" type="text"/>
                </div>
                <div className="tweet__icons">
                    <CropOriginalRoundedIcon className="tweet__icon"/>
                    <GifOutlinedIcon className="tweet__icon"/>
                    <InsertChartOutlinedIcon className="tweet__icon"/>
                    <EmojiEmotionsOutlinedIcon className="tweet__icon"/>
                    <DateRangeOutlinedIcon className="tweet__icon"/>

                <Button  className="tweet__button">Твитнуть</Button>
                    </div>
            </form>
        </div>
    )
}

export default Tweet;