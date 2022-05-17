import React from 'react';
import {Route} from "react-router-dom";
import {Container} from "react-bootstrap";
import ProductOnePagesContrtainer from "./Body/ProductOnePageContainer";
import ProductPagesContainer from "./Body/ProductPageContainer";
import styles from './App.module.css';

const App = () => {
    return (
        <div    className={styles.container}>

            <Route path='/schedule/:airdate?'
                   render={() => <ProductOnePagesContrtainer/>}/>
            <Route path='/schedules'
                   render={() => <ProductPagesContainer/>}/>
        </div>
    )
}

export default App;
