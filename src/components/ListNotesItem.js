const ListNotesItem = () => {
  return (
    // <li className="editing">
    //   <div className="view">
    //     <input className="toggle" type="checkbox" /><label>Todo 1</label
    //     ><button className="destroy"></button>
    //   </div>
    //   <input type="text" className="edit" value="Todo 1" />
    // </li>
      // <li className="completed">
      //   <div className="view">
      //     <input className="toggle" type="checkbox" checked /><label
      //       >Todo 2</label
      //     ><button className="destroy"></button>
      //   </div>
      //   <input type="text" className="edit" value="Todo 2" />
      // </li>
      <li className="">
        <div className="view">
          <input className="toggle" type="checkbox" /><label>Todo 3</label
          ><button className="destroy"></button>
        </div>
        <input type="text" className="edit" value="Todo 3" />
      </li>
  )
}

export default ListNotesItem;