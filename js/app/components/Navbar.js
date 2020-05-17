import { h } from 'preact'
import { Link } from 'preact-router/match';
import { Button } from 'antd/lib/button/button';


const Navbar = (props) => {
    return (<nav>
        <Button type='pri'>
            <Link activeClassName="active" href="/">! Todo page !</Link>
        </Button>
        <Button>
            <Link activeClassName="active" href="/login">! Login page !</Link>
        </Button>
    </nav>)
}

export default Navbar