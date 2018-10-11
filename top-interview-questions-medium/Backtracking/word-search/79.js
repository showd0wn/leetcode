/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
function exist(board, word) {
  if (!board) return false
  if (!word) return true

  const rows = board.length
  const cols = board[0].length

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (search(board, word, 0, row, col)) {
        return true
      }
    }
  }

  return false
}

function search(board, word, pos, row, col) {
  const rows = board.length
  const cols = board[0].length
  const visit = '#'

  if (row < 0 || row >= rows) return false
  if (col < 0 || col >= cols) return false

  // not sure if this is needed since it will fail the check below anyway
  if (board[row][col] === visit) return false

  const ch = word[pos]

  if (board[row][col] === ch) {
    if (pos == word.length - 1) {
      return true
    }

    // mark as visited
    const save = board[row][col]
    board[row][col] = visit

    // try all 4
    let ret = search(board, word, pos + 1, row + 1, col) ||
             search(board, word, pos + 1, row - 1, col) ||
             search(board, word, pos + 1, row, col + 1) ||
             search(board, word, pos + 1, row, col - 1)

    // backtrack
    board[row][col] = save

    return ret
  }
  return false
}
