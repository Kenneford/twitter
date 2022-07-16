
function WhoToFollow({users}){
    console.log(users[0].name.first);
    return(
    <div className='userFollow'>
        <div className='user-name'>
        <p>{users[0].name.first} {users[0].name.last} </p>
        <p className='nickName'>{users[0].username}</p>
        </div>
        <button className="follow-btn"> Button </button>
    
        <div className='user-name'>
        <p >{users[1].name.first} {users[1].name.last} </p>
        <p className='nickName'>{users[1].username}</p>
        </div>
        <button className="follow-btn"> Button </button>
    
        <div className='user-name'>
        <p>{users[2].name.first} {users[2].name.last} </p>
        <p className='nickName'>{users[2].username}</p>
        </div>
        <button className="follow-btn"> Button </button>
    </div>

    )}

export default WhoToFollow;

