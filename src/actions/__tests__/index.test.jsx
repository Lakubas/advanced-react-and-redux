import { saveComment } from 'actions';
import { SAVE_COMMENT } from 'actions/types';

describe('saveComment', () => {
    it('Has the correct type', () => {
        const action = saveComment();

        expect(action.type).toEqual(SAVE_COMMENT);
    });
    it('Has the correct payload', () => {
        const action = saveComment('new payload');

        expect(action.payload).toEqual('new payload');
    })
});
