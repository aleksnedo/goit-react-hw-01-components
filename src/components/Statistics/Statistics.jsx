import PropTypes from 'prop-types';
import { Section, Title } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title !== undefined && <Title>{title}</Title>}

      <ul>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li key={id}>
              <span>{label}</span>
              <span>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
