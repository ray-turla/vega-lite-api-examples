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
      {
        "title": "Revenue",
        "subtitle": "US$, in thousands",
        "ranges": [150, 225, 300],
        "measures": [220, 270],
        "markers": [250]
      },
      {
        "title": "Profit",
        "subtitle": "%",
        "ranges": [20, 25, 30],
        "measures": [21, 23],
        "markers": [26]
      },
      {
        "title": "Order Size",
        "subtitle": "US$, average",
        "ranges": [350, 500, 600],
        "measures": [100, 320],
        "markers": [550]
      },
      {
        "title": "New Customers",
        "subtitle": "count",
        "ranges": [1400, 2000, 2500],
        "measures": [1000, 1650],
        "markers": [2100]
      },
      {
        "title": "Satisfaction",
        "subtitle": "out of 5",
        "ranges": [3.5, 4.25, 5],
        "measures": [3.2, 4.7],
        "markers": [4.4]
      }
    ]
  },
  "facet": {
    "row": {
      "field": "title",
      "type": "ordinal",
      "header": {"labelAngle": 0, "title": ""}
    }
  },
  "spacing": 10,
  "spec": {
    "layer": [
      {
        "mark": {"type": "bar", "color": "#eee"},
        "encoding": {
          "x": {
            "type": "quantitative",
            "scale": {"nice": false},
            "title": null,
            "field": "ranges[2]"
          }
        }
      },
      {
        "mark": {"type": "bar", "color": "#ddd"},
        "encoding": {
          "x": {
            "type": "quantitative",
            "scale": {"nice": false},
            "title": null,
            "field": "ranges[1]"
          }
        }
      },
      {
        "mark": {"type": "bar", "color": "#ccc"},
        "encoding": {
          "x": {
            "type": "quantitative",
            "scale": {"nice": false},
            "title": null,
            "field": "ranges[0]"
          }
        }
      },
      {
        "mark": {"type": "bar", "color": "lightsteelblue", "size": 10},
        "encoding": {
          "x": {
            "type": "quantitative",
            "scale": {"nice": false},
            "title": null,
            "field": "measures[1]"
          }
        }
      },
      {
        "mark": {"type": "bar", "color": "steelblue", "size": 10},
        "encoding": {
          "x": {
            "type": "quantitative",
            "scale": {"nice": false},
            "title": null,
            "field": "measures[0]"
          }
        }
      },
      {
        "mark": {"type": "tick", "color": "black"},
        "encoding": {
          "x": {
            "type": "quantitative",
            "scale": {"nice": false},
            "title": null,
            "field": "markers[0]"
          }
        }
      }
    ]
  },
  "resolve": {"scale": {"x": "independent"}},
  "config": {"tick": {"thickness": 2}}
}
*/
