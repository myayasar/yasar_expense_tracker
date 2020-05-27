import React, { useState,useRef } from 'react';
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,FormGroup,Input,Label } from 'reactstrap';

const AddIncome = (props) => {
  const [modal, setModal] = useState(false);
  const [date, setDate] = useState(new Date());
  const [error, setError] = useState([]);
  const textInput = useRef(null);
  const amountInput = useRef(null);

 
  const add = () => {
    let _date = new Date(date);
    let _dateTostring = _date.getDate()+"/"+(_date.getMonth()+1)+"/"+_date.getFullYear();
    let summary = textInput.current.value;
    let amount = amountInput.current.value;
    let _error =[]
    if(summary == '') _error.push("summary")
    if(amount == '') _error.push("amount")
    if(_error.length != 0){
        setError(_error);
        return;
    }
    let type = props.type;
    let data = {date:_dateTostring,summary,type,amount};
    props.updateExpence(data) 
    toggle()
 };

  const toggle = () => {
    setModal(!modal)
 };
const numberInput = () => {
    let amount = amountInput.current.value;
    amount=amount.replace(/[^\d]/,'');
    amountInput.current.value = amount;
}
  return (
    <div>
     <Button color={props.color} size="lg" onClick={toggle}>{props.label}</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{props.label} Details</ModalHeader>
        <ModalBody>
        <FormGroup>
        <Label for="date">Date</Label>
        <DatePicker selected={date} onChange={date => setDate(date)} />
      </FormGroup>
      <FormGroup>
        <Label for="summary">Summary</Label>
        <Input invalid={error.indexOf("summary")!=-1} innerRef={textInput} type="textarea" name="summary"  />
      </FormGroup> 
      <FormGroup>
        <Label for="amount">Amount</Label>
        <Input invalid={error.indexOf("amount")!=-1}  onChange={numberInput} innerRef={amountInput} type="text" name="amount"  />
      </FormGroup>         
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={add}>Add</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default AddIncome;