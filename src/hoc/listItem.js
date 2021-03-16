const listItems = (items, clickFunction) => {
    const listItemsMapped = items.map((item) => {
        return <li key={item.id} className="listItems" onClick={() => clickFunction(item.name)}><span className="iconsStyles">{item.icon}</span>{item.name}</li>
    })
    return listItemsMapped;
}

export default listItems;