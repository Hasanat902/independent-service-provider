import React from 'react';
import customer1 from '../../images/customer/user1.jpg';
import customer2 from '../../images/customer/user2.jpg';
import customer3 from '../../images/customer/user3.jpg';
import Comment from '../Comment/Comment';

const Comments = () => {

    const comments = [
        {id: 1, img: customer1, name: "Nathan Smith", describe: "This is one of the best homemade food catering service.You guys can order food from them for your office and home."},
        {id: 2, img: customer2, name: "Jason Holder", describe: "I tried so many homemade food but their food taste is so unique and good. I recommend their food"},
        {id: 3, img: customer3, name: "Steve Waugh", describe: "One of the best homemade food ever.And their food is fresh and hygienic.You can order from them"}
    ]

    return (
        <div className='container'>
            <h2 className='text-center my-5'>What Our Customer Say?</h2>
            <div className="row">
                {
                    comments.map(comment => <Comment key={comment.id} comment={comment}></Comment>)
                }
            </div>
            
        </div>
    );
};

export default Comments;