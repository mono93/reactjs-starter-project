import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.module.css';
import axios from '../../../axios-order';

class ContactData extends Component {
    state = {
        name: '',
        address: {
            street: '',
            zipCode: ''
        },
        email: '',
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        console.log(this.props.ingredients);

        this.setState({ loading: true })

        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Monojit Saha',
                address: {
                    street: 'street 1',
                    zipCode: '700005'
                },
                email: 'test@email.com'
            }
        }

        axios.post('/orders.json', order)
            .then((res) => {
                this.setState({ loading: false });
                this.props.history.push('/burger')
            }).catch((err) => {
                this.setState({ loading: false })
            })
    }

    render() {

        let form = (<form>
            <input type="text" name="name" placeholder="Your name"/>
            <input type="email" name="email" placeholder="Your email"/>
            <input type="text" name="street" placeholder="Your street name"/>
            <input type="text" name="zipCode" placeholder="Your zipcode"/>
            <Button btnType="Success" clicked={this.orderHandler}> ORDER </Button>
        </form>);

        if (this.state.loading) {
            form = <Spinner />
        }

        return (
            <div className={classes.ContactData}>
                <h4> Enter your Contact Data </h4>
                {form}
            </div>
        );
    }
}

export default ContactData