import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './home.scss';

const Home = () => {
    return <div>Example</div>;
};

Home.propTypes = {};

const mapStateToProps = () => ({});

export default withRouter(connect(mapStateToProps)(Home));