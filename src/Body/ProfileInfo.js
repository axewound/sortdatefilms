import React from 'react';
import styles from './ProfileInfo.module.css';
import imgg from '../assets/image/tvimages.png';
import backArrow from '../assets/image/Shape.svg';
import {Card} from "react-bootstrap";
import FormaDown from "../assets/image/FormaDown.svg"

class ProfileInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            visible: 5,
            error: false
        };

    }

    loadMore = () => {
        this.setState((prev) => {
            return {visible: prev.visible + this.props.products.length - 5};
        });
    }

    componentDidMount() {
        fetch("https://api.tvmaze.com/schedule?country=US&date=" + this.props.textData).then(
            res => res.json()
        ).then(res => {
            this.setState({
                items: res
            });
        }).catch(error => {
            this.setState({
                error: true
            });
        });
    }

    render() {
        const BackClick = (e) => {
            this.props.history.goBack()
        }
        return (
            <section className="feed">
                <div className={styles.tiles} aria-live="polite">
                    <div className={styles.back_button}>
                        <button onClick={BackClick} className={styles.button_back}><img src={backArrow}/></button>
                        <div className={styles.dateItem}>
                            {this.props.textData}
                        </div>
                    </div>
                    {this.state.items.slice(0, this.state.visible).map((item, index) => {
                        return (
                            <Card key={item.id} className={styles.card}>
                                <div className={styles.blockFilm}>
                                    <div>
                                        <img className={styles.imgTitle}
                                             src={item.show.image === null || undefined ? imgg : item.show.image.medium}/>
                                    </div>
                                    <div className={styles.infoBox}>
                                        <h1>{item.show.name}</h1>
                                        <div className={styles.infoSeries}>
                                            <span>Сезон: {item.season}</span>
                                            <span className={styles.infoSeries_secBox}>Эпизод: {item.number}</span>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        );
                    })}
                </div>
                {this.state.visible < this.state.items.length &&
                <button onClick={this.loadMore} type="button"
                        className={styles.load_more}>Еще {this.props.products.length - 5} сериала <img
                    className={styles.imgDown}
                    src={FormaDown}/></button>
                }
            </section>
        );
    }
}


export default ProfileInfo;