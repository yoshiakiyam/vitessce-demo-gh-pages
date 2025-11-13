export const myViewConfig = {
  version: "1.0.18",
  name: "TCGA-LUAD",
  description: "Gene Prediction",
  datasets: [
    {
      uid: "Gene Predictions",
      name: "TCGA",
      files: [
        {
          fileType: "anndata.zarr",
          url: "https://www.dropbox.com/scl/fo/cm6qxb1y921n5yivf00ei/AMKubtjAlqKznd3RJl2jHLM?rlkey=m3rft7jxeqedrdk9qwm96hmor&st=44unl5ad&dl=0",
          
          coordinationValues: {
            embeddingType : "spatial" 
          
          
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
    embeddingType: {
      spatial: "spatial",
    },



// ##########################################################################################################################


  },
  layout: [
    { 
      component: "scatterplot", 
      x: 0, y: 0, w: 4, h: 4,

      coordinationScopes: {
        embeddingType: "spatial"
      },
      
      
      
      
    },
    
  ],
};