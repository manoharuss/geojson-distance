'use strict';

const turfBbox = require('@turf/bbox').default;

async function geojsonDistance(x, y){
  // x and y are 2 FeatureCollections
  const bbox1 = turfBbox(x);
  const bbox2 = turfBbox(y);
  const euclideanDistance = Math.sqrt(Math.pow(bbox1[0] - bbox2[0],2) + Math.pow(bbox1[1] - bbox2[1],2) + Math.pow(bbox1[2] - bbox2[2],2) + Math.pow(bbox1[3] - bbox2[3],2))
  // Bbox distance within 500m
  return euclideanDistance < 0.00909 ? true : false;
};
module.exports = geojsonDistance;