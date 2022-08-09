import axios from "axios";
import React, { Component, useState, useEffect } from "react";



class Countries extends Component {

    constructor() {
        super()
        this.state = {
            data: [],
            setData: []
        }
    }


}

useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all?fields=name;population;region;capital;flag').then((res) => this.setData(res.data));
    console.log(data);
}, [])
export default Countries