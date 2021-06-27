import { S3 } from 'aws-sdk'

import { Uploader } from '../type'

export class AmazonS3Storage implements Uploader {
    readonly #client: S3

    public constructor(client?: S3) {
        this.#client = client || new S3()
    }

    public async upload(
        cluster: string,
        fileName: string,
        content: string,
        directory?: string
    ): Promise<void> {
        const path = directory ? `${directory}/${fileName}` : fileName

        await this.#client
            .upload({
                Bucket: cluster,
                Body: content,
                Key: path,
            })
            .promise()
    }
}
