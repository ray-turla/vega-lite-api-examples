import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Vega-Lite version of bar chart from https://observablehq.com/@d3/learn-d3-scales.",
  "width": 400,
  "data": {
    "values": [
      {"name": "🍊", "count": 21},
      {"name": "🍇", "count": 13},
      {"name": "🍏", "count": 8},
      {"name": "🍌", "count": 5},
      {"name": "🍐", "count": 3},
      {"name": "🍋", "count": 2},
      {"name": "🍎", "count": 1},
      {"name": "🍉", "count": 1}
    ]
  },
  "encoding": {
    "y": {"field": "name", "type": "nominal", "sort": "-x", "title": null},
    "x": {"field": "count", "type": "quantitative", "title": null}
  },
  "layer": [{
    "mark": "bar",
    "encoding": {
      "color": {
        "field": "count",
        "type": "quantitative",
        "title": "Number of fruit"
      }
    }
  }, {
    "mark": {
      "type": "text",
      "align": "right",
      "xOffset": -4,
      "aria": false
    },
    "encoding": {
      "text": {"field": "count", "type": "quantitative"},
      "color": {
        "condition": {
          "test": {"field": "count", "gt": 10},
          "value": "white"
        },
        "value": "black"
      }
    }
  }]
}
*/
