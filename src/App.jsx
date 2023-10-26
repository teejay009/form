import './index.css'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import React, { useState } from 'react'
import AddItems from './AddItems'
import SearchItem from './SearchItem'
// import ListComponet from './ListComponet'


function App() {
  const [newItem, setNewItem] = useState('')
  const [items, setItems] = useState(JSON.parse(localStorage.getItem
    ('shoppinglist')) || [])
  const [search, setSearch] = useState('')


  const setAndSaveItems = (newItem) => {
    setItems(newItem)
    localStorage.setItem('shoppinglist', JSON.stringify(newItem))

  }

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1
    const myNewItem = { id, checked: false, item }
    const listItems = [...items, myNewItem]
    setAndSaveItems(listItems)
  }

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item)
    setAndSaveItems(listItems)
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id)
    setAndSaveItems(listItems)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newItem) return
    addItem(newItem)
    setNewItem('')
  }

  return (
    <div className='App'>



      {/* Hello  {handleNameChange()} */}
      {/* <Header title = " Cohort 3 list"/> */}
      <Header title=" Cohort 3 list" />
       <AddItems newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit} /> 
      <SearchItem search={search} setSearch={setSearch} />
      <Content items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck} handleDelete={handleDelete} />
      <Footer length={items.length} />




    


    </div>
  )
}

export default App