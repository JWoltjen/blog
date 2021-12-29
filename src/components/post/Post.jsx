import './Post.css'
import bg from '../../assets/bg.png'

export default function Post() {
    return (
        <div className="post">
            <img className='postImg' src={bg} alt=''/>
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className='postTitle'>
                    Lorem ipsum dolor sit amot
                </span>
                <hr/>
                <span classname="postDate">1 hour ago</span>
            </div>
            <p className='postDesc'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi similique obcaecati porro nisi recusandae, mollitia ipsam voluptate officiis fugit provident sint facere quis voluptates aperiam natus suscipit quisquam. Sint, dolor.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam commodi repudiandae deserunt saepe maiores quos iste esse! Architecto, consequatur? Temporibus provident eaque aut placeat. Itaque quae culpa accusantium atque possimus?
            </p>
        </div>
    )
}
