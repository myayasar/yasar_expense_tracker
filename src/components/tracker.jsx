import React from 'react';
import { Row, Col,Button } from 'reactstrap';
const Tracker = ({tracker,deleteExpense}) => {
    return (
        <React.Fragment>
        {tracker.map(({date,summary,amount,type},index)=> (
        <Row className="row-border" xs="4">
        <Col>
        {date}
        </Col>
        <Col className={type == "draft" ? "spending-bg":"draft-bg"}>
        {amount}
        </Col>
        <Col>
        {summary}
        </Col>
        <Col>
        <Button color="secondary" size="sm" onClick={()=>deleteExpense(index)}>Delete</Button>
        </Col>
        </Row>)
        )}
        </React.Fragment>
    )
}
export default Tracker;