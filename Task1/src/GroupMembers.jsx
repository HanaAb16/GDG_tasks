export default function GroupMembers(){
    const members = ['Helen' , 'Abebe' , 'Girma' , 'Blen' , 'Selam']
    return(
        <ul>
        {members.map((member , index) => (
        <li key = {index}>{member}</li> )
        )}
        </ul>
    );
}