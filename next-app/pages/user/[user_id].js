import { useRouter } from 'next/router';
import axios from '../../axios-orders';
function UserPage({ user, ...props }) {
    const router = useRouter();
    const { user_id } = router.query
    const codeStyle = {
        background: '#ebebeb',
        width: 400,
        padding: 10,
        border: '1px solid grey',
        marginBottom: 10,
    }

    return (
        <div>
            <div>{user_id}</div>
            <h1>{user.full_name}</h1>
            <h2>{user.headline}</h2>
            <hr></hr>
            <p>{user.description}</p>
            <h2>Rating: {user.total_rating / user.number_rating}</h2>
            <hr></hr>
            <div>
                {user.skills.map(
                    (skill) => {
                        return <div>{skill.name}</div>
                    }
                )}
            </div>
        </div >

    );
}

// Get data for serverside rendering 
UserPage.getInitialProps = ({ query }) => {
    console.log('api/v1/user/' + query.user_id)
    axios.get()
    return {
        user: {
            id: 5,
            full_name: "Khoi Le",
            address: "Ho Chi Minh city, Vietnam",
            headline: "SWE Intern @Nuna",
            description: "I cannot really install window for you but I hopefully can write a website",
            total_rating: 20,
            number_rating: 6,
            skills: [
                {
                    id: 3,
                    name: "Software development",
                    total_rating: 6,
                    number_rating: 2,
                },
                {
                    id: 5,
                    name: "Machine learning engineer",
                    total_rating: 14,
                    number_rating: 4,
                }
            ]
        }
    }
}


export default UserPage;