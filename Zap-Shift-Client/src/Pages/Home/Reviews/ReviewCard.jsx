import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  const { userName, review: testimonial, user_photoURL, user_email } = review;
  return (
    <div className="card">
      <div className="quote">❝</div>
      <p className="text">{testimonial}</p>

      <div className="profile">
        <div className="avatar"></div>
        <div>
          <h4>{userName}</h4>
          <span>{user_email}</span>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;

// "id": "5f47ac10b4f1c03e8c890123",
// "user_email": "emma.watson@example.com",
// "userName": "Emma Watson",
// "delivery_email": "delivery8@example.com",
// "ratings": 4.7,
// "review": "Fast, safe, and friendly delivery service.",
// "parcel_id": "5f47ac10b4f1c03e8c321098",
// "pick_up_email": "pickup8@example.com",
// "user_photoURL": "https://randomuser.me/api/portraits/women/5.jpg",
// "date": "2024-08-20T07:30:00.000Z"
