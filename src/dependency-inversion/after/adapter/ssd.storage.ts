import fs from 'fs'
import { promisify } from 'util'

import { Uploader } from '../type'

export class SSDStorage<T> implements Uploader {
    readonly #client: any

    public constructor(client?: T) {
        this.#client = client || fs
    }

    public async upload(
        cluster: string,
        fileName: string,
        content: string,
        directory?: string
    ): Promise<void> {
        const writeAsync = promisify(this.#client.writeFile)

        const path = `${cluster}${directory ? `/${directory}` : ''}/${fileName}`

        await writeAsync(path, content, { encoding: 'utf8' })
    }
}
