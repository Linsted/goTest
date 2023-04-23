import { ItemStyled, ImgLogoStyled, LogoStyled, AvatarStyled,FrameStyled, UserContainerStyled } from "./CardItem.styled";
import logoGoIt from "../../image/goItLogo.svg";
import logoQuestion from "../../image/logo.png";
import PropTypes from 'prop-types';



export const CardItem = ({ user }) => {
    
  function addComa(number) { 
        if (number.toString().length > 3) {
          const arr = number.toString().split("")
          arr.splice(-3, 0, ",")
          return arr.join('')

        }
        return number;
}



    return (<>
        <ItemStyled>
            <ImgLogoStyled src={logoGoIt} alt="Logo GoIT company" />
            <LogoStyled src={logoQuestion} alt="Logo question mark" />
            <UserContainerStyled>
               
                <AvatarStyled src={user.avatar} alt={user.user} width="62px" height="62px" />
                <p>{user.tweets} tweets</p>
                <p>{ addComa(user.followers) } followers </p>
                <button type="button">follow</button>
            </UserContainerStyled>
    </ItemStyled>
    
    </>)
}


CardItem.propTypes = {
    user: PropTypes.object.isRequired,
}

