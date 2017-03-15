// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

  return [
    {
      path: '/prueba',
      name: 'prueba',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/Prueba/reducer'),
          import('containers/Prueba/sagas'),
          import('containers/Prueba'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('prueba', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/available',
      name: 'available',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/Available/reducer'),
          import('containers/Available/sagas'),
          import('containers/Available'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('available', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/',
      name: 'homePage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/HomePage/reducer'),
          import('containers/HomePage/sagas'),
          import('containers/HomePage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('homePage', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/quotation',
      name: 'quotation',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/Quotation/reducer'),
          import('containers/Quotation/sagas'),
          import('containers/Quotation'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('quotation', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/reserve/:carId',
      name: 'reserve',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/Reserve/reducer'),
          import('containers/Reserve/sagas'),
          import('containers/Reserve'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('reserve', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },  {
      path: '/reserve-list',
      name: 'reserveList',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/ReserveList/reducer'),
          import('containers/ReserveList/sagas'),
          import('containers/ReserveList'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('reserveList', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/*',
      name: 'notfound',
      getComponent(nextState, cb) {
          import('containers/NotFoundPage')
            .then(loadModule(cb))
            .catch(errorLoading);
      },
    },
  ];
}
