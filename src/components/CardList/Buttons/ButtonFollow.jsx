import { ButtonFollowStyled } from "./Button.styled"

export const ButtonFollow = ({handleClick}) => {
    
    return (<>
    <ButtonFollowStyled type="button"   onClick={handleClick} >follow</ButtonFollowStyled>  
    </>)
}

