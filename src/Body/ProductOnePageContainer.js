import React from 'react';
import {connect} from "react-redux";
import { withRouter} from "react-router-dom";
import {compose} from "redux";
import {getUserProfile} from "../redux/product-reducer";
import ProfileInfo from "./ProfileInfo";

class ProductOnePagesContrtainer extends React.Component {
    componentDidMount() {
        let airdate = this.props.textData;
        this.props.getUserProfile(airdate);
    }
    render() {
        return (
            <ProfileInfo  {...this.props} products={this.props.products} textData={this.props.textData}/>
        )
    }
}

let mapStateToProps = (state) => ({
    products: state.productPage.products,
    textData:state.productPage.textData
});

export default compose(
    connect(mapStateToProps, {getUserProfile}),
    withRouter
)(ProductOnePagesContrtainer);

