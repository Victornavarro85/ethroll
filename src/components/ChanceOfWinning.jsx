import React from 'react';
import { number, func } from 'prop-types';
import { FormattedMessage } from 'react-intl';
import ValueSlider from './ValueSliderW';

const ChanceOfWinning = ({
  chances, min, max, updateChances,
}) => (
  <div className="form-group">
    <b>
      <FormattedMessage
        id="chanceofwinning.chanceofwinning"
        defaultMessage="Chance of winning"
      />
    </b>
    <ValueSlider
      value={chances}
      min={min}
      max={max}
      updateValue={updateChances}
      addonText="&nbsp;%&nbsp;"
      dots step={1} defaultValue={50} dotStyle={{ borderColor: 'orange' }} activeDotStyle={{ borderColor: 'yellow' }}
    />
  </div>
);
ChanceOfWinning.propTypes = {
  chances: number.isRequired,
  min: number,
  max: number,
  updateChances: func.isRequired,
};
ChanceOfWinning.defaultProps = {
  min: 0,
  max: 100,
};

export default ChanceOfWinning;
