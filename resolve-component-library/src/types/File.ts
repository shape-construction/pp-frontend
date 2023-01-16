export interface MediaUrl {
  /**
   * The url of a large version of the image file. Used for editing.
   */
  large: string;
  /**
   * The url of a medium version of the image file. Used for the carousel.
   */
  medium: string;
  /**
   * The url of a thumbnail version of the image file. Used for the thumbnail's strip.
   */
  thumbnail: string;
}

export interface File {
  /**
   * id of file
   */
  id: string;
  /**
   * Size of the file in bytes
   */
  byteSize?: number;
  /**
   * File's caption to be displayed
   */
  caption?: string;
  /**
   * Date of creation
   */
  createdAt?: string;
  /**
   * Extension of the file
   */
  extension: string;
  /**
   * Name of the file
   */
  filename: string;
  /**
   * Indicates if the file is still being uploaded
   */
  isUploading?: boolean;
  /**
   * The percentage of upload progress
   */
  uploadProgress?: number;
  /**
   * The URL to download the file
   */
  downloadUrl: string;
  /**
   * the URLs associated with the file
   */
  mediaUrl?: MediaUrl;
}

export interface ImageFile extends File {
  mediaUrl: MediaUrl;
}
