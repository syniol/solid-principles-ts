export declare interface Uploader {
    upload(
        cluster: string,
        fileName: string,
        content: string,
        directory?: string
    ): void

}
