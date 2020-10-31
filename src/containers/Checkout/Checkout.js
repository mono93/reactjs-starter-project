import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import { connect } from 'react-redux'

const Checkout = props => {

    const checkoutCencelledHandler = () => {
        props.history.goBack();
    }

    const checkoutContinuedHandler = () => {
        props.history.replace('/checkout/contact-data');
    }

        let summary = <Redirect to="/burger" />
        if ( props.ings ) {
            const purchasedRedirect = props.purchased ? <Redirect to="/burger"/> : null;
            summary = (
                <div>
                    {purchasedRedirect}
                    <CheckoutSummary
                        ingredients={props.ings}
                        checkoutCancelled={checkoutCencelledHandler}
                        checkoutContinued={checkoutContinuedHandler} />
                    <Route
                        path={props.match.path + '/contact-data'}
                        component={ContactData} />
                </div>
            );
        }
        return summary;
    
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        purchased: state.order.purchased
    };
}

// const mapDispatchToProps = dispatch => {
//     return {
//         onInItPurchase: () => dispatch(action.purchaseInit)
//     };
// };

export default connect(mapStateToProps)(Checkout);