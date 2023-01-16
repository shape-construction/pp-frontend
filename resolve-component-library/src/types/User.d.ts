declare interface User {
  /**
   * User id.
   */
  id: string;
  /**
   * Image source for user's avatar.
   */
  avatarUrl?: string;
  /**
   * User's first name.
   */
  firstName?: string;
  /**
   * User's last name.
   */
  lastName?: string;
  /**
   * Concatenated firstName and lastName.
   */
  name: string;
}
