
function WhoToFollow({users}){
    if (!users || users.length==0) {
        return <p>Loading...</p>
        
    }
    console.log(users);
    return(
<div>
<div className="follow">
    <h2>Who to follow</h2>
    <div className='userFollow'>
        <img src={users[0].picture} alt='user-image' width='50px'/>
            <div className='user-name'>
        <p>{users[0].name.first} {users[0].name.last} </p>
        <p className='nickName'>{users[0].username}</p>
            </div>
        <button className="follow-btn"> Button </button>
    </div>
    
    <div className='userFollow'>
        <img src={users[1].picture} alt='user-image' width='50px'/>
            <div className='user-name'>
        <p >{users[1].name.first} {users[1].name.last} </p>
        <p className='nickName'>{users[1].username}</p>
            </div>
        <button className="follow-btn"> Button </button>
    </div>

    <div className='userFollow'>
        <img src={users[2].picture} alt='user-image' width='50px'/>
            <div className='user-name'>
        <p>{users[2].name.first} {users[2].name.last} </p>
        <p className='nickName'>{users[2].username}</p>
            </div>
        <button className="follow-btn"> Button </button>
    </div>
</div>
</div>
    )}

export default WhoToFollow;

