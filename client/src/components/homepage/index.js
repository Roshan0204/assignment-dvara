import React, { useState } from "react";
import styled from "styled-components";
import {Typography} from "antd";
import { Link } from "react-router-dom";

import ImageUploader from "react-images-upload";

const {Title} = Typography;

const Wrapper = styled.div`
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

const ImageContainer=styled.div`
width: 100%;
>div{
  >div{
      >button{
        width: 45%;
        background: #a1c42c !important;
      }
  }
}
`;

const ButtonContainer=styled.div`
width: 100%;
display: flex;
justify-content: right;
align-items: right;
position: relative;
margin-bottom: 80px;
`;

const SaveButton=styled.div`
width: 20%;
display: flex;
position: absolute;
right: 30px;
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

const ShowButtonContainer=styled.div`
width: 100%;
display: flex;
justify-content: right;
align-items: right;
position: relative;
`;

const ShowButton=styled.div`
width: 15%;
display: flex;
justify-content: center;
align-items: center;
background: #1873e8;
padding: 5px;
border-radius: 10px;
cursor: pointer;
margin-top: 25px;
margin-bottom: 25px;
position: absolute;
right: 30px;
>p{
  font-size: 16px;
  color: #fff;
  font-weight: bolder;
  margin-bottom: 0px;
}
`;

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}


const HomePage =()=> {
  const [profileData,setProfileData]=useState({
    name:"",
    mobile:""
  })
  const [pictures, setImg] = useState([]);

  const changeHandler = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const imgData = async (picture) => {
    try{
    await getBase64(picture[0], (image) => {
      // console.log("file", picture);
      setImg(picture);
    })
  }catch(e){
    console.log("error",e)
  }
  }

    return (
        <Wrapper>
          <Title level={3}>ADD USER DETAILS</Title>
          <ShowButtonContainer>
            <Link to="/showusers">
            <ShowButton>
              <p>Registered Users</p>
            </ShowButton>
            </Link>
          </ShowButtonContainer>
          <InfoContainer>
            <ButtonContainer>
          <SaveButton>
            <p>Submit</p>
          </SaveButton>
          </ButtonContainer>
            <Info placeholder="Enter Name" name="name" onChange={changeHandler}/>
            <Info placeholder="Enter Mobile Number" name="mobile" onChange={changeHandler} />
          <ImageContainer>
            <ImageUploader
            withIcon={false}
            withLabel={false}
            buttonText="Upload Picture"
            onChange={imgData}
            singleImage={true}
            withPreview={true}
            imgExtension={[".jpg", ".png", ".jpeg", ".webp"]}
            />
          </ImageContainer>
          </InfoContainer>
        </Wrapper>
    );
}

export default HomePage;
