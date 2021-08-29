import React from "react"
import styled from "styled-components";

const Wrapper=styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`;

const InfoContainer=styled.div`
width: 90%;
display: flex;
flex-direction: column;
background: #fff;
`;

const Info=styled.div`
width: 100%;
display: flex;
justify-content: sapce-between;
align-items: center;
padding: 10px;
>div{
    font-size: 18px;
    color: #000;
}
>span{
    font-size: 18px;
    font-weight: bolder;
    color: #000;
}

`;

const ImageWrapper=styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 50px;
`;

const ImageContainer=styled.div`
width: 40%;
border: 1px solid #eee;
height: 150px;
display: flex;
justify-content: center;
align-items: center;
margin-top: 50px;
>img{
    width: 90%;
}
`;

const UserDetails = () => {
        return(
            <Wrapper>
                <InfoContainer>
                    <Info>
                        <div>Name :</div>
                        <span>Roshan Kumar</span>
                    </Info>
                    <Info>
                        <div>Mobile Number :</div>
                        <span>9876543210</span>
                    </Info>
                    <Info>
                        <div>Date of Registeration :</div>
                        <span>20/08/2021</span>
                    </Info>
                    <ImageWrapper>
                    <ImageContainer></ImageContainer>
                    </ImageWrapper>
                </InfoContainer>
            </Wrapper>
        )
}

export default UserDetails;