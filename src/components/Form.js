import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.h1 `
    color: red;
    font-size: 80px;
`
const Button = styled.button `
    background-color: black;
    color: white;
    padding: 12px 15px;
` 
class Form extends Component {

    render() {

        return(
            <div>
                <Title>Commentaire </Title>
                <Button className="">Valider</Button>
            </div>
        )
    }
}

export default Form;