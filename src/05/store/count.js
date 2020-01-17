import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';

export default function countReducer(state = [], action) { //纯函数
    switch (action.type) {
        case 'CHANG_LIST':
            let cloneState = {...state }
            cloneState.list = [...cloneState.list, action.payload]
                // cloneState.list.push(action.payload);
            return cloneState;
    }
}