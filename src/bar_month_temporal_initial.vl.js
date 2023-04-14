import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Using `labelExpr` to show only initial letters of month names.",
  "data": {"url": "data/seattle-weather.csv"},
  "mark": "bar",
  "encoding": {
    "x": {
      "timeUnit": "month",
      "field": "date",
      "axis": {
        "labelAlign": "left",
        "labelExpr": "datum.label[0]"
      }
    },
    "y": {"aggregate": "mean", "field": "precipitation"}
  }
}
*/
