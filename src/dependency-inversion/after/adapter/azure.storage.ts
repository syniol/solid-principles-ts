import { createFileService, FileService } from 'azure-storage'

import { Uploader } from '../type'


export class MicrosoftAzureStorage implements Uploader {
    readonly #client: FileService

    public constructor(client?: FileService) {
        this.#client = client || createFileService()
    }

    public async upload(
        cluster: string,
        fileName: string,
        content: string,
        directory?: string,
    ): Promise<void> {
        await new Promise((resolve, reject) => {
            this.#client.createFileFromText(
                cluster,
                directory || 'default',
                fileName,
                content,
                (error, _, response) => {
                    if (error) {
                        reject(error)
                    }

                    resolve(response)
                },
            )
        })
    }
}
