export type GalleryImage = {
  /**
   * The id of the image.
   */
  id: string;
  /**
   * Flag that states if the current image is being uploaded
   */
  isUploading?: boolean;
  /**
   * The url of a large version of the image. Used for editing.
   */
  imageLargeUrl: string;
  /**
   * The url of a medium version of the image. Used for the carousel.
   */
  imageMediumUrl: string;
  /**
   * The original url of the image.
   */
  imageOriginalUrl: string;
  /**
   * The url of a thumbnail version of the image. Used for the thumbnail's strip.
   */
  imageThumbnailUrl: string;
  /**
   * The url of a download version of the image. Used for downloading with attachment disposition.
   */
  imageDownloadUrl: string;
};
