import { colorTheme } from '../styling/colorTheme';
import image from '../chat-icon.png';
import UserProvider from '../contexts/userContext';
import { ThemeProvider, styled, makeStyles, createMuiTheme } from '@material-ui/core';


// Skapa logiken för att visa userName

export default function Header() {
    const styled = useStyles();



    return (
        <UserProvider>
            <ThemeProvider theme={colorTheme}>
                <div className={styled.header}>
                    <img className={styled.image} src={image} alt="chat-pic" />
                    <h4 className={styled.title}>Chattastic</h4>
                    <p className={styled.userName}>User123</p>/
                </div>
            </ThemeProvider>
        </UserProvider>
    )
}

const theme = createMuiTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
});

const useStyles = makeStyles(theme => ({

    header: {
        boxSizing: 'border-box',
        padding: '10px',
        background: 'white',
        color: '#897AF2',
        border: '1px solid #F6F6F6',
        display: 'flex',

    },

    title: {
        textAlign: 'left',
        marginLeft: '2rem',
        fontSize: '1.3rem'

    },

    image: {
        width: '65px',
        marginLeft: '1.5rem',
    },

    userName: {
        position: 'absolute',
        left: '95%',
        fontSize: '1vw',
        paddingTop: '1rem',
        [theme.breakpoints.down('md')]: {
            fontSize: '1rem',
            paddingTop: '1rem',
            left: '80%',


        },
    },

}))




