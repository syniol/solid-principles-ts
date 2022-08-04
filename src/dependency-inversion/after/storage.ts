import { Uploader } from './type'
import { SSDStorage } from './adapter'


export class Storage implements Uploader {
    readonly #client: Uploader

    public constructor(client?: Uploader) {
        this.#client = client || new SSDStorage()
    }

    public async upload(
        cluster: string,
        fileName: string,
        content: string,
        directory?: string,
    ): Promise<void> {
        return this.#client.upload(
            cluster,
            fileName,
            content,
            directory,
        )
    }
}
