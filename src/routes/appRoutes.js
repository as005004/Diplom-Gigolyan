import SignUp from '../views/SignUp'
import SignIn from '../views/SignIn'
import TestComponent from '../views/TestComponent'
import MainLayout from '../layouts/Main'
import DashboardIcon from '@material-ui/icons/Dashboard'
import HistoryIcon from '@material-ui/icons/History';
import HomeIcon from '@material-ui/icons/Home';
import UserList from '../views/Userlist';
import GroupIcon from '@material-ui/icons/Group';
import BillList from '../views/BillList';
import ListIcon from '@material-ui/icons/List';
import BillHistoryList from '../views/BillHistoryList';
import EditUser from '../views/EditUser';
import EditIcon from '@material-ui/icons/Edit';
import ReceiptIcon from '@material-ui/icons/Receipt';
import BillEdit from '../views/BillEdit';


const routes = [

    
    {
        icon: <ReceiptIcon />,
        path: '/bill-edit',
        component: <BillEdit />,
        label: 'Новый ПЛ',
        layout: MainLayout,
        adminOnly: true, 
        hidden: true,
    },

    {
        icon: <ListIcon />,
        path: '/bill-list',
        component: <BillList />,
        label: 'Путевые листы',
        layout: MainLayout, 
    },

    {
        icon: <HistoryIcon />,
        path: '/history-list',
        component: <BillHistoryList/>,
        label: 'История ПЛ',
        layout: MainLayout,
    },

    {
        icon: <EditIcon />,
        path: '/edit-user',
        component: <EditUser />,
        label: 'Новый пользователь',
        layout: MainLayout, 
        adminOnly: true, 
        hidden: true,
    },
    
    {
        icon: <GroupIcon />,
        path: '/user-list',
        component: <UserList />,
        label: 'Пользователи',
        layout: MainLayout, 
        adminOnly: true, 
    },

    {
        icon: <DashboardIcon />,
        path: '/sign-in',
        component: <SignIn></SignIn>,
        label: 'Sign In',
        layout: function (props){
            return (props.children)
        },
        hidden: true,
    },

    {
        icon: <HomeIcon />,
        path: '/',
        component: <TestComponent></TestComponent>,
        label: 'Home' ,
        layout: MainLayout,
        redirect: true,
        pathTo: '/bill-list',
        hidden: true,
    },

]
export default routes