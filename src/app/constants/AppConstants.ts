
export class AppConstants {

    public static BASE_URL: string = "http://localhost:8080";


    public static USER_DETAILS: string = AppConstants.BASE_URL + "/api/user-details";
    public static PROFILE_PICTURE: string = AppConstants.BASE_URL + "/api/profile-picture";

    public static ALL_SUBSCRIBERS: string = AppConstants.BASE_URL + "/api/subscribers/all";
    public static ADD_SUBSCRIBER: string = AppConstants.BASE_URL + "/api/subscribers/add/";
    public static REMOVE_SUBSCRIBER: string = AppConstants.BASE_URL + "/api/subscribers/remove/";

    public static LOGIN: string = AppConstants.BASE_URL + "/api/token/generate-token";
    public static RENAME_PICTURE: string = AppConstants.BASE_URL + "/api/rename";
    public static UPLOAD_IMAGE: string = AppConstants.BASE_URL + "/api/upload-image";

    public static MY_GALLERY: string = AppConstants.BASE_URL + "/api/my-gallery";
    public static DOWNLOAD_IMAGE_META: string = AppConstants.BASE_URL + "/api/download-image-metadata/";
    public static DOWNLOAD_IMAGE: string = AppConstants.BASE_URL + "/api/download-image/";
    public static DELETE_IMAGE: string = AppConstants.BASE_URL + "/api/delete-image/";

    public static IMAGE_VISIBILITY_HIDE: string = AppConstants.BASE_URL + "/api/image-visibility/hide/";
    public static IMAGE_VISIBILITY_UNHIDE: string = AppConstants.BASE_URL + "/api/image-visibility/unhide/";

    public static NEWSFEED: string = AppConstants.BASE_URL + "/api/newsfeed";
    public static LIKE: string = AppConstants.BASE_URL + "/api/like/";
    public static DISLIKE: string = AppConstants.BASE_URL + "/api/dislike/";
    public static PICTURE_COMMENT: string = AppConstants.BASE_URL + "/api/comment/";

}