import React from "react";
import { useState,useEffect } from "react";
const OptionBar = (props) => {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [sort, setSortBy] = useState("");
  const [order, setOrder] = useState("");
const {generateUrlParams} = props;
 

useEffect(()=>{
	generateUrlParams(limit, page, sort, order)
}, [limit, page, sort, order])

return (
    <div>
      <label>Limit:</label>
      <input
        type="number"
        value={limit}
        onChange={(e) => {
          setLimit(e.target.value);
        }}></input>
     <div> <label>Page:</label>
      <input
        type="number"
        value={page}
        onChange={(e) => {
          setPage(e.target.value);
        }}></input></div>
      <label>Sort:</label>
    
      <select value={sort} onChange={(e)=>{

          setSortBy(e.target.value)
      }}>
        <option></option>
        <option value="id">id</option>
        <option value="title">title</option>
        <option value="createdAt">createdAt</option>
      </select>
      <label>Order:</label>
      <select
        onChange={(e) => {
          setOrder(e.target.value);
        }}>
        <option></option>
        <option value="asc">ASC</option>
        <option value="desc">DESC</option>
      </select>
        <button onClick={()=>{
            props.generateUrlParams({limit,page,sort,order})
            
        }}></button>
    
    </div>
  );
};

export default OptionBar;
