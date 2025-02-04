import { useSelector } from "react-redux";
import { selectAll } from "./postsSlice";
function PostList(){
    const postlist = useSelector(selectAll);
    const listRendering = postlist.map((item)=>{
       return <>
            <div key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
            </div>
        </>
    })
    return(
        <>
            {listRendering}

        </>
    );
}
export default PostList;