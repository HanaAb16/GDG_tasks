const UserCard = ({name , email , age}) => {
    const cardStyle = {
        backgroundColor: "#add8e6",
        padding: "20px",
        borderRadius: "10px",
        textAlign: "center",
        width: "250px",
        margin: "10px auto",
    };
    return (
        <div style = {cardStyle}>
        <h2>Name: {name}</h2>
        <h3>Email: {email}</h3>
        <h3>Age: {age}</h3>
    </div>
    ) ; 
};
export default UserCard;