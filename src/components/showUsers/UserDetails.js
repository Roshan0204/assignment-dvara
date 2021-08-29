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

const UserDetails = (props) => {

    const getDate=(date)=>{
        var dt = new Date(date);

year  = dt.getFullYear();
month = (dt.getMonth() + 1).toString().padStart(2, "0");
day   = dt.getDate().toString().padStart(2, "0");

console.log(year + '/' + month + '/' + day);
    }
    const {user}=props;
        return(
            <Wrapper>
                <InfoContainer>
                    <Info>
                        <div>Name :</div>
                        <span>{user.name}</span>
                    </Info>
                    <Info>
                        <div>Mobile Number :</div>
                        <span>{user.mobile}</span>
                    </Info>
                    <Info>
                        <div>Date of Registeration :</div>
                        <span>{getDate(user.date)}</span>
                    </Info>
                    <ImageWrapper>
                    <ImageContainer>
                        <img src={user.profile} />
                    </ImageContainer>
                    </ImageWrapper>
                </InfoContainer>
            </Wrapper>
        )
}

export default UserDetails;