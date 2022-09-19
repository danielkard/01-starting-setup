import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
    const list= props.expenses;
    return (
        <div className="expenses">
            <ExpenseItem title={list[0].title} date={list[0].date} amount={list[0].amount}></ExpenseItem>
            <ExpenseItem title={list[1].title} date={list[1].date} amount={list[1].amount}></ExpenseItem>
            <ExpenseItem title={list[2].title} date={list[2].date} amount={list[2].amount}></ExpenseItem>
            <ExpenseItem title={list[3].title} date={list[3].date} amount={list[3].amount}></ExpenseItem>
        </div>
    );
}

export default Expenses;