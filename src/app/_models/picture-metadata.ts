export class PictureMetadata {
  constructor(
    public name: string,
    public description: string,
    public likedBy: string[],
    public visibleToFollowers: boolean
  ) {  }
}
