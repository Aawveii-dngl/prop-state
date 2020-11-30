import React, { Component, } from 'react';
import {Container,Card,Row,CardImg} from 'react-bootstrap';
import styled from 'styled-components';

const Styleserv = styled.div`
.middle{
    justify-content:center;
}
`

export class Maincomp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             selectedItem:null
        }
    }
   
    render() {
        const Samba = this.props.item.map((item)=>{
            return (
                <div key={item.id} className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={item.image} alt={item.name}/>

                </Card>
            </div>
            )
        })
        return (
            <Container>
            <Styleserv> 
            <h1>Avilable Details</h1>
            <Row className = "middle">
            {Samba}
            </Row>
            </Styleserv>
            </Container>
        )
    }
}

export default Maincomp
