// const { createScopedThreejs } = require('threejs-miniprogram')
import { createScopedThreejs } from 'threejs-miniprogram'

const { renderCube } = require('../test-cases/cube')
const { renderCubes } = require('../test-cases/cubes')
const { renderSphere } = require('../test-cases/sphere')
// const { renderModel } = require('../test-cases/models/robotModel')
// const { renderModel } = require('../test-cases/models/tkfModel')
// const { renderModel } = require('../test-cases/models/dlamModel')
// const { renderModel } = require('../test-cases/models/fhModel')
const { renderModel } = require('../test-cases/models/femaleModel')

const app = getApp()

Page({
  data: {},
  onLoad: function () {
    wx.createSelectorQuery()
      .select('#webgl')
      .node()
      .exec((res) => {
        const canvas = res[0].node
        const THREE = createScopedThreejs(canvas)
        
        // renderSphere(canvas, THREE)
        // renderCube(canvas, THREE)
        // renderCubes(canvas, THREE)
        renderModel(canvas, THREE)
      })
  },
})
