import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';
import PropTypes from 'prop-types';

import {
  loadReviews,
  reviewsLoadedSelector,
} from '../../redux/features/reviews';
import { loadUsers, usersLoadedSelector } from '../../redux/features/users';

import Loader from '../loader';

const Reviews = ({
  reviews,
  restaurantId,
  loadReviews,
  loadUsers,
  usersLoaded,
  reviewsLoaded,
}) => {
  useEffect(() => {
    loadUsers();
    loadReviews(restaurantId);
  }, [loadUsers, loadReviews, restaurantId]);

  if (!usersLoaded || !reviewsLoaded) return <Loader />;

  return (
<<<<<<< HEAD
    <div className={styles.reviews}>
      {reviews.map((id) => (
        <Review key={id} id={id} />
=======
    <div className={styles.reviews} data-id="reviews">
      {reviews?.map((review) => (
        <Review key={review.id} {...review} />
>>>>>>> origin/master
      ))}
      <ReviewForm restaurantId={restaurantId} />
    </div>
  );
};
Reviews.propTypes = {
  reviews:  PropTypes.arrayOf(
        PropTypes.shape({
           id: PropTypes.string.isRequired,
         }).isRequired
        ).isRequired,
}


Reviews.propTypes = {
  restaurantId: PropTypes.string,
  reviews: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

const mapStateToProps = (state, props) => ({
  reviewsLoaded: reviewsLoadedSelector(state, props),
  usersLoaded: usersLoadedSelector(state, props),
});

const mapDispatchToProps = { loadReviews, loadUsers };

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
