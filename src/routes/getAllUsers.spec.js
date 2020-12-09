const getAllUsers = require('./getAllUsers');

describe('Get all users request', () => {
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

    test('200 - users', async () => {
        const expectedStatusCode = 200;
        const expectedReponse = { 
            users: [
                {
                    name: 'John',
                    age: 30
                },
                {
                    name: 'Peter',
                    age: 40
                }
            ]
        };

        getAllUsers(mockRequest, mockResponse);        

        expect(mockResponse.statusCode).toBe(expectedStatusCode);
        expect(responseObject).toEqual(expectedReponse);
    });
});
