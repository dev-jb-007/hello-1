import MetaData from '../Layouts/MetaData';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

const Service = () => {
    return (
        <>
            <MetaData title="Shopping Cart | Flipkart" />
            <main className="w-full mt-20">
                <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-11/12 mt-0 sm:mt-4 m-auto sm:mb-7">
                    <div className="flex-1">
                        <div className="flex flex-col shadow bg-white">
                            Our Services    
                            <span className="font-medium text-lg px-2 sm:px-8 py-4 border-b">
                                <Card sx={{ display: 'flex' }}>
                                    <CardMedia
                                        component="img"
                                        sx={{ width: 300 }}
                                        image="https://www.mikesqualitypainting.com/wp-content/uploads/2018/06/MQP_Social_05.png"
                                        alt="Live from space album cover"
                                    />
                                    <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: '20px' }}>
                                        Hello Guys
                                        <p>This is our first service</p>
                                    </Box>

                                </Card>

                            </span>
                            <div className="flex justify-end">
                            </div>
                        </div>
                        <div className="flex flex-col mt-5 shadow bg-white">
                        </div>
                    </div>
                </div>

            </main>
        </>
    );
};

export default Service;
