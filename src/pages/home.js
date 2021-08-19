import React from 'react';
import Logo from '../Logo_Transparent.png'

const Home = () => {
    return (
        <div
            // style={{
            //     display: 'flex',
            //     justifyContent: 'center',
            //     alignItems: 'center',
            //     height: '90vh'
            // }}
        >
            <div>
                <img style={styles.image} src={Logo} />

                <div>
                    <h1 style={styles.title}>Welcome to Your Kitchen!</h1>

                    <h4 style={styles.description}>
                        This website works like a kitchen where you can find recipes and videos that satisfy your needs.
                    </h4>

                    <h4 style={styles.description}>
                        You can also post your dish to share your kitchen with others!
                    </h4>

                    <h4 style={styles.description}>
                        Using the navigation bar above, find recipes and start creating your kitchen!
                    </h4>
                </div>
            </div>
        </div>
    )
}

const styles = {

    image: {
        width: 300,
        height: 300,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 80,
        marginBottom: 80
    },

    title: {
        color: '#FF5657',
        marginBottom: 30,
        fontFamily: "sans-serif"
    },

    description: {
        color: '#376C8A',
        fontFamily: "sans-serif"
    }
}

export default Home