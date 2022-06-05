import { Layout } from 'antd';
import React, { useEffect, useState } from 'react';
import CountriesList from './CountriesList';
import axios from 'axios';

const { Content } = Layout;


const Country = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get("http://54.146.158.0:7576/api/country");
            setCountries(result.data.data)
        };
        fetchData();
    }, []);
    return (
        <Layout>

            <Content
                className="site-layout-background"
                style={{
                    margin: '24px 16px',
                    padding: 24,
                    minHeight: 280,
                }}
            >
                <CountriesList countries={countries} />
            </Content>

        </Layout>
    )
}

export { Country }