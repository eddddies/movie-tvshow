import {tvShowApi} from "../../api";

import TVShowPresenter from "./TVShowPresenter";
import React, {useState, useEffect} from "react";


const TVShowContainer = () => {
    const [tvData, setTVData] = useState({
        topRated : null,
        airingToday : null,
        popular : null,
        loading : true,
        error : null
    })

    useEffect(()=>{
        getTVData()
    }, [])

const getTVData = async () => {
    try{
    const {data : {results : topRated}} = await tvShowApi.topRated();
    const {data : {results : airingToday}} = await tvShowApi.airingToday();
    const {data : {results : popular}} = await tvShowApi.popular();


        setTVData({
            ...tvData,
            topRated : topRated,
            airingToday : airingToday,
            popular : popular
        })
    }catch{
        setTVData({
            ...tvData, 
            error : "Can't find movie data"
        })
    }finally{
        setTVData({
            ...tvData,
            loading : false
        })
    }

}
    return (
        <TVShowPresenter tvData={tvData}></TVShowPresenter>
    )
}

export default TVShowContainer;