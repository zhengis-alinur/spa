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
        },
        aboutMe: `As a highly motivated junior front-end developer pursuing studies in Computational Physics at St. Petersburg State University, I bring a strong passion for programming to the table. As an intern at Yandex, one of the world's largest IT companies, I am gaining invaluable hands-on experience in the industry. My extensive experience in robotics, including multiple international Olympiad wins, has honed my technical skills and instilled in me a sense of discipline, perseverance, and a drive to succeed. I thrive on taking on new challenges and remain open to learning new technologies and techniques. My strong work ethic, attention to detail, and programming skills make me confident that I can make a valuable contribution to any team`,
      };
    return <Container fluid style={{padding: 0}}>
        <NavBar/>
            <UserCard {...user}/>
        </Container>
    
}


export default AboutPage;