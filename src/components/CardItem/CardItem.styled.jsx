import styled from '@emotion/styled';




export const ItemStyled = styled.li`


box-sizing: border-box;
position: relative;
    width: 380px;
   
    height: 460px;
    background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
border-radius: 20px;
padding-top: 188px;
&::before{
    position: absolute;
    content: "";
    display: inline-block;
    height: 8px;
    width: 380px;
    background-color: #EBD8FF;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF;
    top: 222px;
}

`

export const ImgLogoStyled = styled.img`

position: absolute;
top: 20px;
left: 20px;


`;

export const LogoStyled = styled.img`

position: absolute;
top: 28px;
left: 36px;


`;

export const UserContainerStyled = styled.div`

display: flex;
flex-direction: column;
align-items: center;


`;

export const AvatarStyled = styled.img`
box-sizing: content-box;
margin-inline: auto;
border-radius: 50%;
position: relative;
border: 8px solid #EBD8FF;
box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF;




`;

export const FrameStyled = styled.div`
box-sizing: border-box;
position: relative;

width: 78px;
height: 78px;
margin-inline: auto;
border-radius: 50%;
border: 8px solid #EBD8FF;




`;