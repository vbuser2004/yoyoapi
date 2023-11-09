import yoyoapi from '../dist/index.js';
import { ApiError } from '../dist/types/ApiError.js';
describe('Create yoyoApi Tests', () => {
    test('YoyoApi Class with Invalid Credentials', () => {
        expect(() => {
            //@ts-ignore
            const yo = new yoyoapi();
        }).toThrow('Invalid Authentication Details');
    });

    test('Class with Invalid ApiUrl', () => {
        expect(() => {
            const yo = new yoyoapi(
                'test',
                'test',
                'https://example.com',
                'badurl'
            );
        }).toThrow('Invalid API Url');
    });

    test('Invalid Authentication Credentials', () => {
        console.log(process.env.SOME_VAR);
        expect(async () => {
            const yo = new yoyoapi('test', 'test');
            const results = await yo.GetDevices();
            return results;
        }).toMatchObject<ApiError>;
    });
});