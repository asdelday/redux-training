import { connect } from 'react-redux';
import { HeroDetails } from 'components';

const mapStateToProps = (state) => ({
  heroSelected: state.heroes.heroSelected,
});

export default connect(mapStateToProps)(HeroDetails);
