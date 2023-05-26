import React from 'react';
import { Container } from 'react-bootstrap';
import NavBar from '../../components/NavBar';
import UserCard from '../../components/UserCard';

function AboutPage() {
    const user = {
        id: 777,
        name: 'Zhengis Alinur',
        username: 'zhengis-alinur',
        email: 'zhengis.alinur.erzhan@gmail.com',
        address: {
        street: '',
        suite: '',
        city: 'Saint-Petersburg',
        zipcode: '',
        geo: {
        lat: '',
        lng: ''
        }
        },
        phone: '+79667564628',
        website: '',
        company: {
        name: 'Yandex',
        catchPhrase: '',
        bs: ''
        }
      };
    return <Container fluid style={{padding: 0}}>
        <NavBar/>
            <UserCard {...user}/>
        </Container>
    
}


export default AboutPage;