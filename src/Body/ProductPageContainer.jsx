import React from 'react';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import { setData} from "../redux/product-reducer";
import DatePicker from "../assets/Calender/indexData";
import {getProductThunk,} from "../redux/product-reducer";
import styles from "../App.module.css";
import tv from "../assets/image/tvimages.png";

class ProductPagesContainer extends React.Component {
    componentDidMount() {
        this.props.getProductThunk();
    }

    render() {
        return (
            <div>
                <div className={styles.app_block}>
                    <h1 className={styles.header_title}>Super Film</h1>
                    <div className={styles.header_tv_block}>
                        <img src={tv} alt=""/>
                        <div className={styles.blockTvText}>
                            <p>
                                Для получения списка сериалов, пожалуйста, выберите необходимый месяц и день.
                            </p>
                        </div>
                    </div>
                </div>
                <DatePicker setData={this.props.setData} textData={this.props.textData}
                />
            </div>
        );
    }
}
let mapStateToProps = (state) => ({
    textData:state.productPage.textData
});

let WithContainer = withRouter(ProductPagesContainer)

export default connect(mapStateToProps, {
    setData,
    getProductThunk
})(WithContainer);


