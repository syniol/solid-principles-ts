import { S3 } from 'aws-sdk'


export class StorageService {
    public async upload(
        fileName: string,
        content: string,
    ): Promise<void> {
        const S3Service = new S3()

        await S3Service.upload({
            Bucket: 'MyBucket',
            Key: fileName,
            Body: content,
        }).promise()
    }
}
