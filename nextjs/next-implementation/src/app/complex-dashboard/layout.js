export default function Dashboard({user,features,analytics,login}){
    const isLoggedIn = false;//check whether it is logedin conditional routing
    return(
       isLoggedIn? <div>{login}</div>:
        <>
        <div className="user">
            {user}
        </div>
        <div className="features">
            {features}
        </div>
        <div className="analytics">
            {analytics}
        </div>
        </>
    )
}