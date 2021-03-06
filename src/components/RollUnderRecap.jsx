import React from 'react';
import { FormattedMessage } from 'react-intl';
import { number } from 'prop-types';
import { getProfit } from '../utils/etheroll-contract';


const RollUnderRecap = ({ betSize, value }) => {
  const chances = value - 1;
  const profit = getProfit(betSize, chances);
  return (
    <div className="row roll-under">
      <div className="col-6">
        <h3>
          <FormattedMessage
            id="rollunderrecap.roll-under"
            defaultMessage="Roll under"
          />
        </h3>
      </div>
      <div className="col-6">
        <h3 className="text-right">{value}</h3>
      </div>
      <div className="col-6">
        <FormattedMessage
          id="rollunderrecap.with-a-wager-of"
          defaultMessage="With a wager of"
        />
      </div>
      <div className="col-6">
        <p className="text-right mb-0">
          {betSize.toFixed(8)}
          &nbsp;
          BNB
        </p>
      </div>
      <div className="col-6">
        <FormattedMessage
          id="rollunderrecap.for-a-profit-of"
          defaultMessage="For a profit of"
        />
      </div>
      <div className="col-6">
        <p className="text-right">
          {profit.toFixed(8)}
          &nbsp;
          BNB
        </p>
      </div>
    </div>
  );
};
RollUnderRecap.propTypes = {
  betSize: number.isRequired,
  value: number.isRequired,
};

export default RollUnderRecap;
