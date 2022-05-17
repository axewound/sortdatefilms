import React, { Component } from 'react';
import moment from 'moment';
import Button from './indexBut';
import Days from './Days';
import './styleData.css';
import Prev from "./../image/Prev.png"
import Next from "./../image/Next.png"
class DatePicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shown: moment()
        };
    }

    showMonth(months) {
        const shown = this.state.shown
            .clone().add(months, 'months');
        this.setState({shown});
    }

    quickPick(days) {
        const picked = moment().add(days, 'days');
        const shown = picked.clone();
        this.setState({picked, shown});
    }

    pick(date) {
        const picked = date.clone();
        const shown = picked.clone();
        this.setState({ picked, shown });
    }

    render() {
        const { shown, picked } = this.state;
        return (
            <div className="date-picker">
                <ul className="date-picker__head">
                    <li>
                        <Button filled onClick={ () => this.showMonth(-1) }><img src={Prev} alt=""/></Button>
                    </li>
                    <div className="date-picker__month">{shown.format('MMMM')}</div>
                    <li>
                        <Button filled onClick={() => this.showMonth(1)}><img src={Next} alt=""/></Button>
                    </li>
                </ul>
                <Days setData ={this.props.setData}  textData={this.props.textData} shown={shown} picked={picked} onPick={ date => this.pick(date) } />
            </div>
        );
    }
}

export default DatePicker;
