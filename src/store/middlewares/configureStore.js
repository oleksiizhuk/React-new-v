// import { applyMiddleware } from 'redux';
// import thunkMiddleware from 'redux-thunk';
// // eslint-disable-next-line import/no-extraneous-dependencies
// import { composeWithDevTools } from 'redux-devtools-extension';
//
// import { configureStore } from '@reduxjs/toolkit';
// import monitorReducersEnhancer from './monitorReducerEnhancer';
// import loggerMiddleware from './logger';
// import { rootReducer } from '../reducers/reducers';
//
// export default function configureStores(preloadedState) {
//   const middlewares = [loggerMiddleware, thunkMiddleware];
//   const middlewareEnhancer = applyMiddleware(...middlewares);
//
//   const enhancers = [middlewareEnhancer, monitorReducersEnhancer];
//   const composedEnhancers = composeWithDevTools(...enhancers);
//
//   const store = configureStore(rootReducer, preloadedState, composedEnhancers);
//
//   return store;
// }
