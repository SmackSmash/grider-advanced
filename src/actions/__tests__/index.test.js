import { saveComment } from 'actions';
import { SAVE_COMMENT } from 'actions/types';

describe('saveComment', () => {
  it('returns an action of type SAVE_COMMENT', () => {
    const action = saveComment();
    expect(action.type).toEqual(SAVE_COMMENT);
  });

  it('returns an action with the payload set to the argument', () => {
    const action = saveComment('test');
    expect(action.payload).toEqual('test');
  });
});
