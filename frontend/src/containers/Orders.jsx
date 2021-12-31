import React, {Fragment, useEffect, useReducer} from "react";

import {fetchLineFoods} from '../apis/line_foods';

import {
  initialState,
  lineFoodsActionTyps,
  lineFoodsReducer,
} from '../reduceres/lineFoods';

export const Orders = () => {
  useEffect(() => {
    dispatchEvent({type: lineFoodsActionTyps.FETCHING});
    fetchLineFoods()
    .then((data) => 
    dispatchEvent({
      type: lineFoodsActionTyps.FETCH_SUCCESS,
      payload: {
        lineFoodsSummary: data
      }
    })
    )
    .catch((e) => console.error(e));
  },[]);
  return (
    <Fragment>
      注文画面
    </Fragment>
  )
}