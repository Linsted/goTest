import { CardItem } from "components/CardItem/CardItem";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUsers, fetchUsers } from "redux/operations";
import { getPage, getUsers } from "redux/selectors";
import { ListStyled } from "./CardList.styled";




export const CardList = () => {
    const PER_PAGE = 3;

    const [currentPage, setCurrentPage] = useState(2);
    const users = useSelector(getUsers);
    const pageQuantity = 15 / PER_PAGE;
    const dispatch = useDispatch();

    const handleClick = () => { 
        setCurrentPage(page => page + 1);
        dispatch(addUsers({PER_PAGE, currentPage}))
    };
    
    


      useEffect(() => {
       dispatch(fetchUsers(PER_PAGE)) 

    },[])
    return (<>
        
        <ListStyled>{users.map(element => <CardItem key={element.id} user={element}/>)}</ListStyled>
        {currentPage <= pageQuantity && <button type="button" onClick={handleClick}>Add</button>}
    
    </>)
}