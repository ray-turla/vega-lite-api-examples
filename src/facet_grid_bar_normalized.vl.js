import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A simple grid of bar charts to compare performance data.",
  "data": {
    "values": [
      {"a": "a1", "b": "b1", "c": "x", "p": "0.14"},
      {"a": "a1", "b": "b1", "c": "y", "p": "0.60"},
      {"a": "a1", "b": "b1", "c": "z", "p": "0.03"},
      {"a": "a1", "b": "b2", "c": "x", "p": "0.80"},
      {"a": "a1", "b": "b2", "c": "y", "p": "0.38"},
      {"a": "a1", "b": "b2", "c": "z", "p": "0.55"},
      {"a": "a1", "b": "b3", "c": "x", "p": "0.11"},
      {"a": "a1", "b": "b3", "c": "y", "p": "0.58"},
      {"a": "a1", "b": "b3", "c": "z", "p": "0.79"},
      {"a": "a2", "b": "b1", "c": "x", "p": "0.83"},
      {"a": "a2", "b": "b1", "c": "y", "p": "0.87"},
      {"a": "a2", "b": "b1", "c": "z", "p": "0.67"},
      {"a": "a2", "b": "b2", "c": "x", "p": "0.97"},
      {"a": "a2", "b": "b2", "c": "y", "p": "0.84"},
      {"a": "a2", "b": "b2", "c": "z", "p": "0.90"},
      {"a": "a2", "b": "b3", "c": "x", "p": "0.74"},
      {"a": "a2", "b": "b3", "c": "y", "p": "0.64"},
      {"a": "a2", "b": "b3", "c": "z", "p": "0.19"},
      {"a": "a3", "b": "b1", "c": "x", "p": "0.57"},
      {"a": "a3", "b": "b1", "c": "y", "p": "0.35"},
      {"a": "a3", "b": "b1", "c": "z", "p": "0.49"},
      {"a": "a3", "b": "b2", "c": "x", "p": "0.91"},
      {"a": "a3", "b": "b2", "c": "y", "p": "0.38"},
      {"a": "a3", "b": "b2", "c": "z", "p": "0.91"},
      {"a": "a3", "b": "b3", "c": "x", "p": "0.99"},
      {"a": "a3", "b": "b3", "c": "y", "p": "0.80"},
      {"a": "a3", "b": "b3", "c": "z", "p": "0.37"}
    ]
  },
  "spacing": 5,
  "facet": {
    "row": {"field": "a", "title": "Factor A", "header": {"labelAngle": 0}},
    "column": {"field": "b", "title": "Factor B"}
  },
  "spec": {
    "width": 60,
    "height": {"step": 8},
    "mark": "bar",
    "encoding": {
      "y": {"field": "c", "type": "nominal", "axis": null},
      "x": {
        "field": "p",
        "type": "quantitative",
        "axis": {"format": "%"},
        "title": null
      },
      "color": {
        "field": "c",
        "type": "nominal",
        "legend": {"orient": "bottom", "titleOrient": "left"},
        "title": "settings"
      }
    }
  }
}
*/
