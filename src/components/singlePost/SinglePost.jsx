import "./SinglePost.css"

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img 
                    src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                    alt="" 
                    className="singlePostImg"
                />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet.
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Jeff</b></span>
                    <span className="singlePostDate">Date <b>1 hour ago</b></span>
                </div>
                <p className="singlePostDesc">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus corrupti nihil nostrum voluptatem, sed tenetur vitae molestias deleniti nulla, esse eveniet soluta debitis beatae aspernatur placeat adipisci, ipsa natus laborum!
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque magnam cupiditate eligendi ex a perspiciatis id, earum voluptatibus asperiores at quia temporibus reprehenderit tempora hic ab. Reiciendis quasi enim placeat.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga enim, obcaecati dignissimos architecto ad itaque incidunt consequuntur ex autem minus sequi aperiam placeat, quia quaerat corporis tempora, eaque dolores veniam? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, molestiae at nisi nam delectus quae debitis modi dolor voluptatem, soluta voluptate maxime? Est dolorum nam, error laudantium odit commodi eos.
                </p>
            </div>
        </div>
    )
}
