'use strict';

const tape = require('tape');
const geojsonDistance = require('../index.js');
tape('[True]Test geoson distance measure between 2 features', async (assert) => {
  const x = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [
            43.68215560913086,
            45.679680040331945
          ]
        }
      }
    ]
  };

  const y = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates":
            [
              43.68858,
              45.679680040331945
            ]
        }
      }
    ]
  };

  const match = await geojsonDistance(x, y);
  assert.true(match);
  assert.end();
});

tape('[False]Test geoson distance measure between 2 features', async (assert) => {
  const x = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [
            43.68215560913086,
            45.679680040331945
          ]
        }
      }
    ]
  };

  const y = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates":
            [
              43.68935,
              45.679680040331945
            ]
        }
      }
    ]
  };

  const match = await geojsonDistance(x, y);
  assert.false(match);
  assert.end();
});
