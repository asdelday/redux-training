import { connect } from 'react-redux';
import { changeFontSize } from 'redux/modules/app';
import { App } from 'components';

const mapStateToProps = (state) => ({
  fontSize: state.app.fontSize,
});

export default connect(mapStateToProps, { changeFontSize })(App);
