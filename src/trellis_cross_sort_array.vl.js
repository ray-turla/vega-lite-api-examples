import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {
    "values": [
      {"a": "A", "b": "X", "x": 1, "y": 4},
      {"a": "A", "b": "Y", "x": 3, "y": 5},
      {"a": "A", "b": "Z", "x": 5, "y": 6},
      {"a": "B", "b": "X", "x": 2, "y": 7},
      {"a": "B", "b": "Y", "x": 9, "y": 8},
      {"a": "B", "b": "Z", "x": 8, "y": 9},
      {"a": "C", "b": "X", "x": 7, "y": 1},
      {"a": "C", "b": "Y", "x": 6, "y": 2},
      {"a": "C", "b": "Z", "x": 4, "y": 3}
    ]
  },
  "transform": [{
    "joinaggregate": [{"op": "median", "field": "x", "as": "median_x_by_a"}],
    "groupby": ["a"]
  }, {
    "joinaggregate": [{"op": "median", "field": "y", "as": "median_y_by_b"}],
    "groupby": ["b"]
  }],
  "facet": {
    "column": {"field": "a", "sort": ["B", "C", "A"]},
    "row": {"field": "b", "sort": ["Y", "X", "Z"]}
  },
  "spec": {
    "width": 50,
    "height": 50,
    "layer": [{
      "mark": "point",
      "encoding": {
        "x": {"field": "x", "type": "quantitative", "title": "x"},
        "y": {"field": "y", "type": "quantitative", "title": "y"}
      }

    }, {
      "mark": "rule",
      "encoding": {
        "x": {"aggregate": "median", "field": "median_x_by_a"}
      }
    }, {
      "mark": "rule",
      "encoding": {
        "y": {"aggregate": "median", "field": "median_y_by_b"}
      }
    }]
  }
}
*/
