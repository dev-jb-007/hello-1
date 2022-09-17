import { useState, useEffect } from 'react'
import MetaData from '../Layouts/MetaData';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

const Service = () => {
    const [loading, setloading] = useState(true);
    const [data, setdata] = useState([]);

    const fetchData = async () => {
        setloading(true);
        const data = await fetch('./api/v1/get-service');
        const parsedData = await data.json();
        setdata(parsedData);
        setloading(false);
    }

    useEffect(() => {
        fetchData();
    }, [])
    return (
        <>
            {loading && !data ? (<div style={{
                width: '100%',
                height: '500px',
                color: "#000",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }} >
                Loading...
            </div>) : (
                <>
                    <MetaData title="Shopping Cart  " />
                    <main className="w-full mt-20">
                        <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-11/12 mt-0 sm:mt-4 m-auto sm:mb-7">
                            <div className="flex-1">
                                <div style={{
                                    padding: "10px",
                                }} className="flex flex-col shadow bg-white">
                                    {data.map((service, index) => (
                                        <span style={{
                                            margin: '10px',
                                        }} key={index} className="font-medium text-lg px-2 sm:px-8 py-4 border-b">
                                            <Card sx={{ display: 'flex' }}>
                                                <CardMedia
                                                    component="img"
                                                    sx={{ width: 300 }}
                                                    image="https://www.mikesqualitypainting.com/wp-content/uploads/2018/06/MQP_Social_05.png"
                                                    alt="Live from space album cover"
                                                />
                                                <Box style={{ width: '100%', display: "flex", flexDirection: "column" }} >
                                                    <Box style={{ flex: 1, width: '100%', paddingLeft: "10px", borderBottom: "0.2px solid #000" }}>
                                                        {service.title}
                                                    </Box>
                                                    <Box style={{ flex: 1, width: '100%', paddingLeft: "10px", borderBottom: "0.2px solid #000" }}>
                                                        {service.description}
                                                    </Box>
                                                    <Box style={{ flex: 2, paddingRight:"30px" ,width: '100%', paddingLeft: "30px", borderBottom: "0.2px solid #000" }}>
                                                        {service.requirements.map((e,index)=>(
                                                            <div key={index} style={{
                                                                flex:1
                                                            }} className="flex justify-around items-center text-md rounded bg-blue-50 py-1 px-2">
                                                            <p className="text-gray-500 font-medium">{e.title}</p>
                                                            <p>{e.description}</p>
                                                        </div>
                                                        ))}
                                                    </Box>
                                                </Box>
                                            </Card>
                                        </span>
                                    ))}
                                    <div className="flex justify-end">
                                    </div>
                                </div>
                                <div className="flex flex-col mt-5 shadow bg-white">
                                </div>
                            </div>
                        </div>

                    </main>
                </>
            )}
        </>
    );
};

export default Service;
