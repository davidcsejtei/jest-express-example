const getAllPosts = require('./getAllPosts');

describe('Get all posts request', () => {
    let mockRequest;
    let mockResponse;
    let responseObject = {};

    beforeEach(() => {
        mockRequest = {
            statusCode: 0,
        };
        mockResponse = {
            statusCode: 0,
            send: jest.fn().mockImplementation((result) => {
                responseObject = result;
            })
        };
    });

    test('200 - posts', async () => {
        const expectedStatusCode = 200;
        const expectedReponse = { 
            posts: ["A", "B"] 
        };

        getAllPosts(mockRequest, mockResponse);        

        expect(mockResponse.statusCode).toBe(expectedStatusCode);
        expect(responseObject).toEqual(expectedReponse);
    });
});
