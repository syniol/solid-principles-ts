import { Storage } from './storage'

import {
    AmazonS3Storage,
    MicrosoftAzureStorage,
    SSDStorage,
} from './adapter'


describe('Dependency Inversion', () => {
    it('should Adapt to Azure Storage Service', () => {
        expect(new Storage(new MicrosoftAzureStorage())).toBeDefined()
    })

    it('should Adapt to Amazon S3 Service', () => {
        expect(new Storage(new AmazonS3Storage())).toBeDefined()
    })

    it('should Adapt native file system Service', () => {
        expect(new Storage(new SSDStorage())).toBeDefined()
    })
})
