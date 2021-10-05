import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { buyMedds } from '../../redux/action/user.action';
import Button from 'react-bootstrap/Button'

class EditCart extends React.Component {
    constructor(props) {
        super(props)
        this.state = { med_name: "", qty: "", customer_id: "" }

    }

    SaveData = () => {
        let { dataToEdit } = this.props
        this.setState({med_name:dataToEdit.med_name,customer_id: dataToEdit.customer_id})
        console.log("saving to cart");
        var obj = { med_name: this.state.med_name, qty: this.state.qty, customer_id: this.state.customer_id }
        this.props.buymed(obj);

    }

    navigate = () => {
        this.props.history.push(`/usercartdisplay/${this.state.customer_id}`)
    }
    render() {
        let { dataToEdit } = this.props
        return (
            <div>
                <br /><br />
                Enter medicine quantity:<input type="text" onChange={(event) => { this.setState({ qty: event.target.value }) }} /><br />
                <Button variant="warning" onClick={this.SaveData} >Add to Cart</Button><Button variant="success" onClick={this.navigate}>Go To MyCart</Button>
                

            </div>
        )
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        buymed: bindActionCreators(buyMedds, dispatch)
    }
}
const mapStateToProps = (state) => {
    return {
        dataToEdit: state.admin.dataToUpdate
    }
}

export default connect(null, mapDispatchtoProps)(EditCart)