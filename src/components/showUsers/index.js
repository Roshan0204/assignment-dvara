import React,{useState,useEffect} from "react";
import styled from "styled-components";
import {Typography} from "antd";
import UserDetails from "./UserDetails";

const {Title} = Typography;

const Wrapper=styled.div`
width: 100%;
background: #fff;
margin-top: 115px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
>h3{
  text-align: center;
}
`;

const InfoContainer=styled.div`
width: 70%;
border: 2px solid #a1c62c;
margin-top: 80px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const TotalContainer=styled.div`
width: 100%;
display: flex;
justify-content: flex-end;
align-items: flex-end;
margin-top: 25px;
margin-bottom: 25px;
margin-right: 25px;
`;

const TotalInfo=styled.div`
width: 25%;
padding: 10px;
border: 1px solid #64cd33;
display: flex;
justify-content: space-between;
align-items: center;
>div{
    font-size: 18px;
    color: #000;
}
>span{
    font-size: 18px;
    font-weight: bolder;
}
`;

const FindUserContainer=styled.div`
width: 80%;
background: #eee;
box-shadow: 4px 2px 0px 2px #bbb;
margin-bottom: 50px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
>h3{
    margin-top: 25px;
    margin-bottom: 25px;
    text-align: center;
}
`;

const Container=styled.div`
width: 80%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #fff;
`;

const Info=styled.input`
background: 0;
border: 0;
outline: none;
width: 80vw;
max-width: 400px;
font-size: 1.5em;
transition: padding 0.3s 0.2s ease;
border-bottom: 2px solid #bbb;
margin-top: 25px;
margin-bottom: 25px;

&:focus {
  padding-bottom: 5px;
}

// sibling magic ;o
&:focus + .line {
  &:after {
    transform: scaleX(1);
  }
}
`;

const SearchButton=styled.div`
width: 70%;
display: flex;
justify-content: center;
align-items: center;
background: #64cd33;
padding: 5px;
border-radius: 10px;
cursor: pointer;
margin-top: 25px;
margin-bottom: 25px;
>p{
  font-size: 16px;
  color: #fff;
  font-weight: bolder;
  margin-bottom: 0px;
}
`;

const UserDetailsContainer=styled.div`
width: 100%;
border-top: 1px dashed #eee;
`;

const ShowUsers = (props) =>{

    useEffect(() => {
        props.getCount();
      }, []);

const [mobile,setMobile]=useState("");

    const searchHandler=()=>{
        props.getUserByMobile(mobile)
    }


const {total,userData}=props;
    return(
        <Wrapper>
            <InfoContainer>
                <TotalContainer>
                    <TotalInfo>
                        <div>TOTAL USERS :</div>
                        <span>{total && total.count}</span>
                    </TotalInfo>
                </TotalContainer>
                <FindUserContainer>
                    <Title level={3}>FIND USER DETAILS</Title>
                    <Container>
                    <Info placeholder="Enter Mobile Number" />
                    <SearchButton onClick={searchHandler}>
                        <p>Search</p>
                    </SearchButton>
                <UserDetailsContainer>
                    {userData &&
                    <UserDetails user={userData} />
}
                </UserDetailsContainer>
                    </Container>
                </FindUserContainer>
            </InfoContainer>
        </Wrapper>
    )
}

export default ShowUsers;