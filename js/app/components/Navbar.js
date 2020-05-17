import { h } from 'preact'
import { Link } from 'preact-router/match';
import { Button } from 'antd/lib/button/button';


const Navbar = (props) => {
<<<<<<< HEAD
    return (
    <nav>
        <Button type='primary'>
            <Link activeClassName="active" href="/"> Todo page</Link>
=======
    return (<nav>
        <Button type='pri'>
            <Link activeClassName="active" href="/">! Todo page !</Link>
>>>>>>> 7e2db008e5374bf984c51e053622f1eb58462878
        </Button>
        <Button>
            <Link activeClassName="active" href="/login">! Login page !</Link>
        </Button>
    </nav>
    )
}

export default Navbar