import PropTypes from 'prop-types';
import css from 'components/Statistics/Statistics.module.css';
import { getRandomHexColor } from '../../utils/colorSwitcher';

const Statistics = props => {
    const { title, stats } = props;
  
    return (
      <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}
  
        <ul className={css.statList}>
          {stats.map(({ id, label, percentage }) => (
            <li
              key={id}
              className={css.item} style={{ backgroundColor: getRandomHexColor() }}
            >
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    );
};

Statistics.propTypes = {
    title: PropTypes.string, //не обов'язковий prop
    stats: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default Statistics;