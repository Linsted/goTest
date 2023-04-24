import { ItemStyled, ImgLogoStyled, LogoStyled, AvatarStyled,TextTweetsStyled,TextFollowersStyled, UserContainerStyled } from "./CardItem.styled";
import logoGoIt from "../../image/goItLogo.svg";
import logoQuestion from "../../image/logo.png";
import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import { ButtonFollow } from "components/CardList/Buttons/ButtonFollow";
import { ButtonFollowing } from "components/CardList/Buttons/ButtonFollowing";



export const CardItem = ({ user }) => {

    
   


        const [activeButtons, setActiveButtons] = useState({ id: user.id, isFollowed: false });

    
    
    function addComa(number) { 
    
        if (number.toString().length > 3) {
          const arr = number.toString().split("")
          arr.splice(-3, 0, ",")
          return  arr.join('')

        }
        return number;
    };




useEffect(() => {
  const savedValue = localStorage.getItem(`user_${user.id}_followed`);
  if (savedValue !== null) {
    setActiveButtons(prevState => ({ ...prevState, isFollowed: JSON.parse(savedValue) }));
  }
}, [user.id]);
    

    useEffect(() => {
    localStorage.setItem(`user_${user.id}_followed`, JSON.stringify(activeButtons.isFollowed));
  }, [activeButtons, user.id]);




    

    

    const handleClick = () => {
        const active = { ...activeButtons, isFollowed: !activeButtons.isFollowed };
        setActiveButtons(active);
    };



    return (<>
        <ItemStyled>
            <ImgLogoStyled src={logoGoIt} alt="Logo GoIT company" />
            <LogoStyled src={logoQuestion} alt="Logo question mark" />
            <UserContainerStyled>
               
                <AvatarStyled src={user.avatar} alt={user.user} width="62px" height="62px" />
                <TextTweetsStyled>{user.tweets} tweets</TextTweetsStyled>
                <TextFollowersStyled>{!activeButtons.isFollowed ? addComa(user.followers ) : addComa(user.followers + 1) } followers </TextFollowersStyled>
                 
                    {activeButtons.isFollowed ? <ButtonFollowing handleClick={handleClick} /> : <ButtonFollow handleClick={handleClick}/>}
                
            </UserContainerStyled>
    </ItemStyled>
    
    </>)
}


CardItem.propTypes = {
    user: PropTypes.object.isRequired,
};

