import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [itemList, setItemList] = useState(items);
  const [search, setSearch] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  function handleSearchChange(event) {
    setSearch(event.target.value);
  }

  function handleItemFormSubmit(newItem) {
    setItemList([...itemList, newItem]);
  }

  const itemsToDisplay = itemList.filter((item) => {
  const matchesCategory =
    selectedCategory === "All" || item.category === selectedCategory;

  const matchesSearch = item.name
    .toLowerCase()
    .includes(search.toLowerCase());

  return matchesCategory && matchesSearch;
});


  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <Filter
      selectedCategory={selectedCategory} 
      onCategoryChange={handleCategoryChange}
      search={search}
      onSearchChange={handleSearchChange}
       />
      
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;