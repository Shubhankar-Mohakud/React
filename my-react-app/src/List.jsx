import PropTypes from "prop-types";
function List({
    category="Category",
    items=[],
}){

    const categoryName = category;
    const itemList = items;
    const listItems = itemList.map(item => <li key={item.id}>
                                            {item.name}: &nbsp; <b>{item.calories} </b>
                                            </li>);
    
    return(
        <>
            <h3 className="list-category">{categoryName}</h3>
            <ol className="list-item">{listItems}</ol>
        </>
    );
}

List.PropTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
                                                id: PropTypes.number,
                                                name: PropTypes.string,
                                                calories: PropTypes.number
                                            }
                                    )
                            ),
}

export default List;