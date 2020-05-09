import React from 'react';
import {Cards , Charts , CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';



class App extends React.Component {

    state = {
        data : { },
        country: '',
    }

    async componentDidMount () {
        const fetchedData = await fetchData();
        this.setState({data: fetchedData});
    }

    handleCountryChange = async (country) => {
        const data = await fetchData(country);

        this.setState({ data, country: country });
    }

    render() {

        const { data, country } = this.state;
        

        return (
            <div>
                
                <Cards className={styles.container} data={data} />
                <CountryPicker className={styles.container} handleCountryChange={this.handleCountryChange} />
                <Charts className={styles.container} data={data} country={country} />

            </div>
        )
    }
}

export default App;