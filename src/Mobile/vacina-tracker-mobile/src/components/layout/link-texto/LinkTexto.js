import { StyleSheet } from "react-native";
import { Link } from 'react-router-dom'

function LinkTexto({to, text}) {
    return (
        <Link to={to} style={styles.btnTexto}>
            {text}
        </Link>
    );
}

const styles = StyleSheet.create({
    btnTexto: {
        color: "#F5F5F5",    
        fontSize: 16,
        fontFamily: 'Open Sans',
        textDecoration: "none",
        transition: 0.5,
        flex: 1,
        justifyContent: "center",
        marginBottom: 24,
    },       
});

export default LinkTexto