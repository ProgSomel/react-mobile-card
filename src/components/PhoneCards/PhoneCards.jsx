import axios from "axios";
import { useEffect, useState } from "react";
import PhoneCard from "../PhoneCard/PhoneCard";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import {Bars } from  'react-loader-spinner'


const PhoneCards = () => {

    const [phones, setphones] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        
        axios
        .get("https://openapi.programming-hero.com/api/phones?search=iphone")
        .then((data) => {
            const phoneData = data.data.data;
            const phoneWithFakeData = phoneData.map((phone) => {
                const obj = {
                    name: phone.phone_name,
                    price: parseInt(phone.slug.split('-')[1]),
                }
                return obj;
            })
            console.log(phoneWithFakeData);
            
            setphones(phoneWithFakeData);
            setLoading(false);
        })

    }, [])

    return (
        <div>
        {loading && <Bars
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>}
            <BarChart width={600} height={400} data={phones}>
      <Bar dataKey="price" fill="#8884d8" />
      <XAxis dataKey="name"></XAxis>
      <YAxis></YAxis>
      <Tooltip></Tooltip>
    </BarChart>
        </div>
    );
};

export default PhoneCards;