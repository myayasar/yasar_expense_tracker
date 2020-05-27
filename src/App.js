import React,{Component} from 'react';
import { Container, Row, Col,Button } from 'reactstrap';
import Tracker from "./components/tracker";
import AddIncome from "./components/addIncome";
import './App.css';
import {updateExpence,deleteUpdateExpence} from "./store/action/postAction";
import { connect } from 'react-redux';

class App extends Component {
  constructor(props){
    super(props);
  }
  deleteExpense = (index) => {
    let tracker = [...this.props.tracker]
    tracker.splice(index,1);
    this.props.deleteUpdateExpence(tracker);
  }
  render(){

    return (
      <Container className="themed-container" fluid={true}>
        <div className="header-bg">
        <Row>
        <Col><span >Balance</span></Col>
        </Row>
        <Row>
      <Col><span>{this.props.balance}</span></Col>
        </Row>
        <Row xs="2">
    <Col><span className="draft-bg">Incoming:</span><span className="draft-bg">{this.props.credit}</span></Col>
        <Col><span className="spending-bg">Spending:</span><span className="spending-bg">{this.props.draft}</span></Col>
        </Row>
      </div>

        <Tracker tracker={this.props.tracker} deleteExpense={this.deleteExpense} />

      <Row style={{padding:"25px 25%"}}>
        <Col><AddIncome color="primary" label="Add Incoming" type="credit" updateExpence={this.props.updateExpence}/></Col>
        <Col>
        <AddIncome color="danger" label="Add Spending" type="draft" updateExpence={this.props.updateExpence}/>
        </Col>
      </Row>

      </Container>
    );

  }
  
}
const mapStateToProps = state => ({
  tracker:state.appData.tracker,
  draft:state.appData.draft,
  credit:state.appData.credit,
  balance:state.appData.balance
  })
export default connect(mapStateToProps,{updateExpence,deleteUpdateExpence})(App);
