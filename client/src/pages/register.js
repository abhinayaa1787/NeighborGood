import React, { Component } from 'react';
import Jumbotron from "../components/Jumbotron/jumbotron";
import {Row,Col} from "../components/Grid";
import {Card, CardBtn, CardBody,CardContainer,CardHeading,CardImg,CardTitle,CardTitleText}  from "../components/Card";
import { List, ListItem } from "../components/List";
import API from "../utils/API";
import axios from "axios";
import RegisterForm from '../components/RegisterForm/registerform';

function registerUser(props) {
  // console.log(props);
  return ( 
    <RegisterForm {...props}/>
  );
}
 
export default registerUser;