import commentCounter from '../commentcounter.js';

describe('Testing the comments count', () => {
  test('5 comments Added', () => {
    document.body.innerHTML = `
        <ul class="comment-list">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        </ul>
      `;
    const list = document.querySelector('.comment-list');
    const comments = commentCounter(list);
    expect(comments).toBe(6);
  });

  test('No Comment added', () => {
    document.body.innerHTML = '<ul class="comment-list"></ul>';
    const list = document.querySelector('.comment-list');
    const comments = commentCounter(list);
    expect(comments).toBe(1);
  });
});