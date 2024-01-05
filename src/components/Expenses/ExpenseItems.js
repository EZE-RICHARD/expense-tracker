
import Container from "../UI/Container";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItems = (props) => {

    return (
      <Container className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
       
      </Container>
    );
}
export default ExpenseItems