import React, { useState, useContext } from "react";
import Toast from "react-bootstrap/Toast";
import Badge from "react-bootstrap/Badge";
import { PageContext } from "../../context/settings";
import Pagination from "react-bootstrap/Pagination";

function TodoList(props) {
  const context = useContext(PageContext);
  const [page, setCurrentPage] = useState(context.page);

  const maxItems = context.count;
  const sortedList = props.list.sort((a, b) => b.difficulty - a.difficulty);
  const allList = sortedList.sort((a, b) => {
    return a.complete === b.complete ? 0 : a ? -1 : 1;
  });

  const numOfPages = allList.length / maxItems + 1;
  const lastItem = page * maxItems;
  const firstItem = lastItem - maxItems;
  const currentList = allList.slice(firstItem, lastItem);
  const nextPage = (num) => setCurrentPage(num);

  const pageCount = [];
  const activePage = page;

  for (let num = 1; num < numOfPages; num++) {
    pageCount.push(
      <Pagination.Item key={num} acitvePage={num === activePage} onClick={() => nextPage(num)}>
        {num}
      </Pagination.Item>
    );
  }

  return (
    <section>
      {currentList.map((item) => (
        <Toast key={item._id + "_"} onClose={() => props.handleDelete(item)}>
          <div className="list--boot">
            <Toast.Header>
              <Badge
                className="badgeN"
                variant={item.complete ? "danger" : "success"}
                onClick={() => props.handleComplete(item)}
              >
                {item.complete ? "Complete" : "pending"}
              </Badge>
              <strong>{item.assignee}</strong>
            </Toast.Header>
            <Toast.Body>
              <span className="listColor" onClick={() => props.handleComplete(item._id)}>
                {item.text}
              </span>
            </Toast.Body>
            <Toast.Body>
              <span onClick={() => props.handleComplete(item._id)}>
                Difficulty : {item.difficulty}
              </span>
            </Toast.Body>
          </div>
        </Toast>
      ))}
      <Pagination>
        {/* <Pagination.Prev> back</Pagination.Prev> */}
        {pageCount}
        {/* <Pagination.Next></Pagination.Next> */}
      </Pagination>
    </section>
  );
}

// <Button variant="danger" onClick={() => props.handleDelete(item._id)}>X</Button>
export default TodoList;
