import { TfiAnnouncement } from "react-icons/tfi";
import { MdOutlineAssignment } from "react-icons/md";
import { RiDeleteBinFill } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { editItem } from "../../Modules/List/listSlicer";
import { FaCheck } from "react-icons/fa";





export const List = ({ list, handleDelete }) => {
  const dispatch = useDispatch();
  const [editItemId, setEditItemId] = useState('');
  const itemList = useSelector((state) => state.list.filter(item => item.id === editItemId));
  const inputElement = useRef(null);
  const [editedItem, setEditedItem] = useState('');
  useEffect(() => {
    setEditedItem(itemList[0]?.content);
    inputElement.current?.focus();
  }, [editItemId]);

  const handleEdit = (id) => {
    dispatch(editItem({ id, editedItem }));
    setEditItemId('');
  }




  console.log(editedItem)
  return (
    <ul className="classroom__list">
      {
        list.map(item => {
          return (
            <li className="classroom__list__list-item" key={item.id}>
              <span className="icon">{item.type === 'Announcement' ? (<TfiAnnouncement className='home__report-icon blue' />) : (<MdOutlineAssignment className='home__report-icon red' />)}</span>{editItemId !== item.id ? (<span className="classroom__list__list-content">{item.content}</span>) : <input ref={inputElement} className="classroom__list__list-content" value={editedItem} onChange={(e) => setEditedItem(e.target.value)} />}
              <div className="classroom__list__btn-area">
                {editItemId === item.id ? (<button onClick={() => handleEdit(item.id)}><FaCheck /></button>) : (<button onClick={() => setEditItemId(item.id)}><AiOutlineEdit /></button>)}
                <button className='classroom__list__delete-btn' onClick={() => handleDelete(item.id)}><RiDeleteBinFill /></button></div>
              <div><span>{item.date.day}, </span><span>{item.date.month}</span></div>
            </li>)
        })
      }
    </ul>
  )
}