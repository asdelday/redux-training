import { connect } from 'react-redux';
import { HeroList } from 'components';
import { getHeroes, selectHero } from '../../redux/modules/heroes';

const mapStateToProps = (state) => ({
  heroList: state.heroes.heroList,
  heroSelected: state.heroes.heroSelected,
  isLoading: state.heroes.isLoading,
  error: state.heroes.error,
});

export default connect(mapStateToProps, { getHeroes, selectHero })(HeroList);
