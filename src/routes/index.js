import React from 'react';
import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';
import App from '../components/App';
// Webpack 2 supports ES2015 `System.import` by auto-
// chunking assets. Check out the following for more:
// https://gist.github.com/sokra/27b24881210b56bbaff7#code-splitting-with-es6

const ProjectDetail = (nextState, cb) => {
  System.import('../components/ProjectDetail')
    .then(module => cb(null, module.default))
    .catch((e) => { throw e; });
}

const Home = (nextState, cb) => {
  System.import('../components/Home')
    .then(module => cb(null, module.default))
    .catch((e) => { throw e; });
}

const ProjectsContainer = (nextState, cb) => {
    System.import('../redux/containers/ProjectsContainer')
    .then(module => cb(null, module.default))
    .catch((e) => { throw e; });
}

const ProjectDetailContainer = (nextState, cb) => {
    System.import('../redux/containers/ProjectDetailContainer')
    .then(module => cb(null, module.default))
    .catch((e) => { throw e; });
}

const ProjectDetailEditContainer = (nextState, cb) => {
    System.import('../redux/containers/ProjectDetailEditContainer')
    .then(module => cb(null, module.default))
    .catch((e) => { throw e; })
}

// We use `getComponent` to dynamically load routes.
// https://github.com/reactjs/react-router/blob/master/docs/guides/DynamicRouting.md
const routes = (
  <Route path="/" component={App}>
    <IndexRoute getComponent={Home} />
    <Route path={"projects"} getComponent={ProjectsContainer} >
        <Route path={":id"} getComponent={ProjectDetail} />
    </Route>
  </Route>
);

//These are deprecated route components
// <Route path={"projects/:id"} getComponent={ProjectDetailContainer} />
// <Route path={"projects/:id/edit"} getComponent={ProjectDetailEditContainer} name="edit" />

// Unfortunately, HMR breaks when we dynamically resolve
// routes so we need to require them here as a workaround.
// https://github.com/gaearon/react-hot-loader/issues/288
if (module.hot) {
  require('../components/Home');    // eslint-disable-line global-require
  require('../redux/containers/ProjectsContainer');
  require('../redux/containers/ProjectDetailContainer');
  require('../redux/containers/ProjectDetailEditContainer');
  require('../components/ProjectDetail');
}

export default routes;
