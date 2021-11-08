import React from 'react'
import Card from './Card'

function DoneImg(props) {
  if (props.done) {
    return <img src="./assets/on.png" alt="done"></img>
  } else {
    return <img src="./assets/off.png" alt="undone"></img>
  }
}

function ListItem(props) {
  return (
    <li>
      <Card className={props.item.done ? 'done item' : 'item'}>
        {props.item.text}
        <div>
          <button
            className="buttonDoneUndone"
            onClick={() => {
              props.onDone(props.item)
            }}
          >
            <DoneImg done={props.item.done}></DoneImg>
          </button>
          <button
            className="buttonDelete"
            onClick={() => props.onItemDeleted(props.item)}
          >
            <img src="./assets/bin.png" alt="delete"></img>
          </button>
        </div>
      </Card>
    </li>
  )
}

export default ListItem
