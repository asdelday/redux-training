import { connect } from 'react-redux';
import { HeroDetails } from 'components';
import { getHero } from '../../redux/modules/heroes';

const mapStateToProps = (state) => ({
  heroSelected: state.heroes.heroSelected,
});

export default connect(mapStateToProps, { getHero })(HeroDetails);
