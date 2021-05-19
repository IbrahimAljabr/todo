import React, { useState } from "react";

export const PageContext = React.createContext();

const settings = (props) => {
  const [count, setItemCount] = useState(3);
  const [page, setStartingPage] = useState(1);

  const state = {
    count,
    page,
    setItemCount,
    setStartingPage,
  };
  return <PageContext.Provider value={state}>{props.children}</PageContext.Provider>;
};
export default settings;
