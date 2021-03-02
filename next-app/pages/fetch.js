import auth0 from './api/utils/auth0';


export function Fetch() {


    return <></>;
}

export async function getServerSideProps(context) {
    const session = await auth0.getSession(context.req);
    const token = await auth0.getAccessToken(context.req);
    console.log(session.user);
    console.log(token);
}