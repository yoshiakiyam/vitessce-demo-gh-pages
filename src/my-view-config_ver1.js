export const myViewConfig = {
  version: "1.0.18",
  name: "TCGA-LUAD",
  description: "Gene Prediction",
  datasets: [
    {
      uid: "cell",
      name: "TCGA",
      files: [
        {
          fileType: "anndata.zarr",
          url: "https://www.dropbox.com/scl/fo/cm6qxb1y921n5yivf00ei/AMKubtjAlqKznd3RJl2jHLM?rlkey=m3rft7jxeqedrdk9qwm96hmor&st=44unl5ad&dl=0",
          
          coordinationValues: {
            embeddingType : "cell" 
          
          
          },
          
          
          options: {
            obsFeatureMatrix: { path: "X" },

            obsEmbedding: [{ path: "obsm/spatial", 
              
            embeddingType: "spatial" }],


            obsSets: [{ name: "cell_id", path: "obs/cell_id" }],

            obsLocations: { path: "spatial" }

          }

        },






      /*
        {
          fileType: "image.ome-zarr",
          url: "https://www.dropbox.com/scl/fo/sagjtufle3fxfyy7vg9zd/AAiXOtnstOcnRkE6OUXEkcU?rlkey=2bagznj9ly1t5rv2sdfnxcy2j&st=8n4u9lsq&dl=0",
          options: {
              coordinateTransformations: [
              { type: "scale", scale: [-1, -1, 1] }
            ]
              
            
          },
          coordinationValues: { fileUid: "image" }
        }

  */
      ],
    },

    
  ],


// ##########################################################################################################################


  initStrategy: "auto",
  coordinationSpace: {
    embeddingObsRadiusMode: { A: "manual" },
    embeddingObsRadius: { A: 6 },



    spatialImageLayer: {
        A: [
          {
            type: "raster",
            
            index: 0,
            colormap: null,
            transparentColor: null,
            
            opacity: 1,
            domainType: "Min/Max",
            channels: [
              { selection: { c: 0 }, color: [255, 0, 0], visible: true, slider: [0, 255] },
              { selection: { c: 1 }, color: [0, 255, 0], visible: true, slider: [0, 255] },
              { selection: { c: 2 }, color: [0, 0, 255], visible: true, slider: [0, 255] }
            ]
              
          }
            
        ]
      },

    spatialZoom: { A: -4 },
    spatialTargetX: { A: 2645.15 },
    spatialTargetY: { A: -2093.72},

    embeddingType: {
      A: "spatial"
    },

    embeddingZoom: {
      A: 0
    },


// ##########################################################################################################################


  },
  layout: [
    { component: "scatterplot", 
      coordinationScopes: {
        "embeddingType": "A",
        "embeddingZoom": "A"
      },
      
      
      
      x: 0, y: 0, w: 4, h: 4 }
    
  ],
};