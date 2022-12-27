import PropTypes from 'prop-types';
import StatisticsCSS from './Statistic.module.css';

export const Statistics = ({ title = null, stats }) => {
  const liRender = stats.map(stat => {
    return (
      <li
        key={stat.id}
        className={StatisticsCSS.item}
      >
        <span className={StatisticsCSS.label}>{stat.label}</span>
        <span className={StatisticsCSS.percentage}>{stat.percentage}%</span>
      </li>
    );
  });
  return (
    <section className={StatisticsCSS.statistics}>
      {title && <h2 className={StatisticsCSS.title}>{title}</h2>}

      <ul className={StatisticsCSS.statList}>{liRender}</ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
