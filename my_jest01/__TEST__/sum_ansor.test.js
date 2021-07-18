const SumAnsor = require('../controller/sum_ansor');

describe(("add"), () => {
    test('adds 1 + 1 to equal 2', () => {
        const mockCallback = jest.fn();

        let req = {
            body: {
                a: 1,
                b: 1
            }
        };
        let res = {
            render: mockCallback
        };
        // テスト実施
        let sumAnsor = new SumAnsor();
        sumAnsor.sum(req, res, null);

        // テスト検証
        // expect(mockCallback.mock.calls[0][0]).toBe('sum_ansor');
        expect(mockCallback.mock.calls[0][0]).toEqual('sum_ansor');
        expect(mockCallback.mock.calls[0][1]).toEqual({ sumAnsor: 2 });
    });
    test('adds 1 + 2 to equal 3', () => {
        const mockCallback = jest.fn();

        let req = {
            body: {
                a: 1,
                b: 2
            }
        };
        let res = {
            render: mockCallback
        };
        // テスト実施
        let sumAnsor = new SumAnsor();
        sumAnsor.sum(req, res, null);

        // テスト検証
        // expect(mockCallback.mock.calls[0][0]).toBe('sum_ansor');
        expect(mockCallback.mock.calls[0][0]).toEqual('sum_ansor');
        expect(mockCallback.mock.calls[0][1]).toEqual({ sumAnsor: 3 });
    });
});