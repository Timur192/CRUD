import { Layout } from 'antd';
import React, { useEffect, useState } from 'react';
import RegionList from './RegionList';
import axios from 'axios';

const { Content } = Layout;


const Region = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get("http://54.146.158.0:7576/api/region");
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
                <RegionList countries={countries} />
            </Content>

        </Layout>
    )
}

export { Region }