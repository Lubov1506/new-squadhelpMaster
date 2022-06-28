import React from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import Transactions from '../../components/Transactions/Transactions';
import Footer from '../../components/Footer/Footer'
import * as ActionCreators from '../../actions/actionCreator'
import Spinner from '../../components/Spinner/Spinner'
import { useEffect } from 'react';


const TransactionPage = (props) => {
  const {isFetching, error, data} = props.transactions;

  useEffect(()=>{
    props.getTransactions();
  }, [])

  return (
    <div>
      <Header />
     {isFetching && <Spinner />}
     {data && <Transactions data={data}/> }
      <Footer />
    </div>
  );
};

const mapStateToProps = ({transations}) => ({transations});
const mapDispatchToProps = (dispatch) => ({
  getTransactions: () => dispatch(ActionCreators.getTransactionsRequest)
})

export default connect(mapStateToProps, mapDispatchToProps)(TransactionPage);