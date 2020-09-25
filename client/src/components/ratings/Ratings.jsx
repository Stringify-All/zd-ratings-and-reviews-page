import React, { useEffect, useState } from 'react';
import getAverages from '../../Helpers/GetAverageRecs';
import StarRatings from './StarRatings.jsx';

const Ratings = (props) => {
  const [recommendations, setRecommendations] = useState(`${100}%`);

  useEffect(() => {
    if (!props.ratingsData.recommended) {
      setRecommendations(`${100}%`);
    } else {
      setRecommendations(`${getAverages(props.ratingsData.recommended)}%`);
    }
  });

  return (
    <div>
      <h4>Ratings & Reviews</h4>
      <StarRatings />
      <p>
        {recommendations}
        {' '}
        of SCRUMDOGS recommend this product
      </p>
    </div>
  );
};

export default Ratings;
