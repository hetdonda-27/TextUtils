export default function About(props) {
    const myStyle = {
        color: props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor: props.mode === 'dark' ? '#042743' : 'white',
        padding: '20px',
        borderRadius: '10px',
        border: '1px solid',
        borderColor: props.mode === 'dark' ? 'white' : '#042743',
    };

    return (
        <div className="container">
            <h2 className="my-4" style={{ color: props.mode === 'light' ? '#042743' : 'white'}}>About TextUtils</h2>
            <div style={myStyle}>
                <p>
                    TextUtils is a utility that helps you manipulate your text in the way you want.
                    You can convert text to uppercase, lowercase, remove extra spaces, and much more.
                </p>
                <p>
                    This app is built with React and features dynamic theme support (Light/Dark mode), 
                    simple routing, and an intuitive UI to help enhance your productivity with text.
                </p>
            </div>
        </div>
    );
}
