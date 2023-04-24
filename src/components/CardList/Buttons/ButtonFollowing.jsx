import { ButtonFollowingStyled } from "./Button.styled"

export const ButtonFollowing = ({handleClick}) => {
    
    return (<>
    <ButtonFollowingStyled type="button"   onClick={handleClick} >following</ButtonFollowingStyled>  
    </>)
}

