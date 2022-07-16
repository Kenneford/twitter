
function WhoToFollow({users}){
    if (!users || users.length==0) {
        return <p>Loading...</p>
        
    }
    
    return(
    <div>

    <div className='userFollow'>
        <img src={users[0].picture} alt='user-image1'/>
            <div className='user-name'>
        <p>{users[0].name.first} {users[0].name.last} </p>
        <p className='nickName'>{users[0].username}</p>
            </div>
        <button className="follow-btn"> Follow </button>
    </div>

    <div className='userFollow'>
        <img src={users[1].picture} alt='user-image2'/>
            <div className='user-name'>
        <p>{users[1].name.first} {users[1].name.last} </p>
        <p className='nickName'>{users[1].username}</p>
            </div>
        <button className="follow-btn"> Follow </button>
    </div>

    <div className='userFollow'>
        <img src={users[2].picture} alt='user-image3'/>
            <div className='user-name'>
        <p>{users[2].name.first} {users[2].name.last} </p>
        <p className='nickName'>{users[2].username}</p>
            </div>
        <button className="follow-btn"> Follow </button>
    </div>

    </div> )}
export default WhoToFollow;

