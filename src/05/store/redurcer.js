// import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import { combineReducers } from 'redux'
import countReducer from './count'
import listReducer from './list'

export default combineReducers({
    count: countReducer,
    list: listReducer
})