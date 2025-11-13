const vc = new VitessceConfig({ schemaVersion: "1.0.15", name: "My config" });
const coordinationValues = {
  obsType: "cell",
  featureType: "gene",
  featureValueType: "expression"
};
const options = {
  obsPoints: {
    // Accepts the same options as obsPoints.anndata.zarr
    path: "obsm/X_spatial"
  },
  obsSpots: {
    // Accepts the same options as obsSpots.anndata.zarr
    path: "obsm/X_spatial"
  },
  obsSegmentations: {
    // Accepts the same options as obsSegmentations.anndata.zarr
    path: "obsm/X_segmentations"
  },
  obsLocations: {
    // Accepts the same options as obsLocations.anndata.zarr
    path: "obsm/X_centroids"
  },
  obsEmbedding: [
    {
      // Accepts a superset of the options from obsEmbedding.anndata.zarr
      // Should point to an array of (d1, d2) coordinate pairs, one coordinate pair per obs/cell.
      path: "obsm/X_umap",
      // An embeddingType must be specified to distinguish between multiple embedding arrays.
      embeddingType: "UMAP"
    },
    {
      path: "obsm/X_pca",
      dims: [4, 5],
      embeddingType: "PCA"
    }
  ],
  obsLabels: [
    {
      // Accepts a superset of the options from obsLabels.anndata.zarr
      path: "obs/alt_cell_id",
      // An obsLabelsType must be specified to distinguish between multiple label columns.
      obsLabelsType: "Alternate cell ID"
    }
  ],
  obsSets: [
    // Accepts the same options as obsSets.anndata.zarr
    {
      name: "Cell Type Annotations",
      path: ["obs/cell_type_coarse", "obs/cell_type_fine"]
    }
  ],
  obsFeatureMatrix: {
    // Accepts the same options as obsFeatureMatrix.anndata.zarr
    // Should point to the observation-by-feature matrix
    path: "X"
  }
};
const dataset = vc
  .addDataset("My dataset")
  .addFile({
    fileType: ft.ANNDATA_ZARR,
    url: "https://example.com/my_adata.zarr",
    coordinationValues,
    options,
  });