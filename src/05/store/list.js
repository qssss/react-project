import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';

export default function listReducer(state = [111, 222, 333, 444, 555], action) { //纯函数
    switch (action.type) {
        case 'CHANG_LIST':
            state.push(action.payload)
            return cloneState;
        default:
            return state;
    }
}