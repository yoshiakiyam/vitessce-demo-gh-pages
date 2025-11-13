export const myViewConfig = {
  version: "1.0.17",
  name: "Habib et al., 2017 Nature Methods",
  description: "Archived frozen adult human post-mortem brain tissue profiled by snRNA-seq (DroNc-seq)",
  datasets: [
    {
      uid: "habib-2017",
      name: "Habib 2017",
      files: [
        {
          fileType: "anndata.zarr",
          url: "https://storage.googleapis.com/vitessce-demo-data/habib-2017/habib17.processed.h5ad.zarr",
          coordinationValues: {
            embeddingType: "UMAP",
          },
          options: {
            obsFeatureMatrix: {
              path: "X",
              initialFeatureFilterPath: "var/top_highly_variable",
            },
            obsEmbedding: {
              path: "obsm/X_umap",
            },
            obsSets: [
              {
                name: "Cell Type",
                path: "obs/CellType",
              },
            ],
          },
        },
      ],
    },
  ],




  initStrategy: "auto",




  coordinationSpace: {
    embeddingType: {
      UMAP: "UMAP",
    },
    featureValueColormapRange: {
      A: [0, 0.35],
    },
  },



  layout: [

    {
      component: "scatterplot",
      h: 4, w: 4, x: 0, y: 0,
      coordinationScopes: {
        embeddingType: "UMAP",
        featureValueColormapRange: "A",
      },
    },
  ],
};