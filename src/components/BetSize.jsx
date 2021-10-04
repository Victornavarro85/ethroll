import React from 'react';
import { number, func } from 'prop-types';
import { FormattedMessage } from 'react-intl';
import ValueSlider from './ValueSlider';

const BetSize = ({
  betSize, min, max, updateBetSize,
}) => (
  <div className="form-group">
    <b>
      <FormattedMessage
        id="betsize.betsize"
        defaultMessage="Bet size"
      />
    </b>
    <ValueSlider value={betSize} updateValue={updateBetSize} step={0.00005} min={min} max={max} addonText="ETH" toFixedDigits={8} />
  </div>
);
BetSize.propTypes = {
  betSize: number.isRequired,
  min: number,
  max: number,
  updateBetSize: func.isRequired,
  step:0.00005
};
BetSize.defaultProps = {
  min: 0.00001,
  max: 0.001,
};

export default BetSize;
