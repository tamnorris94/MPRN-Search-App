import Card from '../UI/Card/Card';
import classes from './Users.module.css';

const Users = (props: any) => {
    return (
        <Card className={classes.users}>
            <h1>This is Users page</h1>
        </Card>
    )
}

export default Users;