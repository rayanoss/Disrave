import React, { useRef, useEffect} from 'react';
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
const HomeReview = () => {
    let counter = 0;
    const reviewList = useRef();
    const counterLsit = useRef();
    const reviews = [{
        name: "Rayane", 
        film: "Batman",
        note: 7, 
        avis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisi mauris, porta id congue vitae, rhoncus vitae odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
        imgUrl: "https://www.tomsguide.fr/content/uploads/sites/2/2020/04/the-last-of-us-2-ps4-pc.jpg"
    }, 
    {
        name: "Issam", 
        film: "Batman",
        note: 7, 
        avis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisi mauris, porta id congue vitae, rhoncus vitae odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
        imgUrl: "https://www.tomsguide.fr/content/uploads/sites/2/2020/04/the-last-of-us-2-ps4-pc.jpg"
    },
    {
        name: "Alexis", 
        film: "Batman",
        note: 7, 
        avis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisi mauris, porta id congue vitae, rhoncus vitae odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
        imgUrl: "https://www.tomsguide.fr/content/uploads/sites/2/2020/04/the-last-of-us-2-ps4-pc.jpg"
    }]


    const handleLeftReview = () => {
        if (counter === 0) return; 
        counter--; 
        reviewList.current.style.left = (-100 * counter) + '%';
        isActive(counter)
    }

    const handleRightReview = () => {
        if (counter === reviewList.current.children.length - 1) return; 
        counter++; 
        reviewList.current.style.left =  -100 * counter + '%';
        isActive(counter)
    }

    const isActive = (i) => {
        if (counter !== 0) counterLsit.current.children[counter - 1].className = "counter"
        if (counter !== 2) counterLsit.current.children[counter + 1].className = "counter"
        counterLsit.current.children[counter].className = "counter active"
    }

    useEffect(() => {
       isActive(counter)
    }, [counter])

    return (
       <section className='review_section'>
            <div className='section-header'>
                    <h3 className='title'>Témoignages</h3>
                    <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisi mauris, porta id congue vitae, rhoncus vitae odio.</p>
                </div>

           <div className="review_container">
                <div className="review">
                    <IoIosArrowBack className='left_arrow'onClick={handleLeftReview}/>
                    <IoIosArrowForward className='right_arrow'onClick={handleRightReview}/>
                    
                    <ul className='review_list' ref={reviewList}>
                        {reviews.map((review, id) => 
                        <li className='review_item' key={id}>
                                <img src={review.imgUrl} alt="" />
                                <div className='review_text'>
                                    <p className='username'>{review.name}</p>
                                    <p className='user_review_note'>{review.film} - {review.note}/10</p>
                                    <p className='user_review_text'>{review.avis}</p>
                                    </div>
                        </li>)}
                    </ul>
                    
                    <div className="counter-list" ref={counterLsit}>
                        <div className="counter"></div>
                        <div className="counter"></div>
                        <div className="counter"></div>
                    </div>
                </div>    
           </div>
       </section>
    );
};

export default HomeReview;