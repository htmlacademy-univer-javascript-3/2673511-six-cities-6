import React, { useState } from 'react';
import { Offer } from '../../mocks/offers';
import OfferCard from '../OfferCard/OfferCard';

type OffersListProps = {
  offers: Offer[];
};

const OffersList: React.FC<OffersListProps> = ({ offers }) => {
  const [activeOfferId, setActiveOfferId] = useState<number | null>(null);

  const handleMouseEnter = (offerId: number) => {
    setActiveOfferId(offerId);
  };

  const handleMouseLeave = () => {
    setActiveOfferId(null);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <div
          key={offer.id}
          onMouseEnter={() => handleMouseEnter(offer.id)}
          onMouseLeave={handleMouseLeave}
          className={activeOfferId === offer.id ? 'place-card--active' : ''}
        >
          <OfferCard offer={offer} />
        </div>
      ))}
    </div>
  );
};

export default OffersList;
