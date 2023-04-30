# threejs_performance

## A. To run the code:

```
npm i -g serve
serve -l 1234
```

## B. Test the performance:

Open a broswer ( e.g. Chrome) and visit the following pages to check the rendering performance. The FPS is based on my Laptop. Other's computers may have slightly difference in performance.

### 1. Original page

http://localhost:1234

FPS: < 10

### 2. mergebuffer page

http://localhost:1234/mergebuffer

FPS: ~140

    mergeBufferGeometries is a function in Three.js that combines multiple geometries into a single geometry and material into one. This will reduce the number of draw calls by combining the geometries of multiple objects and rendering them as a single object.

### 3. instancemesh page

http://localhost:1234/instancemesh

FPS: ~140

    InstancedMesh is a class in Three.js that allows you to render multiple instances of the same object (same geometry and material) with a single draw call where the GPU renders multiple instances of an object with a single draw call, reducing the overhead involved in managing and rendering individual objects.

Both mergebuffer and instancemesh require the BufferGeometryUtils classes from the Three.js repository : three/examples/jsm/utils/BufferGeometryUtils.js
